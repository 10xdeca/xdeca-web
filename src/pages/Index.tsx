import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Community Projects */}
        <section className="py-32 relative">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Community <span className="text-accent">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We provide free tech assistance and training to volunteer-run community groups. 
                This option is suitable for projects that serve a social good and can be developed in the open. 
                Please reach out to us to discuss if your project might be a good fit for this.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commercial Projects */}
        <section className="py-32 relative">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Commercial <span className="text-primary">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stop paying hundreds of thousands for consultants that underdeliver. With the help of AI tools, 
                we can deliver fully functional prototypes in days for under $10k. Or if you prefer, we can 
                deliver personalised training sessions to empower your team with the skills and knowledge to do the same.
              </p>
            </motion.div>
          </div>
        </section>

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
