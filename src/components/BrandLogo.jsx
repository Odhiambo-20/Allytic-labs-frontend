import React from 'react';
import { Link } from 'react-router-dom';

const BrandLogo = ({ className = '' }) => (
  <Link
    to="/"
    className={`group flex shrink-0 items-center ${className}`}
    aria-label="Bella home"
  >
    <span className="inline-flex items-center text-white transition-colors group-hover:text-blue-100">
      <svg
        className="h-12 w-[8.75rem]"
        viewBox="0 0 280 96"
        role="img"
        aria-labelledby="bellaLogoTitle"
      >
        <title id="bellaLogoTitle">Bella</title>
        <path
          d="M17 13H94C100.6 13 106 18.4 106 25V79C106 85.6 100.6 91 94 91H17V13Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinejoin="round"
        />
        <path
          d="M86 33C77 25.5 61.5 23.5 48.8 30.3C35.6 37.4 30 51.4 36.2 62.2C41.2 70.9 53.3 73.6 64.3 68.9C72.7 65.3 76 58 72.4 52.4C69.3 47.5 60.7 46.6 52.7 51"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M74 33C91.5 43 94.9 62.9 81.5 77.8C68.7 92 44.7 91.7 29 77"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M119 24V72"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M138 24V72"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M157 24V72"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M177 24H218C229 24 238 33 238 48C238 63 229 72 218 72H177V24Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="136"
          y="90"
          fill="currentColor"
          fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
          fontSize="22"
          fontWeight="300"
          letterSpacing="13"
        >
          BELLA
        </text>
      </svg>
      <span className="sr-only">Bella</span>
    </span>
  </Link>
);

export default BrandLogo;
