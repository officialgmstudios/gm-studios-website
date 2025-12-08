'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Work', href: '#work' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {/* Left: Logo */}
      <div className="nav-left">
        <Link href="#top" className="nav-logo">
          <div className="nav-logo-mark" />
          <div className="nav-logo-text">
            <span className="nav-logo-title">GM Studios</span>
            <span className="nav-logo-sub">The Collective</span>
          </div>
        </Link>
      </div>

      {/* Center/Right: Desktop links */}
      <div className="nav-center">
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: CTA + Mobile Toggle */}
      <div className="nav-right">
        <a href="#join" className="nav-cta">
          Join The Collective
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={`nav-toggle-line ${isOpen ? 'open' : ''}`} />
          <span className={`nav-toggle-line ${isOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="nav-mobile-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#join"
                  className="nav-mobile-cta"
                  onClick={() => setIsOpen(false)}
                >
                  Join The Collective
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
