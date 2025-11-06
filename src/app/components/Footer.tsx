"use client";
import { useTranslation } from "./LanguageProvider";

const Footer = () => {
  const anoAtual = new Date().getFullYear();
  const { t } = useTranslation();

  const copyright = t("MAINPAGE.FOOTER.copyright", `© ${anoAtual} Rui Pereira. Todos os direitos reservados.`);
  const builtWith = t("MAINPAGE.FOOTER.builtWith", "Construído com Next.js, TypeScript e Tailwind CSS.");

  return (
    <footer className="py-8 bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto max-w-6xl px-4 text-center text-gray-400">
        <p>{copyright.replace("{year}", String(anoAtual))}</p>
        <p className="text-sm mt-2">{builtWith}</p>
      </div>
    </footer>
  );
};

export default Footer;