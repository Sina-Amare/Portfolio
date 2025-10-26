export const GridPattern = ({ width = 40, height = 40, x = -1, y = -1, ...props }) => {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full stroke-white/5 [mask-image:radial-gradient(350px_at_center,white,transparent)]"
      {...props}
    >
      <defs>
        <pattern
          id="grid-pattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern)" />
    </svg>
  );
};
