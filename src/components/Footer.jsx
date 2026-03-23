export default function Footer() {
  return (
    <footer className="py-10 bg-soft-black text-center">
      <p className="font-serif text-lg text-off-white/80 font-light">
        הילה | צלמת
      </p>
      <p className="text-xs text-taupe mt-2">
        כל הזכויות שמורות &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
