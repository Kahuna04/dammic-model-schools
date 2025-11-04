export default function Section({ title, children, intro }: { title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 sm:mt-10 md:mt-12">
      <div className="mb-4 sm:mb-5 md:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-brand-dark">{title}</h2>
        {intro && <p className="mt-2 text-sm sm:text-base text-gray-700 max-w-2xl">{intro}</p>}
      </div>
      <div className="grid gap-4 sm:gap-5 md:gap-6">{children}</div>
    </section>
  );
}
