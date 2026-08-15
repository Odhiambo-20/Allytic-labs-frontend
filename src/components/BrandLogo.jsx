import React from 'react';
import { Link } from 'react-router-dom';
import bellaLogo from '../assets/logo.jpeg';

const BrandLogo = ({ className = '', compact = false }) => (
  <Link
    to="/"
    className={`group flex shrink-0 items-center ${className}`}
    aria-label="Bella Technologies home"
  >
    <span
      className={`relative block shrink-0 overflow-hidden ${
        compact ? 'h-8 w-12' : 'h-14 w-20'
      }`}
    >
      <img
        src={bellaLogo}
        alt="Bella Technologies"
        className="absolute left-1/2 top-1/2 h-[285%] w-auto max-w-none -translate-x-1/2 -translate-y-[48%] transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </span>
  </Link>
);

export default BrandLogo;
