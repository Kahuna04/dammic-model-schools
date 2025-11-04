import Section from "@/components/Section";

export default function Page() {
  return (
    <div className="space-y-6">
      <Section title="Calendar" intro="Term dates, events and examinations. Replace with your official schedule.">
        <div className="rounded-xl border border-brand-green/10 bg-white p-6">
          <ul className="list-disc pl-6 space-y-1 text-gray-800">
            <li>First Term: Sept — Dec</li>
            <li>Second Term: Jan — March</li>
            <li>Third Term: April — July</li>
          </ul>
          <p className="mt-3 text-sm text-gray-600">Sports day, cultural day, open day and examinations will be listed here.</p>
        </div>
      </Section>
    </div>
  );
}
