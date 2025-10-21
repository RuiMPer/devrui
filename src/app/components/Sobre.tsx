
const Sobre = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Mim</h2>
        <div className="items-center">
          <div className="text-lg text-gray-300 space-y-4">
            <p>
              Sou um developer front-end apaixonado por tecnologia e design. Com
              4 anos de experiência, especializo-me em transformar ideias em
              interfaces de utilizador intuitivas e de alta performance.
            </p>
            <p>
              O meu foco principal é o ecossistema React, utilizando Next.js
              para server-side rendering e TypeScript para garantir um código
              robusto e escalável.
            </p>
            <p>
              Estou sempre a aprender, a explorar novas ferramentas e a procurar
              desafios que me permitam crescer profissionalmente.
            </p>
            <div className="text-center">
              <a
                href="/Rui CV.pdf"
                download
                className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
