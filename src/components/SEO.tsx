import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = "Kaif | Beachside Dining & Specialty Coffee Koh Phangan", 
  description = "Experience modern beachside dining at Kaif in Chaloklum Bay. Serving Levantine soul food, specialty coffee, and fresh tropical flavors daily from 8am to 8pm."
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Kaif",
    "image": "https://images.unsplash.com/photo-1515276427842-f85802d514a2?auto=format&fit=crop&q=80&w=1920",
    "@id": "https://kaif-kohphangan.com",
    "url": "https://kaif-kohphangan.com",
    "telephone": "+66XXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chaloklum Bay",
      "addressLocality": "Koh Phangan",
      "addressRegion": "Surat Thani",
      "postalCode": "84280",
      "addressCountry": "TH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.786961,
      "longitude": 100.003861
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "servesCuisine": ["Levantine", "Middle Eastern", "International", "Healthy"],
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};
