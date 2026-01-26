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
        
        {/* What we do */}
        <section className="py-32 relative">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight font-mono mb-12">
                what<span className="text-muted-foreground/50">_</span>we<span className="text-muted-foreground/50">_</span><span className="text-accent">do</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Training and Workshops */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="p-8 bg-muted border border-border"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Training and <span className="text-accent">Workshops</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We deliver personalised training sessions to empower people with the skills 
                  and knowledge to take advantage of the latest AI tools and techniques without getting locked-in.
                </p>
              </motion.div>

              {/* Commercial Prototypes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="p-8 bg-muted border border-border"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Commercial <span className="text-accent">Prototypes</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We help organisations test ideas without breaking their budget. We blend AI tools with 
                  good old software engineering fundamentals to deliver fully functional prototypes that 
                  push the boundaries of what's possible.
                </p>
              </motion.div>

              {/* Community Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="p-8 bg-muted border border-border"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Community <span className="text-accent">Support</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We provide free tech assistance and training to volunteer-run community groups. 
                  This option is suitable for projects that serve a social good and can be developed in the open.
                </p>
              </motion.div>
            </div>
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
