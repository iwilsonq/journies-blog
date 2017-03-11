import React from 'react';
import { Gist } from '../common';
import { markdownParser } from '../../utils/helpers';

const ArticleBody = ({ content }) => {
  return (
    <div className="article-body">
      {content.map((paragraph, i) => {
        if (paragraph.slice(0,2) === 'G:') {
          const attrs = paragraph.split(' ')
          const gist = attrs[0].slice(2);
          const file = attrs[1].slice(2);
          return <Gist
            key={i}
            gist={gist}
            file={file}
            />;
        } else if (paragraph.slice(0,3) === '###') {
          return <h3 key={i}>{paragraph.slice(3)}</h3>;
        } else if (paragraph.slice(0,2) === '##') {
          return <h2 key={i}>{paragraph.slice(2)}</h2>;
        } else if (paragraph.slice(0,1) === '#') {
          return <h1 key={i}>{paragraph.slice(1)}</h1>;
        } else {
          return <p
            key={i}
            dangerouslySetInnerHTML={{__html: markdownParser(paragraph)}}
          />;
        }
      })}
    </div>
  );
};

export default ArticleBody;
