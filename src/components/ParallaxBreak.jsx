/**
 * Full-bleed parallax image break between content sections.
 * Creates the Elena Blair-style "image stays while content scrolls" effect.
 *
 * The image moves slower than scroll (via data-parallax), while adjacent
 * content sections scroll at normal speed — producing depth separation.
 */
export default function ParallaxBreak({
  image,
  height = 'h-[70vh] md:h-[90vh]',
  speed = -0.1,
  topBlend,
  bottomBlend,
  objectPosition = 'center',
  natural = false,
  children,
}) {
  return (
    <div
      className={`relative overflow-hidden ${natural ? '' : height}`}
      role={children ? undefined : 'presentation'}
      aria-hidden={children ? undefined : 'true'}
    >
      {/* Parallax image */}
      <img
        src={image}
        alt=""
        width={1920}
        height={1280}
        className={
          natural
            ? 'w-full h-auto block'
            : 'absolute inset-0 w-full h-full object-cover'
        }
        style={natural ? {} : { objectPosition }}
        data-parallax={speed}
        loading="lazy"
      />

      {/* Mood overlay */}
      <div className="absolute inset-0 bg-deep-black/35" />

      {/* Top gradient blend into section above */}
      {topBlend && (
        <div
          className="absolute top-0 inset-x-0 h-16 md:h-24 z-[1]"
          style={{
            background: `linear-gradient(to bottom, var(--color-${topBlend}), transparent)`,
          }}
        />
      )}

      {/* Bottom gradient blend into section below */}
      {bottomBlend && (
        <div
          className="absolute bottom-0 inset-x-0 h-16 md:h-24 z-[1]"
          style={{
            background: `linear-gradient(to top, var(--color-${bottomBlend}), transparent)`,
          }}
        />
      )}

      {/* Optional content overlay (quotes, section titles) */}
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          {children}
        </div>
      )}
    </div>
  )
}
