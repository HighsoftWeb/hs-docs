import React from 'react';

type HighlightProps = {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
};

function Highlight({ children, bgColor, textColor }: HighlightProps) {
  return (
    <span
      style={{
        backgroundColor: bgColor ?? '#2b99ff',
        borderRadius: '4px',
        color: textColor ?? '#fff',
        padding: '0.2rem',
      }}
    >
      {children}
    </span>
  );
}

Highlight.shortcut = ({ children }) => (
  <span
    style={{
      backgroundColor: '#2b99ff',
      borderRadius: '4px',
      color: '#fff',
      padding: '0.2rem',
    }}
  >
    {children}
  </span>
);

Highlight.text = ({ children }) => (
  <span
    style={{
      color: '#88a1b8',
    }}
  >
    {children}
  </span>
);

export default Highlight;
