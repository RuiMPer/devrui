"use client";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "./LanguageProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useTranslation();

  const navLinks = [
    { nome: t("MAINPAGE.NAVBAR.about", "Sobre"), href: "#sobre" },
    { nome: t("MAINPAGE.NAVBAR.projects", "Projetos"), href: "#projetos" },
    { nome: t("MAINPAGE.NAVBAR.skills", "Competências"), href: "#competencias" },
    { nome: t("MAINPAGE.NAVBAR.contact", "Contacto"), href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          {t("MAINPAGE.NAVBAR.brand", "Rui Pereira")}
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.nome} href={link.href} className="text-gray-300 hover:text-white transition-colors">
              {link.nome}
            </Link>
          ))}
        </div>

        {/* Mobile + lang toggle */}
        <div className="flex items-center gap-3">
          <fieldset className="flex items-center text-sm border-0 p-0 m-0">
            <legend className="sr-only">Language switch</legend>

            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${lang === "en" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-200 hover:bg-gray-700"}`}
            >
              EN
            </button>

            <span className="px-2 text-gray-400 select-none">/</span>

            <button
              type="button"
              onClick={() => setLang("pt")}
              aria-pressed={lang === "pt"}
              className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${lang === "pt" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-200 hover:bg-gray-700"}`}
            >
              PT
            </button>
          </fieldset>

          <div className="md:hidden">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
              <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div id="mobile-menu" className={`md:hidden bg-gray-900/95 border-t border-gray-800 transition-max-h duration-300 overflow-hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link key={link.nome} href={link.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
              {link.nome}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;