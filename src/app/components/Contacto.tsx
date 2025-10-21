import { FiGithub, FiLinkedin } from "react-icons/fi";

const Contacto = () => {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Vamos Conversar!</h2>
        <p className="text-lg text-gray-300 mb-8">
          Estou aberto a novas oportunidades e colaborações. Sente-te à vontade
          para entrar em contacto.
        </p>

        {/* Link de Email */}
        <a
          href="mailto:rui.miguel.pereira.rp@gmail.com"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors text-lg mb-12"
        >
          Enviar Email
        </a>

        {/* Links Sociais */}
        <div className="flex justify-center gap-8 text-4xl text-gray-400">
          <a
            href="https://github.com/RuiMPer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com/in/rui-mpereira"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
