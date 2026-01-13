import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <section id="work">
          <Projects />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="community">
          <Community />
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
