import { motion } from "framer-motion";
import { Clock, DollarSign, Code2, Users } from "lucide-react";

const values = [
  {
    icon: Clock,
    title: "Days, Not Months",
    description: "Get a fully functional prototype that can be put in the hands of users within a week."
  },
  {
    icon: DollarSign,
    title: "Under $10K",
    description: "Fraction of what consulting agencies charge. No hidden fees, no scope creep."
  },
  {
    icon: Code2,
    title: "AI + Engineering",
    description: "We're not just vibe coders. We combine AI tools with deep software engineering expertise."
  },
  {
    icon: Users,
    title: "Founders Who Ship",
    description: "Our team has shipped their own products end-to-end. We understand what it takes."
  }
];

const ValueProps = () => {
  return (
    <section className="py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-accent">xdeca</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe in showing, not just talking. Here's what makes us different.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="h-full p-8 bg-muted border border-border hover:border-foreground transition-all duration-300">
                <div className="w-14 h-14 bg-primary flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
