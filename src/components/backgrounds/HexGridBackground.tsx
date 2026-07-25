const HexGridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute -inset-x-1/4 -inset-y-1/4 w-[150%] h-[150%] text-accent opacity-[0.16] motion-safe:animate-[hex-drift_50s_ease-in-out_infinite_alternate]"
      >
        <defs>
          <pattern id="hexagons" width="56" height="100" patternTransform="scale(0.35)" patternUnits="userSpaceOnUse">
            <polygon
              points="28 66,0 50,0 16,28 0,56 16,56 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <polygon
              points="28 100,0 84,0 50,28 34,56 50,56 84"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
};

export default HexGridBackground;
