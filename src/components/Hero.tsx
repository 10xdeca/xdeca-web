import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import ParticleNetworkBackground from "@/components/backgrounds/ParticleNetworkBackground";

// Lazy load Dice3D to prevent issues on unsupported devices
const Dice3D = lazy(() => import("@/components/Dice3D"));

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      <ParticleNetworkBackground />

      <div className="container relative z-10 px-6">
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

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center gap-3"
          >
            <a
              href="https://localai.xdeca.com"
              className="text-lg md:text-xl text-accent hover:underline underline-offset-4 transition-colors"
            >
              localai.xdeca.com
            </a>
            <span className="text-sm md:text-base text-muted-foreground">
              contact[at]xdeca.com
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
