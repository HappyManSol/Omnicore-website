import { SITE_CONFIG, COMPANY_INFO } from "@/lib/constants";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "alternateName": SITE_CONFIG.altName,
    "url": SITE_CONFIG.url,
    "logo": `${SITE_CONFIG.url}/logo.png`,
    "description": SITE_CONFIG.description,
    "email": COMPANY_INFO.email,
    "sameAs": [
      SITE_CONFIG.links.linkedin,
      SITE_CONFIG.links.twitter,
      SITE_CONFIG.links.telegram,
      SITE_CONFIG.links.github,
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": COMPANY_INFO.email,
      "availableLanguage": ["en"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_CONFIG.name,
    "url": SITE_CONFIG.url,
    "description": SITE_CONFIG.description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_CONFIG.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web3 Consultancy",
    "provider": {
      "@type": "Organization",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.url
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web3 Consultancy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Product Management & Development",
            "description": "End-to-end product strategy, roadmap planning, and technical development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing & Go-to-Market",
            "description": "Comprehensive marketing strategies for Web2 and Web3 audiences"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Launchpad Integration & Partnerships",
            "description": "Strategic partnerships with leading launchpads"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Development & Strategic Alliances",
            "description": "Partnership strategy and deal sourcing"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

