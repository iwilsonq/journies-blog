export const urlify = path => {
  return path.split('').map(ch => {
    if (ch === ' ') return '-';
    if (ch === '?') return;
    return ch.toLowerCase();
  }).join('');
}

export const formatDate = date => {
  const snakeDate = date.slice(0,10);
  return snakeDate;
}
