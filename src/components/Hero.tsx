import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lazy, Suspense } from "react";

// Lazy load Dice3D to prevent issues on unsupported devices
const Dice3D = lazy(() => import("@/components/Dice3D"));

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-background">
      <div className="container relative z-10 px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Centered 0xDECA branding with dice on larger screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-12 flex items-center justify-center gap-4 md:gap-8"
          >
            <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight font-mono">
              <span className="text-muted-foreground/50">0</span>
              <span className="text-accent">xDECA</span>
            </span>
            
            {/* 3D Dice */}
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-accent/20 animate-pulse" />
                </div>
              }>
                <Dice3D 
                  onRollComplete={(value) => console.log(`Rolled: 0x${value.toString(16).toUpperCase()}`)} 
                  className="w-full h-full"
                />
              </Suspense>
            </div>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We help organisations create fully functional prototypes in{" "}
            <span className="text-accent font-semibold">days, not months</span>.
            Know if your project will succeed before you commit.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-foreground hover:bg-muted hover:text-foreground"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
