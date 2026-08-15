import React from 'react';
import { Link } from 'react-router-dom';

const BrandLogo = ({ className = '', compact = false }) => (
  <Link
    to="/"
    className={`group flex shrink-0 items-center text-white ${className}`}
    aria-label="Bella Technologies home"
  >
    <svg
      className={compact ? 'h-9 w-[5.25rem]' : 'h-14 w-[8.25rem]'}
      viewBox="0 0 500 250"
      role="img"
      aria-label="Bella Technologies"
    >
      <g transform="translate(201 2) scale(.5)">
        <path
          d="M100 18c59 0 106 48 106 107 0 60-48 108-108 108-57 0-104-44-108-100-2-39 18-77 51-98-18 25-27 53-24 80 4 43 39 77 82 77 46 0 83-37 83-83 0-41-30-76-70-82-4-1-8-1-12-1z"
          fill="#a71938"
        />
        <path
          d="M89 58c25 10 42 34 42 61 0 34-26 62-59 66 19-13 31-35 31-59 0-27-15-51-38-63 8-4 16-6 24-5z"
          fill="#7d1029"
        />
        <path
          d="M41 35c-18 25-27 53-24 80 4 43 39 77 82 77 35 0 66-22 78-53-9 48-50 84-100 84-57 0-103-44-107-100-2-38 18-76 51-97z"
          fill="#c44957"
          opacity=".72"
        />
      </g>

      <text
        x="250"
        y="170"
        fill="currentColor"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="92"
        fontWeight="500"
        letterSpacing="2"
      >
        BELLA
      </text>
      <text
        x="250"
        y="226"
        fill="currentColor"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="40"
        fontWeight="400"
        letterSpacing="12"
      >
        TECHNOLOGIES
      </text>
    </svg>
  </Link>
);

export default BrandLogo;
