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

          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="w-full max-w-md flex items-center gap-3 bg-accent text-accent-foreground px-4 py-3 rounded-md">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <input
                aria-label="Email address"
                value="hello@tengpt.com.au"
                readOnly
                onFocus={(e) => e.currentTarget.select()}
                onClick={(e) => e.currentTarget.select()}
                className="flex-1 min-w-0 bg-transparent outline-none text-lg font-medium select-all cursor-text"
              />
              <a
                href="mailto:hello@tengpt.com.au"
                className="shrink-0 rounded-md px-3 py-2 text-sm font-medium bg-accent-foreground/10 hover:bg-accent-foreground/20 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-accent"
              >
                Open
              </a>
            </div>
            <p className="text-sm text-primary-foreground/60">Tap/click the email to select it, or press Open to email us.</p>
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
