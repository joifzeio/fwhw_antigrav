import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Welcome } from "@/components/Welcome";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
