import Image from "next/image";
import { FiExternalLink, FiGithub  } from "react-icons/fi";

// Define o tipo para os adereços (props) do Cartão de Projeto
interface ProjectCardProps {
  titulo: string;
  descricao: string;
  imagemUrl: string; // ex: /projetos/projeto1.png
  githubUrl: string;
  demoUrl: string;
  tags: string[];
}

// Componente reutilizável para o cartão de projeto
const ProjectCard: React.FC<ProjectCardProps> = ({
  titulo,
  descricao,
  imagemUrl,
  githubUrl,
  demoUrl,
  tags,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transition-transform hover:translate-y-[-5px]">
      <Image
        src={imagemUrl}
        alt={`Screenshot do projeto ${titulo}`}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{titulo}</h3>
        <p className="text-gray-400 mb-4">{descricao}</p>

        {/* Tags de tecnologia */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-700 text-blue-300 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FiExternalLink /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

// Componente principal da secção de Projetos
const Projetos = () => {
  const meusProjetos: ProjectCardProps[] = [
    {
      titulo: "Projeto E-commerce",
      descricao:
        "Uma plataforma de e-commerce completa construída com Next.js, Stripe e Tailwind.",
      imagemUrl: "/projetos/projeto1.png", // Coloca as imagens em `public/projetos/`
      githubUrl: "https://github.com/teu-user/projeto1",
      demoUrl: "https://demo.projeto1.com",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    },
    {
      titulo: "Dashboard de Análise",
      descricao:
        "Um dashboard interativo para visualização de dados, usando React e Recharts.",
      imagemUrl: "/projetos/projeto2.png",
      githubUrl: "https://github.com/teu-user/projeto2",
      demoUrl: "https://demo.projeto2.com",
      tags: ["React", "TypeScript", "Recharts"],
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos</h2>
        <p className="text-center">Brevemente...</p>
        {/* Projetos
        <div className="grid md:grid-cols-2 gap-8">
          
          {meusProjetos.map((projeto) => (
            <ProjectCard key={projeto.titulo} {...projeto} />
          ))}
          
        </div>
        */}
      </div>
    </section>
  );
};

export default Projetos;
