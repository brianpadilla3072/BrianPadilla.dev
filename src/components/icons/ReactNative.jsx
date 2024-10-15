import React from 'react';

const ReactNative =  ({ className = '', ...props }) => (
  <svg
    {...props}
    className={`${className}`}
    width="2rem"
    height="2rem"
    viewBox="-10.5 -9.45 21 18.9"
    fill="#4f46e5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="0" cy="0" r="2" />
    <g stroke="#4f46e5" strokeWidth="1" fill="none">
      <ellipse rx="10" ry="4.5" />
      <ellipse rx="10" ry="4.5" transform="rotate(60)" />
      <ellipse rx="10" ry="4.5" transform="rotate(120)" />
    </g>
  </svg>
);

export default ReactNative;
