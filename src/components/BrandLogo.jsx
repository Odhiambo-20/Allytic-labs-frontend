import React from 'react';
import { Link } from 'react-router-dom';

const BrandLogo = ({ className = '' }) => (
  <Link
    to="/"
    className={`group flex shrink-0 items-center ${className}`}
    aria-label="Bella home"
  >
    <span className="relative inline-flex items-center gap-[0.42rem] text-white">
      <span className="relative inline-flex h-7 w-6 items-center justify-center" aria-hidden="true">
        <span className="absolute top-0 h-[3px] w-6 rounded-full bg-current" />
        <span className="absolute top-[3px] h-[20px] w-[3px] rounded-full bg-current" />
        <span className="absolute top-[9px] h-[3px] w-[16px] rounded-full bg-current" />
        <span className="absolute bottom-[2px] h-[3px] w-6 rounded-full bg-current" />
      </span>
      <span className="relative inline-flex h-7 w-6 items-center justify-center" aria-hidden="true">
        <span className="absolute left-0 h-[24px] w-[3px] rounded-full bg-current" />
        <span className="absolute top-0 h-[3px] w-6 rounded-full bg-current" />
        <span className="absolute top-[10px] h-[3px] w-[19px] rounded-full bg-current" />
        <span className="absolute bottom-[1px] h-[3px] w-6 rounded-full bg-current" />
      </span>
      <span className="relative inline-flex h-7 w-5 items-center justify-center" aria-hidden="true">
        <span className="absolute left-0 h-[24px] w-[3px] rounded-full bg-current" />
        <span className="absolute bottom-[1px] h-[3px] w-5 rounded-full bg-current" />
      </span>
      <span className="relative inline-flex h-7 w-5 items-center justify-center" aria-hidden="true">
        <span className="absolute left-0 h-[24px] w-[3px] rounded-full bg-current" />
        <span className="absolute bottom-[1px] h-[3px] w-5 rounded-full bg-current" />
      </span>
      <span className="relative inline-flex h-7 w-7 items-center justify-center" aria-hidden="true">
        <span className="absolute bottom-[1px] h-[24px] w-[3px] origin-bottom -rotate-[16deg] rounded-full bg-current" />
        <span className="absolute bottom-[1px] h-[24px] w-[3px] origin-bottom rotate-[16deg] rounded-full bg-current" />
        <span className="absolute top-[15px] h-[3px] w-[17px] rounded-full bg-current" />
      </span>
      <span className="sr-only">Bella</span>
    </span>
  </Link>
);

export default BrandLogo;
