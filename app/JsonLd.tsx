export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Dammic Model Schools",
    "description": "Quality education from Creche to Secondary since 2005. Solid and steady steps to greatness.",
    "url": "https://dammicmodelschools.com",
    "logo": "https://dammicmodelschools.com/logo.png",
    "foundingDate": "2005-10-17",
    "founder": {
      "@type": "Person",
      "name": "Pst. Mrs T. M. Ogundele"
    },
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "9, Mojisola Badru, Orile-Iloye",
        "addressLocality": "Sango Otta",
        "addressRegion": "Ogun State",
        "addressCountry": "NG"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "7, Ogundele Close, Orile-Iloye",
        "addressLocality": "Sango Otta",
        "addressRegion": "Ogun State",
        "addressCountry": "NG"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-813-489-7661",
      "contactType": "Admissions",
      "email": "dammicsch@gmail.com"
    },
    "sameAs": [
      "https://wa.me/2348134897661"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
