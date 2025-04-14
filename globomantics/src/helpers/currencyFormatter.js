// A currency formatter for Swedish kronor
export default function formatCurrency(amount) {
  const formatter = new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
  });
  return formatter.format(amount);
}
