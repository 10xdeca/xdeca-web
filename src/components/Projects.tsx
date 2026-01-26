import { motion } from "framer-motion";
import { Bot, Wallet, Users } from "lucide-react";

const projects = [
  {
    icon: Bot,
    name: "Hashtag",
    tagline: "AI backend for marketplaces",
    description: "Intelligent infrastructure that powers next-generation marketplace platforms with AI-driven matching and automation."
  },
  {
    icon: Wallet,
    name: "Bahi",
    tagline: "AI tools for finance",
    description: "Smart financial tools designed for small businesses and personal finance management, powered by machine learning."
  },
  {
    icon: Users,
    name: "CrowdLeague",
    tagline: "Flutter app for basketball",
    description: "A mobile platform connecting basketball enthusiasts with pickup games and umpires in their area."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight font-mono mb-6">
            what<span className="text-muted-foreground/50">_</span>we've<span className="text-muted-foreground/50">_</span><span className="text-accent">built</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects. Real impact. See what we can deliver.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="h-full p-8 bg-background border border-border hover:border-foreground transition-all duration-300">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-accent flex items-center justify-center mb-6">
                    <project.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-accent font-medium text-sm mb-4">{project.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
