import React from 'react';

const ReactJS = ({ className = '', ...props })  => (
  <svg
    width="2rem"
    height="2rem"
    {...props}
    className={`${className}`}
    viewBox="-10.5 -9.45 21 18.9"
    fill="#149ECA"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="0" cy="0" r="2" />
    <g stroke="#149ECA" strokeWidth="1" fill="none">
      <ellipse rx="10" ry="4.5" />
      <ellipse rx="10" ry="4.5" transform="rotate(60)" />
      <ellipse rx="10" ry="4.5" transform="rotate(120)" />
    </g>
  </svg>
);

export default ReactJS;
