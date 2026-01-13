import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const team = [
  {
    name: "Alexar Pendashteh",
    email: "alexar@tengpt.com.au",
    role: "Founder & Engineer"
  },
  {
    name: "Sophie Allen",
    email: "sophie@tengpt.com.au",
    role: "Founder & Designer"
  },
  {
    name: "Dr Angie Simmons",
    email: "angie@tengpt.com.au",
    role: "Founder & AI Specialist"
  },
  {
    name: "Nick Meinhold",
    email: "nick@tengpt.com.au",
    role: "Founder & Engineer"
  }
];

const Team = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A close-knit team of founders and developers based in Australia, 
            pushing the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group text-center"
            >
              {/* Avatar placeholder with gradient */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 animate-pulse-glow" />
                <div className="absolute inset-1 rounded-full bg-card flex items-center justify-center">
                  <span className="text-3xl font-bold text-gradient">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
              
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {member.email}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
