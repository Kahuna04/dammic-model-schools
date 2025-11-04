import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <div className="space-y-12">
      <Hero />

      <ScrollReveal animation="fade-up">
        <Section
          title="Why Dammic?"
          intro="A caring, disciplined environment that nurtures character and excellence — from early years to secondary."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              { icon: "🍼", title: "Caring Creche", text: "Safe, stimulating care for early development.", gradient: "from-pink-400 to-rose-500" },
              { icon: "📚", title: "Strong Foundation", text: "Literacy and numeracy built steadily in Nursery & Primary.", gradient: "from-blue-400 to-cyan-500" },
              { icon: "🎓", title: "Results-Driven Secondary", text: "Competent, confident graduates prepared for the future.", gradient: "from-green-400 to-emerald-600" },
            ].map((c, i) => (
              <ScrollReveal key={c.title} animation="zoom-in" delay={i * 100}>
                <div className={`card-hover rounded-2xl bg-gradient-to-br ${c.gradient} p-5 sm:p-6 text-white shadow-lg`}>
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{c.icon}</div>
                  <h3 className="font-bold text-lg sm:text-xl">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/90">{c.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <Section title="Our Campuses">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          <div className="card-hover rounded-2xl border-2 border-brand-green/20 bg-white overflow-hidden shadow-lg">
            <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-brand-cream to-white">
              <div className="text-2xl sm:text-3xl mb-2">🏫</div>
              <h3 className="font-bold text-lg sm:text-xl text-brand-dark">Main Campus</h3>
              <p className="text-xs sm:text-sm text-gray-700 mt-2">📍 9, Mojisola Badru, Orile-Iloye, Sango Otta, Ogun State.</p>
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                <Link href="/academics" className="btn-outline text-xs px-3 py-2">Academics</Link>
                <Link href="/contact" className="btn-primary text-xs px-3 py-2">📍 Find Us</Link>
              </div>
            </div>
            <iframe
              title="Main Campus Map"
              className="w-full h-48 sm:h-56 md:h-64 border-t-2 border-brand-green/10"
              loading="lazy"
              src="https://www.google.com/maps?q=9%20Mojisola%20Badru%2C%20Orile-Iloye%2C%20Sango%20Otta%2C%20Ogun%20State%2C%20Nigeria&output=embed"
            />
          </div>
          <div className="card-hover rounded-2xl border-2 border-brand-light/20 bg-white overflow-hidden shadow-lg">
            <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-brand-cream to-white">
              <div className="text-2xl sm:text-3xl mb-2">🏛️</div>
              <h3 className="font-bold text-lg sm:text-xl text-brand-dark">Secondary Campus</h3>
              <p className="text-xs sm:text-sm text-gray-700 mt-2">📍 7, Ogundele Close, Orile-Iloye, Sango Otta, Ogun State.</p>
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                <Link href="/academics" className="btn-outline text-xs px-3 py-2">Academics</Link>
                <Link href="/contact" className="btn-primary text-xs px-3 py-2">📍 Find Us</Link>
              </div>
            </div>
            <iframe
              title="Secondary Campus Map"
              className="w-full h-48 sm:h-56 md:h-64 border-t-2 border-brand-light/10"
              loading="lazy"
              src="https://www.google.com/maps?q=7%20Ogundele%20Close%2C%20Orile-Iloye%2C%20Sango%20Otta%2C%20Ogun%20State%2C%20Nigeria&output=embed"
            />
          </div>
          </div>
        </Section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <Section title="Latest News" intro="Updates from our community (sample content)">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {[1, 2, 3].map((i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
              <article className="card-hover rounded-2xl border border-brand-green/10 bg-white overflow-hidden shadow-lg group">
              <div className="relative overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/dammic-${i}/600/400`}
                  alt="School"
                  width={600}
                  height={400}
                  className="rounded-t-2xl w-full h-40 sm:h-44 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 py-1 sm:px-3 bg-brand-green text-white text-xs font-bold rounded-full shadow">🎉 New</div>
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="font-bold text-base sm:text-lg text-brand-dark">Sample news headline {i}</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">Short summary of the news item. Replace with real content later.</p>
                <Link href="/news" className="mt-3 sm:mt-4 inline-flex items-center text-sm text-brand-green font-semibold hover:text-brand-dark transition">Read more →</Link>
              </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
        </Section>
      </ScrollReveal>
    </div>
  );
}
