import { FaFigma, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Define um tipo para cada competência
type Competencia = {
  nome: string;
  icon: React.ReactNode;
};

// Lista das tuas competências
const competencias: Competencia[] = [
  {
    nome: "JavaScript (ES6+)",
    icon: <SiJavascript className="text-yellow-400" />,
  },
  { nome: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { nome: "React", icon: <FaReact className="text-blue-400" /> },
  { nome: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { nome: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { nome: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { nome: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { nome: "Figma", icon: <FaFigma className="text-pink-500" /> },
];

const Competencias = () => {
  return (
    <section id="competencias" className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Competências</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {competencias.map((comp) => (
            <div
              key={comp.nome}
              className="bg-gray-800 rounded-full px-5 py-3 flex items-center gap-3 transition-transform hover:scale-105"
            >
              <span className="text-2xl">{comp.icon}</span>
              <span className="font-medium">{comp.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competencias;
