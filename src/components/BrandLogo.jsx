import React from 'react';
import { Link } from 'react-router-dom';
import allyticLogo from '../assets/allytic-labs-logo.svg';

const BrandLogo = ({ className = '' }) => (
  <Link
    to="/"
    className={`flex shrink-0 items-center gap-3 ${className}`}
    aria-label="Allytic Labs home"
  >
    <img
      src={allyticLogo}
      alt=""
      className="h-11 w-11 rounded-lg shadow-lg shadow-blue-900/25"
      aria-hidden="true"
    />
    <span className="leading-none">
      <span className="block text-lg font-bold text-white sm:text-xl">Allytic Labs</span>
      <span className="mt-1 hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-200 sm:block">
        Robotics & Energy
      </span>
    </span>
  </Link>
);

export default BrandLogo;
