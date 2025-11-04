import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Dammic Model Schools",
  description: "Founded in 2005, Dammic Model Schools provides quality education from Creche to Secondary in Orile-Iloye, Sango Otta, Ogun State. Solid and steady steps to greatness.",
  openGraph: {
    title: "About Dammic Model Schools",
    description: "Quality education from Creche to Secondary since 2005. Led by Pst. Mrs T. M. Ogundele.",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="space-y-6">
      <Section title="About Dammic Model Schools" intro="Founded on 17 October 2005, Dammic Model Schools is committed to balanced, holistic education where character and academics thrive.">
        <p className="text-gray-800 leading-relaxed">
          We provide a continuum of learning from Creche to Secondary, guided by our motto: <span className="font-semibold">“Solid and steady steps to greatness.”</span> Our caring teachers,
          disciplined environment, and steady growth mindset help every learner flourish.
        </p>
      </Section>

      <Section title="Vision & Mission">
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Vision: to raise confident, morally upright achievers prepared for a changing world.</li>
          <li>Mission: to deliver excellent instruction, firm discipline, and consistent support for every child.</li>
        </ul>
      </Section>

      <Section title="Leadership">
        <p className="text-gray-800">Proprietress: Pst. Mrs T. M. Ogundele</p>
      </Section>
    </div>
  );
}
