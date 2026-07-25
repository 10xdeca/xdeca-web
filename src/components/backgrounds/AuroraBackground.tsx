const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full bg-accent/20 blur-3xl motion-safe:animate-[aurora-a_18s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 -right-1/4 w-[50vw] h-[50vw] rounded-full bg-[hsl(var(--block-cyan))]/15 blur-3xl motion-safe:animate-[aurora-b_22s_ease-in-out_infinite]" />
      <div className="absolute -bottom-1/4 left-1/3 w-[45vw] h-[45vw] rounded-full bg-[hsl(var(--block-navy))]/10 blur-3xl motion-safe:animate-[aurora-c_26s_ease-in-out_infinite]" />
    </div>
  );
};

export default AuroraBackground;
