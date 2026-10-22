export function formatCarroNumber(value: unknown): string | null {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  const number = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(number) ? number.toLocaleString('es-EC') : null;
}
