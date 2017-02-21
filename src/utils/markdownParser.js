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

  const mergedDoubleStars = deleteCharactersAtIndices(chars, indicesToDelete);
  return replaceMarkdown(mergedDoubleStars).join('');
};

const stackMatches = {
  '*': '*',
  '**': '**',
  '[': ']',
  '(': ')',
  '#': '#',
  '##': '##',
  '###': '###',
  '`': '`'
};

const tagMatches =  {
  '*': 'em',
  '**': 'strong',
  '[': '<a',
  ']': 'a',
  '(': ' href="',
  ')': '">',
  '#': 'h1',
  '##': 'h2',
  '###': 'h3',
  '`': 'code'
};

const replaceMarkdown = charArray => {
  const stack = [];

  const charsWithTags = replaceTags(charArray);

  return charsWithTags;


  function replaceTags(chars) {
    return chars.map(ch => {
      if (tagMatches[ch]) {
        if (stackMatches[stack[stack.length - 1]] === ch) {
          stack.pop();
          return  ch === ')' ? tagMatches[ch] : `</${tagMatches[ch]}>`;
        } else {
          stack.push(ch);
          return ((ch === '(' || ch === '[') ? tagMatches[ch] : `<${tagMatches[ch]}>`);
        }
      }
      return ch;
    });
  };
};



const deleteCharactersAtIndices = (array, indicesToDelete) => {
  return array.filter((ch, index) => !indicesToDelete.includes(index));
};
