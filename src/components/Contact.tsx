import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative bg-primary text-primary-foreground">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to build{" "}
            <span className="text-accent">something real</span>?
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
            Let's talk about your idea. Get a functional prototype in your hands 
            within a week—not promises, not slide decks.
          </p>

          <div className="flex flex-col gap-4 justify-center items-center">
            <a 
              href="mailto:hello@tengpt.com.au"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-4 rounded-md transition-colors select-text"
              draggable="false"
            >
              <Mail className="w-5 h-5 flex-shrink-0 pointer-events-none" />
              <span className="select-text">hello@tengpt.com.au</span>
            </a>
          </div>

          <p className="text-sm text-primary-foreground/60 mt-8">
            Based in Melbourne and Canberra, Australia 🇦🇺
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
