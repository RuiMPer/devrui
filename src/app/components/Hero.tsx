import Link from "next/link";
import { FiArrowRight } from "react-icons/fi"; // Ícone

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Olá, eu sou <span className="text-blue-400">Rui Pereira</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Developer Front-End focado em criar experiências web modernas e
          responsivas com React, Next.js e Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="#projetos"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            Ver Projetos <FiArrowRight />
          </Link>
          <Link
            href="#contacto"
            className="bg-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors"
          >
            Contactar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
