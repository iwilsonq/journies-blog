export const urlify = path => {
  return path.split('').map(ch => {
    if (ch === ' ') return '-';
    return ch.toLowerCase();
  }).join('');
}
