import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Dammic Model Schools",
  description: "Get in touch with Dammic Model Schools. Visit us in Orile-Iloye, Sango Otta or call 08134897661. Email: dammicsch@gmail.com",
};

export default function Page() {
  const phone1 = "08134897661";
  const phone2 = "08034730895";
  const email = "dammicsch@gmail.com";

  return (
    <div className="space-y-6">
      <Section title="Contact Us" intro="We’d love to hear from you. Reach out via phone, email or visit any campus.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-brand-green/10 bg-white p-6 space-y-3">
            <h3 className="font-semibold text-brand-dark">Get in touch</h3>
            <p className="text-sm">📞 <a className="underline" href={`tel:${phone1}`}>{phone1}</a>, <a className="underline" href={`tel:${phone2}`}>{phone2}</a></p>
            <p className="text-sm">✉️ <a className="underline" href={`mailto:${email}`}>{email}</a></p>
            <div className="pt-2">
              <a className="btn-primary" href={`https://wa.me/${phone1.replace(/\D/g, "")}`} target="_blank">WhatsApp</a>
            </div>
            <form action={`mailto:${email}`} method="post" encType="text/plain" className="mt-4 grid gap-3">
              <input name="name" required placeholder="Your name" className="border rounded px-3 py-2" />
              <input name="contact" required placeholder="Email or phone" className="border rounded px-3 py-2" />
              <textarea name="message" required placeholder="Your message" className="border rounded px-3 py-2 min-h-[120px]" />
              <button type="submit" className="btn-outline">Send Message</button>
              <p className="text-xs text-gray-600">This simple form opens your email app. We can switch to a hosted form later.</p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden border border-brand-green/10 bg-white">
              <div className="p-4">
                <h4 className="font-medium">Main Campus</h4>
                <p className="text-sm text-gray-700">9, Mojisola Badru, Orile-Iloye, Sango Otta, Ogun State, Nigeria</p>
              </div>
              <iframe
                title="Main Campus Map"
                className="w-full h-64 border-t"
                loading="lazy"
                src="https://www.google.com/maps?q=9%20Mojisola%20Badru%2C%20Orile-Iloye%2C%20Sango%20Otta%2C%20Ogun%20State%2C%20Nigeria&output=embed"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-brand-green/10 bg-white">
              <div className="p-4">
                <h4 className="font-medium">Secondary Campus</h4>
                <p className="text-sm text-gray-700">7, Ogundele Close, Orile-Iloye, Sango Otta, Ogun State, Nigeria</p>
              </div>
              <iframe
                title="Secondary Campus Map"
                className="w-full h-64 border-t"
                loading="lazy"
                src="https://www.google.com/maps?q=7%20Ogundele%20Close%2C%20Orile-Iloye%2C%20Sango%20Otta%2C%20Ogun%20State%2C%20Nigeria&output=embed"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
