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
};

const months = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
};

export const formatSimpleDate = date => {
  const snakeDate = formatDate(date);
  const year = snakeDate.slice(0,4);
  const month = snakeDate.slice(5,7);
  const day  = snakeDate.slice(8);
  return months[month] + '. ' + day + ' ' + year;
}



export * from './markdownParser';
