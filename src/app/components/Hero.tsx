"use client";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useTranslation } from "./LanguageProvider";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {t("MAINPAGE.HERO.title", "Olá, eu sou Rui Pereira")}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          {t(
            "MAINPAGE.HERO.description",
            "Developer Front-End focado em criar experiências web modernas e responsivas com React, Next.js e Tailwind CSS."
          )}
        </p>
        <div className="flex justify-center gap-4">
          <Link href="#projetos" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
            {t("MAINPAGE.HERO.viewProjects", "Ver Projetos")} <FiArrowRight />
          </Link>
          <Link href="#contacto" className="bg-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors">
            {t("MAINPAGE.HERO.contact", "Contactar")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;