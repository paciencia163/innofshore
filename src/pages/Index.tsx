import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Marquee } from "@/components/Marquee";
import { Fleet } from "@/components/Fleet";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Fleet />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
