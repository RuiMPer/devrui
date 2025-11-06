"use client";
import { FaFigma, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useTranslation } from "./LanguageProvider";

const iconList = [
  { key: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
  { key: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { key: "React", icon: <FaReact className="text-blue-400" /> },
  { key: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { key: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { key: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { key: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { key: "Figma", icon: <FaFigma className="text-pink-500" /> },
];

const Competencias = () => {
  const { t } = useTranslation();

  return (
    <section id="competencias" className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("MAINPAGE.SKILLS.title", "Competências")}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {iconList.map((item) => 
          {            
            return (
              <div key={item.key} className="bg-gray-800 rounded-full px-5 py-3 flex items-center gap-3 transition-transform hover:scale-105">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.key}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Competencias;