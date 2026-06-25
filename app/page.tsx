import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MorphGallery from "@/components/MorphGallery";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <MorphGallery />
      <Quote />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
