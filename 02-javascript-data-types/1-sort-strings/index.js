/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const h = arr.slice();

  if (param === 'asc') {
    h.sort((a, b) => {
      return a.localeCompare(b, 'ru-u-en', { caseFirst: 'upper' });
    });
    return h;
  } else if (param === 'desc') {
    h.sort((b, a) => {
      return a.localeCompare(b, 'ru-u-en', { caseFirst: 'upper' });
    });
    return h;
  }
  console.error('Укажите правильный param = asc / desc');
}
