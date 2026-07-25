import { useEffect, useRef } from "react";
import AuroraBackground from "@/components/backgrounds/AuroraBackground";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  anchorX: number;
  anchorY: number;
  rotation: number;
  rotationSpeed: number;
  phase: number;
}

const HEX_SPACING = 110;
const PARTICLE_COUNT = 140;
const LINK_DIST = 90;
const HEX_RADIUS = 3.2;

const buildAnchors = (width: number, height: number) => {
  const anchors: { x: number; y: number }[] = [];
  const vertSpacing = HEX_SPACING * 0.866;
  let row = 0;
  for (let y = -vertSpacing; y < height + vertSpacing; y += vertSpacing) {
    const rowOffset = (row % 2) * (HEX_SPACING / 2);
    for (let x = -HEX_SPACING; x < width + HEX_SPACING; x += HEX_SPACING) {
      anchors.push({ x: x + rowOffset, y });
    }
    row++;
  }
  return anchors;
};

const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number, rotation: number) => {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = rotation + (Math.PI / 3) * i;
    const px = x + r * Math.cos(angle);
    const py = y + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
};

// Fluid particle network that loosely orbits a hex lattice, so clusters
// of hexagons emerge from the motion without ever locking into a rigid grid.
const AuroraHexParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();

    let width = 0;
    let height = 0;
    let animationId = 0;
    let particles: Particle[] = [];

    const seed = (w: number, h: number) => {
      const anchors = buildAnchors(w, h);
      particles = Array.from({ length: PARTICLE_COUNT }, () => {
        const anchor = anchors[Math.floor(Math.random() * anchors.length)] ?? { x: w / 2, y: h / 2 };
        return {
          x: anchor.x + (Math.random() - 0.5) * 20,
          y: anchor.y + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          anchorX: anchor.x,
          anchorY: anchor.y,
          rotation: Math.random() * Math.PI,
          rotationSpeed: (Math.random() - 0.5) * 0.006,
          phase: Math.random() * Math.PI * 2,
        };
      });
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      seed(width, height);
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        const dx = p.anchorX - p.x;
        const dy = p.anchorY - p.y;
        // weak spring toward the hex anchor + gentle noise wobble, so motion stays fluid
        p.vx += dx * 0.0009 + Math.sin(t * 0.6 + p.phase) * 0.006;
        p.vy += dy * 0.0009 + Math.cos(t * 0.5 + p.phase) * 0.006;
        p.vx *= 0.965;
        p.vy *= 0.965;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `hsl(${accent} / ${0.12 * (1 - dist / LINK_DIST)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        drawHexagon(ctx, p.x, p.y, HEX_RADIUS, p.rotation);
        ctx.strokeStyle = `hsl(${accent} / 0.55)`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fillStyle = `hsl(${accent} / 0.12)`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AuroraBackground />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default AuroraHexParticlesBackground;
