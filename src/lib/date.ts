/**
 * Formatage simple de dates.
 */
export function formatDate(value: string, locale = 'fr-FR'): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleDateString(locale, { day: '2-digit', month: 'long', year: 'numeric' });
}
