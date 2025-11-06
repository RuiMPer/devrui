"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

// ✅ Types
export type Translations = Record<string, unknown>;

export type LangContext = {
  lang: string;
  setLang: (l: string) => void;
  t: (path: string, fallback?: string) => string;
  translations: Translations | null;
  ready: boolean;
};

const LanguageContext = createContext<LangContext>({
  lang: "pt",
  setLang: () => {},
  t: () => "",
  translations: null,
  ready: false,
});

export function useTranslation() {
  return useContext(LanguageContext);
}

function getTranslation(obj: Record<string, unknown>, path: string[]): unknown {
  return path.reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem("lang") || "pt";
    } catch {
      return "pt";
    }
  });

  const [translations, setTranslations] = useState<Translations | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setReady(false);
      try {
        const res = await fetch(`/locales/${lang}/common.json`);
        if (!res.ok) throw new Error("Failed to load translations");
        const json: Translations = await res.json();
        if (mounted) setTranslations(json);
      } catch {
        if (mounted) setTranslations(null);
      } finally {
        if (mounted) setReady(true);
      }
    }
    load();
    try {
      localStorage.setItem("lang", lang);
    } catch {}
    return () => {
      mounted = false;
    };
  }, [lang]);

  function setLang(l: string) {
    setLangState(l);
  }

  function t(path: string, fallback: string = ""): string {
    if (!translations) return fallback;
    const result = getTranslation(translations, path.split("."));
    return typeof result === "string" ? result : fallback;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, translations, ready }}>
      {!ready ? (
        <div className="flex h-screen items-center justify-center bg-black text-white transition-opacity duration-300 opacity-100">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
            <p className="text-sm opacity-80">Loading translations...</p>
          </div>
        </div>
      ) : (
        <div className="transition-opacity duration-500 opacity-100 animate-fadeIn">
          {children}
        </div>
      )}
    </LanguageContext.Provider>
  );
}
