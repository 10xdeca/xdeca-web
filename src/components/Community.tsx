import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    name: "Canberra Emerging Tech Hub",
    description: "Website designed and managed by Sophie",
    type: "Community Platform"
  },
  {
    name: "Linux and AI Tuesday Night Meetup",
    description: "Facilitated by Alexar",
    type: "Weekly Meetup"
  },
  {
    name: "MLAI x StartSpace AI Builder Day",
    description: "Facilitated by Angie",
    type: "Workshop"
  }
];

const Community = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Community <span className="text-accent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We help host and facilitate tech events across Australia, 
            building the local AI and developer community.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 hover:bg-muted transition-colors border-b border-border last:border-b-0">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {event.type}
                  </span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {event.name}
                  </h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Canberra, AU</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
