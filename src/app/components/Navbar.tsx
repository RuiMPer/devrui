"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { nome: "Sobre", href: "#sobre" },
    { nome: "Projetos", href: "#projetos" },
    { nome: "Competências", href: "#competencias" },
    { nome: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
        >
          Rui Pereira
        </Link>

        {/* Links de Navegação (Desktop) */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.nome}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.nome}
            </Link>
          ))}
        </div>

        {/* Botão de Menu (Mobile) */}
        <div className="md:hidden">
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <span className="sr-only">
              {open ? "Fechar menu" : "Abrir menu"}
            </span>
            <svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-gray-900/95 border-t border-gray-800 transition-max-h duration-300 overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.nome}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              {link.nome}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
