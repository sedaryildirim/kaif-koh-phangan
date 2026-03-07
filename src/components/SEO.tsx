import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = "Kaif | Beachfront Cafe & Specialty Coffee Koh Phangan | Chaloklum Bay", 
  description = "Discover Kaif, the premier beachfront cafe in Chaloklum Bay, Koh Phangan. Enjoy Levantine soul food, artisan specialty coffee, and healthy breakfast with stunning ocean views. Open daily 8am-8pm."
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Kaif",
    "image": "https://ais-dev-23e5ifgtmqmridnjyzqzl2-232259569789.asia-southeast1.run.app/kaif-hero-image.jpg",
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
    "servesCuisine": ["Levantine", "Middle Eastern", "International", "Healthy", "Specialty Coffee"],
    "priceRange": "$$"
  };

  const keywords = "Koh Phangan, Chaloklum Bay, beachside cafe, beachfront restaurant, specialty coffee, Levantine food, Middle Eastern cuisine, healthy breakfast, brunch Koh Phangan, ocean view dining, shakshuka, cold brew coffee, island cafe Koh Phangan, best coffee Chaloklum";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/kaif-hero-image.jpg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/kaif-hero-image.jpg" />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};
