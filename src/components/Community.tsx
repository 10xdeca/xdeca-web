import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const events = [
  {
    name: "Canberra Emerging Tech Hub",
    description: "Website designed and managed by Sophie Allen",
    type: "Workshop",
    location: "Canberra, AU",
    url: "https://skillstudio.com.au/"
  },
  {
    name: "Linux & AI Tuesday Conversations",
    description: "Facilitated by Alexar Pendashteh",
    type: "Weekly Meetup",
    location: "Online",
    url: "https://linuxvictoria.org/posts/lait-night-chat-linux-and-ai/"
  },
  {
    name: "MLAI x StartSpace AI Builder Day",
    description: "Facilitated by Dr Angie Simmons",
    type: "Monthly Meetup",
    location: "Melbourne, AU",
    url: "https://events.humanitix.com/mlai-x-startspace-monthly"
  },
  {
    name: "Imagineeering - AI | Claude Code",
    description: "Facilitated by Dr Nicholas Meinhold",
    type: "Monthly Meetup",
    location: "Melbourne, AU",
    url: "https://www.meetup.com/imagineeering-ai-claude-code/"
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
          <h2 className="text-4xl md:text-5xl font-black tracking-tight font-mono mb-6">
            community<span className="text-muted-foreground/50">_</span><span className="text-accent">events</span>
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
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_140px] items-center gap-4 p-6 hover:bg-muted transition-colors border-b border-border last:border-b-0">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {event.type}
                  </span>
                </div>
                
                <div>
                  <a 
                    href={event.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-bold mb-1 group-hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    {event.name}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
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
