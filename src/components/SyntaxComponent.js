import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/hljs/css';
import sh from 'react-syntax-highlighter/dist/cjs/languages/hljs/shell';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('sh', sh);

// Define a custom component for code blocks
const components = {
  code: ({ className, children }) => {
    if (className === undefined) {
      return;
    }

    const language = className.replace('language-', '') || 'text';

    console.log(language);
    return (
      <SyntaxHighlighter language={language} style={dracula}>
        {children}
      </SyntaxHighlighter>
    );
  }
};

// Wrapper component to use in your app
export const CustomMDXProvider = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
