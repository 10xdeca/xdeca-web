import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import alexarImg from "@/assets/alexar.png";
import angieImg from "@/assets/angie.png";
import nickImg from "@/assets/nick.png";

const team = [
  {
    name: "Alexar Pendashteh",
    email: "alexar@tengpt.com.au",
    role: "Innovation Consultant",
    image: alexarImg
  },
  {
    name: "Sophie Allen",
    email: "sophie@tengpt.com.au",
    role: "Developer & Designer",
    image: null
  },
  {
    name: "Dr Angie Simmons",
    email: "angie@tengpt.com.au",
    role: "AI Researcher",
    image: angieImg
  },
  {
    name: "Nick Meinhold",
    email: "nick@tengpt.com.au",
    role: "Full-Stack Developer",
    image: nickImg
  }
];

const Team = () => {
  return (
    <section className="py-32 relative bg-muted">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the <span className="text-accent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A close-knit team of innovators, designers, developers and researchers based in Melbourne, Australia 🇦🇺, 
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
              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-primary flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
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