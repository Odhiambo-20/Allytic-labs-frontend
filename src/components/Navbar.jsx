import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import BrandLogo from './BrandLogo';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          <BrandLogo />

          <div className="hidden items-center gap-8 md:flex">
            {isHomePage && (
              <Link to="/login" className="text-gray-300 transition-colors hover:text-white" aria-label="Login">
                <User className="h-6 w-6" />
              </Link>
            )}
          </div>

          {isHomePage && (
            <button
              className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          )}
        </div>
      </div>

      {isHomePage && isMenuOpen && (
        <div className="border-t border-gray-800 bg-gray-950 md:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-3">
            <Link to="/login" className="block rounded-lg px-3 py-2 text-gray-300 hover:bg-white/10 hover:text-white" onClick={() => setIsMenuOpen(false)}>Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
