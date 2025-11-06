import Competencias from "./components/Competencias";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Sobre />
      <Competencias />
      <Projetos />
      <Contacto />
      <Footer />
    </main>
  );
}
