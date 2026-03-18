import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Webinars from "@/components/Webinars";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817]">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Webinars />
      <Contact />
      <Footer />
    </main>
  );
}