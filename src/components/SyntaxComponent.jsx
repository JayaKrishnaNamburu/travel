import { MDXProvider } from '@mdx-js/react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import shell from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json'

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('js', js); // optional alias
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('sh', shell);
SyntaxHighlighter.registerLanguage('bash', shell); // optional alias
SyntaxHighlighter.registerLanguage('json', json);

const components = {
  code: ({ className, children }) => {
    if (className === undefined) {
      return (
        <code
        >
          {children}
        </code>
      );
    }
    const language = className.replace('language-', '') || 'text';

    return (
      <SyntaxHighlighter language={language} style={dracula} PreTag="div">
        {String(children).trim()}
      </SyntaxHighlighter>
    );
  },
};

export const MDXSyntaxProvider = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
