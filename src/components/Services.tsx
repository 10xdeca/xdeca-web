import { motion } from "framer-motion";
import { Heart, Briefcase } from "lucide-react";

const Services = () => {
  return (
    <section className="py-32 relative">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Community Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="h-full p-8 md:p-10 bg-muted border border-border hover:border-accent transition-all duration-300">
              <div className="w-14 h-14 bg-accent flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Community <span className="text-accent">Projects</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We provide free tech assistance and training to volunteer-run community groups. 
                This option is suitable for projects that can be developed in the open. 
                Please reach out to us to discuss if your project might be a good fit for this.
              </p>
            </div>
          </motion.div>

          {/* Commercial Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="group"
          >
            <div className="h-full p-8 md:p-10 bg-muted border border-border hover:border-primary transition-all duration-300">
              <div className="w-14 h-14 bg-primary flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Commercial <span className="text-primary">Projects</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Stop paying hundreds of thousands for consultants that underdeliver.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We can deliver personalised training sessions to upskill your team with the skills 
                and knowledge in the latest AI tools to prove concepts themselves{" "}
                <em className="text-foreground">before</em> committing to large projects. 
                Or if you prefer, we can prototype it for you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
