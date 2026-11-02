import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Menu } from "@/components/menu";
import { Specialties } from "@/components/specialties";

import { Combos } from "@/components/combos";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Specialties />
        <Menu />
        <Combos />
        <About />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

