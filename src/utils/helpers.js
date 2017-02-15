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

export const markdownParser = textBlock => {
  const chars = textBlock.split('');
  const indicesToDelete = [];
  for (let i = 1; i < chars.length; i++) {
    let currentChar = chars[i];
    let prevChar = chars[i - 1];
    if (currentChar === '*' && prevChar === '*') {
      chars[i-1] = '**';
      indicesToDelete.push(i)
    }
  }

  const replacedDoubleStars = deleteCharactersAtIndices(chars, indicesToDelete);

  return replaceForHTMLTags(replacedDoubleStars);
};

const replaceForHTMLTags = charArray => {
  const stack = [];

  return charArray.map(ch => {
    if (ch === '*' || ch === '**') {
      if (stack[stack.length - 1] === ch) {
        stack.pop();
        return (ch === '*' ? '</em>' : '</strong>');
      } else {
        stack.push(ch);
        return (ch === '*' ? '<em>' : '<strong>');
      }
    }
    return ch;
  }).join('');
};

const deleteCharactersAtIndices = (array, indicesToDelete) => {
  return array.filter((ch, index) => !indicesToDelete.includes(index));
};
