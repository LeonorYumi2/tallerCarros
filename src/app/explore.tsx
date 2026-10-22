import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useCarros } from '../hooks/useCarros';
import { formatCarroNumber } from '../utils/carros';
import { PatiotuercaColors } from '../constants/theme';

const palette = {
  background: PatiotuercaColors.background,
  primary: PatiotuercaColors.primary,
  secondary: PatiotuercaColors.secondary,
  text: PatiotuercaColors.text,
  muted: PatiotuercaColors.muted,
  border: PatiotuercaColors.secondary,
};

export default function Explore() {
  const { data: carros = [], isLoading, error } = useCarros();

  return (
    <FlatList
      style={styles.screen}
      contentContainerStyle={styles.content}
      data={carros}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.eyebrow}>PATIO TUERCA</Text>
          <Text style={styles.title}>Explora el inventario</Text>
          <Text style={styles.subtitle}>
            Revisa los vehículos disponibles y sus características.
          </Text>
          <View style={styles.accent} />
        </View>
      }
      ListEmptyComponent={
        <View style={styles.emptyCard}>
          {isLoading ? (
            <>
              <ActivityIndicator color={palette.primary} />
              <Text style={styles.emptyText}>Cargando vehículos...</Text>
            </>
          ) : error ? (
            <Text style={styles.errorText}>No se pudo cargar el inventario: {error.message}</Text>
          ) : (
            <Text style={styles.emptyText}>No hay vehículos disponibles por el momento.</Text>
          )}
        </View>
      }
      renderItem={({ item }) => {
        const precio = formatCarroNumber(item.precio);
        const kilometraje = formatCarroNumber(item.kilometraje);

        return (
          <View style={styles.carCard}>
            <View style={styles.carIcon}>
              <Text style={styles.carIconText}>
                {(item.marca || 'C').slice(0, 1).toUpperCase()}
              </Text>
            </View>
            <View style={styles.carInfo}>
              <Text style={styles.carTitle}>
                {item.marca || 'Marca no disponible'} {item.modelo || ''}
              </Text>
              <Text style={styles.carDetails}>
                {item.anio || 'Año no disponible'} · {item.color || 'Color no disponible'}
              </Text>
              <Text style={styles.carDetails}>
                {kilometraje === null ? 'Kilometraje no disponible' : `${kilometraje} km`}
              </Text>
            </View>
            <View style={styles.priceTag}>
              <Text style={styles.priceText}>
                {precio === null ? 'Precio no disponible' : `$${precio}`}
              </Text>
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 28,
  },
  header: {
    backgroundColor: palette.primary,
    paddingHorizontal: 22,
    paddingTop: 58,
    paddingBottom: 27,
  },
  eyebrow: {
    color: palette.background,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
  },
  title: {
    color: palette.background,
    fontSize: 26,
    lineHeight: 33,
    fontWeight: '800',
    marginTop: 12,
  },
  subtitle: {
    color: palette.background,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 7,
  },
  accent: {
    width: 48,
    height: 4,
    borderRadius: 2,
    backgroundColor: palette.secondary,
    marginTop: 20,
  },
  emptyCard: {
    minHeight: 112,
    margin: 16,
    padding: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: palette.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: palette.muted,
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  errorText: {
    color: palette.primary,
    fontSize: 14,
    textAlign: 'center',
  },
  carCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginHorizontal: 16,
    marginTop: 14,
    padding: 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: palette.background,
    shadowColor: palette.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  carIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.secondary,
  },
  carIconText: {
    color: palette.primary,
    fontSize: 18,
    fontWeight: '800',
  },
  carInfo: {
    flex: 1,
  },
  carTitle: {
    color: palette.text,
    fontSize: 15,
    fontWeight: '800',
  },
  carDetails: {
    color: palette.muted,
    fontSize: 12,
    marginTop: 4,
  },
  priceTag: {
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 7,
    backgroundColor: palette.secondary,
  },
  priceText: {
    color: palette.text,
    fontSize: 12,
    fontWeight: '800',
  },
});
