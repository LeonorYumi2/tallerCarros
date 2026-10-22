import { useRef, useState } from 'react';
import { useForm } from '@tanstack/react-form';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  useAgregarCarro,
  useCarros,
  useCarrosEliminandoIds,
  useEditarCarro,
  useEliminarCarro,
} from '../hooks/useCarros';
import type { Carro, CarroInput } from '../types/carro';
import { formatCarroNumber } from '../utils/carros';
import { PatiotuercaColors } from '../constants/theme';

interface CarroFormValues {
  marca: string;
  anio: string;
  modelo: string;
  color: string;
  kilometraje: string;
  precio: string;
}

const EMPTY_FORM: CarroFormValues = {
  marca: '',
  anio: '',
  modelo: '',
  color: '',
  kilometraje: '',
  precio: '',
};

const currentYear = new Date().getFullYear();

function validateRequired(value: string, label: string) {
  return value.trim() ? undefined : `${label} es obligatorio.`;
}

function validateYear(value: string) {
  if (!value.trim()) return 'El año es obligatorio.';
  const year = Number(value);
  return Number.isInteger(year) && year >= 1900 && year <= currentYear
    ? undefined
    : `Ingresa un año entre 1900 y ${currentYear}.`;
}

function validatePositiveNumber(value: string, label: string) {
  if (!value.trim()) return `${label} es obligatorio.`;
  const number = Number(value);
  return Number.isFinite(number) && number > 0
    ? undefined
    : `${label} debe ser mayor que 0.`;
}

function isCarroFormValid(values: CarroFormValues) {
  return [
    validateRequired(values.marca, 'La marca'),
    validateRequired(values.modelo, 'El modelo'),
    validateYear(values.anio),
    validateRequired(values.color, 'El color'),
    validatePositiveNumber(values.kilometraje, 'El kilometraje'),
    validatePositiveNumber(values.precio, 'El precio'),
  ].every((error) => error === undefined);
}

function toCarroInput(values: CarroFormValues): CarroInput {
  return {
    marca: values.marca.trim(),
    anio: Number(values.anio),
    modelo: values.modelo.trim(),
    color: values.color.trim(),
    kilometraje: Number(values.kilometraje),
    precio: Number(values.precio),
  };
}

function toFormValues(carro: Carro): CarroFormValues {
  return {
    marca: carro.marca ?? '',
    anio: String(carro.anio ?? ''),
    modelo: carro.modelo ?? '',
    color: carro.color ?? '',
    kilometraje: String(carro.kilometraje ?? ''),
    precio: String(carro.precio ?? ''),
  };
}

