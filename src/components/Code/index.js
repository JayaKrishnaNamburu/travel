import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Code = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={coy}>
      {value}
    </SyntaxHighlighter>
  );
};

export default Code;
