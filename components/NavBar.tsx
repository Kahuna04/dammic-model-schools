"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/about", label: "About", icon: "ℹ️" },
  { href: "/academics", label: "Academics", icon: "📚" },
  { href: "/admissions", label: "Admissions", icon: "📝" },
  { href: "/calendar", label: "Calendar", icon: "📅" },
  { href: "/gallery", label: "Gallery", icon: "🖼️" },
  { href: "/news", label: "News", icon: "📰" },
  { href: "/contact", label: "Contact", icon: "📩" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-white via-brand-cream/50 to-white backdrop-blur border-b-2 border-brand-green/20 shadow-md sticky top-0 z-50">
      <div className="container-responsive flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 text-base sm:text-xl font-bold text-brand-dark hover:text-brand-green transition">
          <span className="text-xl sm:text-2xl">🎓</span>
          <span className="hidden sm:inline">Dammic Model Schools</span>
          <span className="sm:hidden">Dammic</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-4 xl:gap-6 text-sm font-medium">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-brand-green hover:scale-105 transition-all">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/admissions" className="btn-primary text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3">
            <span className="hidden xs:inline">📝 </span>Apply
          </Link>
          
          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-brand-cream transition"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-brand-dark transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-full bg-brand-dark transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-brand-dark transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="container-responsive pb-4 space-y-1">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-brand-cream transition text-brand-dark font-medium"
            >
              <span className="text-xl">{n.icon}</span>
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