export default function App() {
  const [carroEditando, setCarroEditando] = useState<Carro | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const listRef = useRef<FlatList<Carro> | null>(null);
  const { data: carros = [], isLoading, error } = useCarros();
  const agregarMutation = useAgregarCarro();
  const editarMutation = useEditarCarro();
  const eliminarMutation = useEliminarCarro();
  const eliminandoIds = useCarrosEliminandoIds();
  const guardando = agregarMutation.isPending || editarMutation.isPending;

  const form = useForm({
    defaultValues: EMPTY_FORM,
    onSubmit: async ({ value }) => {
      const carro = toCarroInput(value);
      if (carroEditando) {
        await editarMutation.mutateAsync({ id: carroEditando.id, carro });
      } else {
        await agregarMutation.mutateAsync(carro);
      }
      form.reset(EMPTY_FORM);
      setCarroEditando(null);
    },
  });

  const cancelarEdicion = () => {
    form.reset(EMPTY_FORM);
    setCarroEditando(null);
    setSubmissionError(null);
  };

  const editar = (carro: Carro) => {
    const values = toFormValues(carro);
    form.reset(values);
    form.setFieldValue('marca', values.marca);
    form.setFieldValue('anio', values.anio);
    form.setFieldValue('modelo', values.modelo);
    form.setFieldValue('color', values.color);
    form.setFieldValue('kilometraje', values.kilometraje);
    form.setFieldValue('precio', values.precio);
    setCarroEditando(carro);
    setSubmissionError(null);
    listRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  const guardar = () => {
    setSubmissionError(null);
    void form.handleSubmit().catch((submitError: unknown) => {
      setSubmissionError(
        submitError instanceof Error
          ? submitError.message
          : 'Ocurrió un error inesperado al guardar el carro.',
      );
    });
  };

  const confirmarEliminacion = (carro: Carro) => {
    Alert.alert(
      'Eliminar carro',
      `¿Deseas eliminar ${carro.marca} ${carro.modelo}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => eliminarMutation.mutate(carro.id),
        },
      ],
    );
  };

  const renderInput = (
    label: string,
    value: string,
    onChangeText: (value: string) => void,
    onBlur: () => void,
    errors: readonly unknown[],
    showError: boolean,
    keyboardType: 'default' | 'number-pad' | 'decimal-pad' = 'default',
    autoCapitalize: 'none' | 'sentences' | 'words' = 'sentences',
  ) => (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        accessibilityLabel={label}
        placeholder={label}
        placeholderTextColor={colors.muted}
        value={value}
        onChangeText={(nextValue) => {
          setSubmissionError(null);
          onChangeText(nextValue);
        }}
        onBlur={onBlur}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        style={[styles.input, showError && errors.length > 0 && styles.inputError]}
      />
      {showError && errors.map((fieldError, index) => (
        <Text key={`${label}-${index}`} style={styles.fieldError}>
          {String(fieldError)}
        </Text>
      ))}
    </>
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Cargando inventario...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>No se pudieron cargar los carros: {error.message}</Text>
      </View>
    );
  }

  return (
    <FlatList
      ref={listRef}
      style={styles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
      data={carros}
      keyExtractor={(item) => item.id}
      extraData={carroEditando?.id}
      ListHeaderComponent={
        <View>
          <View style={styles.hero}>
            <Text style={styles.brandEyebrow}>PATIO TUERCA</Text>
            <Text style={styles.heroTitle}>Tu próximo carro empieza aquí</Text>
            <Text style={styles.heroSubtitle}>
              Administra tu inventario de forma simple y segura.
            </Text>
            <View style={styles.accent} />
          </View>

          <View style={styles.formCard}>
            <Text style={styles.sectionEyebrow}>
              {carroEditando ? 'ACTUALIZA LA INFORMACIÓN' : 'NUEVA PUBLICACIÓN'}
            </Text>
            <Text style={styles.sectionTitle}>
              {carroEditando ? 'Editar carro' : 'Agregar un carro'}
            </Text>
            <Text style={styles.helperText}>
              Completa los datos para mantener tu inventario al día.
            </Text>

            <form.Field
              name="marca"
              validators={{
                onMount: ({ value }) => validateRequired(value, 'La marca'),
                onChange: ({ value }) => validateRequired(value, 'La marca'),
                onBlur: ({ value }) => validateRequired(value, 'La marca'),
                onSubmit: ({ value }) => validateRequired(value, 'La marca'),
              }}
            >
              {(field) => renderInput(
                'Marca',
                field.state.value,
                field.handleChange,
                field.handleBlur,
                field.state.meta.errors,
                field.state.meta.isTouched || field.state.meta.isDirty,
              )}
            </form.Field>

            <form.Field
              name="modelo"
              validators={{
                onMount: ({ value }) => validateRequired(value, 'El modelo'),
                onChange: ({ value }) => validateRequired(value, 'El modelo'),
                onBlur: ({ value }) => validateRequired(value, 'El modelo'),
                onSubmit: ({ value }) => validateRequired(value, 'El modelo'),
              }}
            >
              {(field) => renderInput(
                'Modelo',
                field.state.value,
                field.handleChange,
                field.handleBlur,
                field.state.meta.errors,
                field.state.meta.isTouched || field.state.meta.isDirty,
              )}
            </form.Field>

            <View style={styles.fieldRow}>
              <View style={styles.fieldHalf}>
                <form.Field
                  name="anio"
                  validators={{
                    onMount: ({ value }) => validateYear(value),
                    onChange: ({ value }) => validateYear(value),
                    onBlur: ({ value }) => validateYear(value),
                    onSubmit: ({ value }) => validateYear(value),
                  }}
                >
                  {(field) => renderInput(
                    'Año',
                    field.state.value,
                    field.handleChange,
                    field.handleBlur,
                    field.state.meta.errors,
                    field.state.meta.isTouched || field.state.meta.isDirty,
                    'number-pad',
                  )}
                </form.Field>
              </View>
              <View style={styles.fieldHalf}>
                <form.Field
                  name="color"
                  validators={{
                    onMount: ({ value }) => validateRequired(value, 'El color'),
                    onChange: ({ value }) => validateRequired(value, 'El color'),
                    onBlur: ({ value }) => validateRequired(value, 'El color'),
                    onSubmit: ({ value }) => validateRequired(value, 'El color'),
                  }}
                >
                  {(field) => renderInput(
                    'Color',
                    field.state.value,
                    field.handleChange,
                    field.handleBlur,
                    field.state.meta.errors,
                    field.state.meta.isTouched || field.state.meta.isDirty,
                  )}
                </form.Field>
              </View>
            </View>

            <form.Field
              name="kilometraje"
              validators={{
                onMount: ({ value }) => validatePositiveNumber(value, 'El kilometraje'),
                onChange: ({ value }) => validatePositiveNumber(value, 'El kilometraje'),
                onBlur: ({ value }) => validatePositiveNumber(value, 'El kilometraje'),
                onSubmit: ({ value }) => validatePositiveNumber(value, 'El kilometraje'),
              }}
            >
              {(field) => renderInput(
                'Kilometraje',
                field.state.value,
                field.handleChange,
                field.handleBlur,
                field.state.meta.errors,
                field.state.meta.isTouched || field.state.meta.isDirty,
                'decimal-pad',
              )}
            </form.Field>

            <form.Field
              name="precio"
              validators={{
                onMount: ({ value }) => validatePositiveNumber(value, 'El precio'),
                onChange: ({ value }) => validatePositiveNumber(value, 'El precio'),
                onBlur: ({ value }) => validatePositiveNumber(value, 'El precio'),
                onSubmit: ({ value }) => validatePositiveNumber(value, 'El precio'),
              }}
            >
              {(field) => renderInput(
                'Precio (USD)',
                field.state.value,
                field.handleChange,
                field.handleBlur,
                field.state.meta.errors,
                field.state.meta.isTouched || field.state.meta.isDirty,
                'decimal-pad',
              )}
            </form.Field>

            {submissionError ? (
              <Text style={styles.errorText}>
                No se pudo {carroEditando ? 'actualizar' : 'agregar'} el carro: {submissionError}
              </Text>
            ) : null}
            {eliminarMutation.isError && (
              <Text style={styles.errorText}>
                No se pudo eliminar el carro: {eliminarMutation.error.message}
              </Text>
            )}

            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting, state.values] as const}
            >
              {([canSubmit, isSubmitting, values]) => {
                const disabled =
                  !canSubmit || !isCarroFormValid(values) || isSubmitting || guardando;
                return (
                  <View style={styles.formActions}>
                    <Pressable
                      accessibilityRole="button"
                      onPress={guardar}
                      disabled={disabled}
                      style={[styles.primaryButton, disabled && styles.buttonDisabled]}
                    >
                      {isSubmitting || guardando ? (
                        <ActivityIndicator color={colors.background} />
                      ) : (
                        <Text style={styles.primaryButtonText}>
                          {carroEditando ? 'Guardar cambios' : 'Publicar carro'}
                        </Text>
                      )}
                    </Pressable>
                    {carroEditando && (
                      <Pressable
                        accessibilityRole="button"
                        onPress={cancelarEdicion}
                        disabled={guardando}
                        style={styles.secondaryButton}
                      >
                        <Text style={styles.secondaryButtonText}>Cancelar edición</Text>
                      </Pressable>
                    )}
                  </View>
                );
              }}
            </form.Subscribe>
          </View>

          <View style={styles.inventoryHeading}>
            <View>
              <Text style={styles.sectionEyebrow}>ENCUENTRA TU OPCIÓN</Text>
              <Text style={styles.sectionTitle}>Carros disponibles</Text>
            </View>
            <Text style={styles.countBadge}>{carros.length}</Text>
          </View>
        </View>
      }
      ListEmptyComponent={
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>Aún no hay carros publicados</Text>
          <Text style={styles.helperText}>Agrega el primero desde el formulario.</Text>
        </View>
      }
      renderItem={({ item }) => {
        const precio = formatCarroNumber(item.precio);
        const kilometraje = formatCarroNumber(item.kilometraje);
        const eliminando = eliminandoIds.includes(item.id);

        return (
          <View style={styles.carCard}>
            <View style={styles.carCardHeader}>
              <View style={styles.carIcon}>
                <Text style={styles.carIconText}>
                  {(item.marca || 'C').slice(0, 1).toUpperCase()}
                </Text>
              </View>
              <View style={styles.carHeading}>
                <Text style={styles.carTitle}>
                  {item.marca || 'Marca no disponible'} {item.modelo || ''}
                </Text>
                <Text style={styles.carSubtitle}>
                  {item.anio ? `Año ${item.anio}` : 'Año no disponible'} · {item.color || 'Color no disponible'}
                </Text>
              </View>
              <View style={styles.priceTag}>
                <Text style={styles.priceText}>
                  {precio === null ? 'Precio no disponible' : `$${precio}`}
                </Text>
              </View>
            </View>
            <View style={styles.cardDivider} />
            <View style={styles.cardFooter}>
              <Text style={styles.mileageText}>
                {kilometraje === null ? 'Kilometraje no disponible' : `${kilometraje} km`}
              </Text>
              <View style={styles.cardActions}>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => editar(item)}
                  disabled={guardando || eliminarMutation.isPending}
                  style={styles.editButton}
                >
                  <Text style={styles.editButtonText}>Editar</Text>
                </Pressable>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => confirmarEliminacion(item)}
                  disabled={eliminandoIds.length > 0}
                  style={[styles.deleteButton, eliminando && styles.buttonDisabled]}
                >
                  <Text style={styles.deleteButtonText}>
                    {eliminando ? 'Eliminando...' : 'Eliminar'}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
}

const colors = {
  background: PatiotuercaColors.background,
  primary: PatiotuercaColors.primary,
  secondary: PatiotuercaColors.secondary,
  text: PatiotuercaColors.text,
  muted: PatiotuercaColors.muted,
  error: PatiotuercaColors.primary,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: 36,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.background,
  },
  loadingText: {
    color: colors.muted,
    marginTop: 12,
    fontSize: 15,
  },
  hero: {
    backgroundColor: colors.primary,
    paddingHorizontal: 22,
    paddingTop: 58,
    paddingBottom: 27,
  },
  brandEyebrow: {
    color: colors.background,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
  },
  heroTitle: {
    color: colors.background,
    fontSize: 27,
    lineHeight: 34,
    fontWeight: '800',
    marginTop: 12,
  },
  heroSubtitle: {
    color: colors.background,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 7,
  },
  accent: {
    width: 48,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.secondary,
    marginTop: 20,
  },
  formCard: {
    backgroundColor: colors.background,
    marginHorizontal: 16,
    marginTop: 18,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.secondary,
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 3,
  },
  sectionEyebrow: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 21,
    fontWeight: '800',
    marginTop: 5,
  },
  helperText: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 4,
    marginBottom: 14,
  },
  label: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 11,
    marginBottom: 6,
  },
  input: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 9,
    backgroundColor: colors.background,
    color: colors.text,
    paddingHorizontal: 13,
    fontSize: 15,
  },
  inputError: {
    borderColor: colors.error,
  },
  fieldError: {
    color: colors.error,
    fontSize: 12,
    marginTop: 4,
  },
  fieldRow: {
    flexDirection: 'row',
    gap: 12,
  },
  fieldHalf: {
    flex: 1,
  },
  errorText: {
    color: colors.error,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 12,
  },
  formActions: {
    marginTop: 20,
    gap: 9,
  },
  primaryButton: {
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  primaryButtonText: {
    color: colors.background,
    fontSize: 15,
    fontWeight: '800',
  },
  buttonDisabled: {
    opacity: 0.55,
  },
  secondaryButton: {
    minHeight: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
  inventoryHeading: {
    marginHorizontal: 18,
    marginTop: 27,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countBadge: {
    minWidth: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.secondary,
    color: colors.text,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    fontWeight: '800',
    paddingTop: 6,
  },
  emptyCard: {
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 14,
    backgroundColor: colors.background,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  carCard: {
    backgroundColor: colors.background,
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.secondary,
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  carCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  carIcon: {
    height: 42,
    width: 42,
    borderRadius: 12,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carIconText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '800',
  },
  carHeading: {
    flex: 1,
  },
  carTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  carSubtitle: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 4,
  },
  priceTag: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 7,
  },
  priceText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '800',
  },
  cardDivider: {
    height: 1,
    backgroundColor: colors.secondary,
    marginVertical: 13,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  mileageText: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '600',
  },
  cardActions: {
    flexDirection: 'row',
    gap: 8,
  },
  editButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  editButtonText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700',
  },
  deleteButton: {
    borderRadius: 8,
    backgroundColor: colors.secondary,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  deleteButtonText: {
    color: colors.error,
    fontSize: 13,
    fontWeight: '700',
  },
});
