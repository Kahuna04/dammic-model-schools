import Section from "@/components/Section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics | Dammic Model Schools",
  description: "Explore our academic programs: Creche, Nursery, Primary, and Secondary education with strong curriculum and character development.",
};

const stages = [
  { name: "Creche", desc: "Safe, nurturing environment for early care and development." },
  { name: "Nursery", desc: "Play-based literacy, numeracy and social skills." },
  { name: "Primary", desc: "Foundational mastery in core subjects with character formation." },
  { name: "Secondary", desc: "Broad curriculum, exam readiness and leadership opportunities." },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <Section title="Academics" intro="From Creche through Secondary, each stage is carefully structured with age-appropriate learning and strong values.">
        <div className="grid md:grid-cols-2 gap-6">
          {stages.map((s) => (
            <div key={s.name} className="rounded-xl border border-brand-green/10 bg-white p-6">
              <h3 className="font-semibold text-brand-dark">{s.name}</h3>
              <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
              <p className="mt-3 text-xs text-gray-600">Curriculum details, subject list and co-curriculars will be added here.</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/admissions" className="btn-primary">Admissions Process</Link>
        </div>
      </Section>
    </div>
  );
}
