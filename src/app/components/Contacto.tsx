"use client";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTranslation } from "./LanguageProvider";

const Contacto = () => {
  const { t } = useTranslation();

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{t("MAINPAGE.CONTACT.title", "Vamos Conversar!")}</h2>
        <p className="text-lg text-gray-300 mb-8">{t("MAINPAGE.CONTACT.description", "Estou aberto a novas oportunidades e colaborações. Sente‑te à vontade para entrar em contacto.")}</p>

        <a href="mailto:rui.miguel.pereira.rp@gmail.com" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors text-lg mb-12">
          {t("MAINPAGE.CONTACT.emailButton", "Enviar Email")}
        </a>

        <div className="flex justify-center gap-8 text-4xl text-gray-400">
          <a href="https://github.com/RuiMPer" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label={t("MAINPAGE.CONTACT.ariaGithub", "GitHub")}>
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/rui-mpereira" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label={t("MAINPAGE.CONTACT.ariaLinkedin", "LinkedIn")}>
            <FiLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;