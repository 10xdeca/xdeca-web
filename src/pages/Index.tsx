import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Briefcase } from "lucide-react";

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
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-accent flex items-center justify-center">
                  <Heart className="w-7 h-7 text-accent-foreground" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Community <span className="text-accent">Projects</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
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
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Commercial <span className="text-primary">Projects</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
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
