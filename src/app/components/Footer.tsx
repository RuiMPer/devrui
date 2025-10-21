const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto max-w-6xl px-4 text-center text-gray-400">
        <p>&copy; {anoAtual} Rui Pereira. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">
          Construído com Next.js, TypeScript e Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
