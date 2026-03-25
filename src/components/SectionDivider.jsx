/**
 * Organic wave divider between sections.
 * bg = previous section's color (above the wave)
 * fill = next section's color (below the wave)
 * The wave IS the color transition — no straight lines.
 */
export default function SectionDivider({ fill, bg, accent, mirror = false, className = '' }) {
  const style = { backgroundColor: bg }
  if (mirror) style.transform = 'scaleX(-1)'

  return (
    <div
      className={`w-full leading-[0] pointer-events-none -mb-px ${className}`}
      aria-hidden="true"
      style={style}
    >
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full block h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px]">
        <path
          d="M0,60 C360,120 1080,0 1440,60 L1440,121 L0,121 Z"
          fill={fill}
        />
        {accent && (
          <path
            d="M0,60 C360,120 1080,0 1440,60"
            fill="none"
            stroke={accent}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>
    </div>
  )
}
