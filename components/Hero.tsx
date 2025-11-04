import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-brand-green via-brand-light to-brand-dark shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 animate-fade-in">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      <div className="relative max-w-3xl">
        <div className="inline-block mb-3 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur rounded-full">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">🏫 Dammic Model Schools</p>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
          Solid and steady steps to <span className="text-brand-cream">greatness</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light">
          Creche · Nursery · Primary · Secondary<br/>
          <span className="text-brand-cream font-semibold">Nurturing excellence since 2005</span>
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <Link href="/admissions" className="btn-primary bg-white text-brand-green hover:bg-brand-cream text-center">📝 Start Admissions</Link>
          <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-brand-green text-center">Learn More →</Link>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-16 -bottom-16 h-48 w-48 sm:h-72 sm:w-72 md:h-96 md:w-96 rounded-full bg-brand-cream/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 sm:h-64 sm:w-64 md:h-80 md:w-80 rounded-full bg-white/10 blur-2xl" />
    </section>
  );
}
