// Structured Data (JSON-LD) for SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TraceR2C LLC",
  "alternateName": "TraceR2C",
  "url": "https://tracer2c.com",
  "logo": "https://tracer2c.com/lovable-uploads/5166647f-ac50-42be-a48d-24b0fcc22967.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-TRACER2C",
    "contactType": "customer service",
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://linkedin.com/company/tracer2c",
    "https://twitter.com/tracer2c"
  ]
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TraceR2C Compliance Platform",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "description": "Enterprise supply chain compliance and documentation management platform with AI-powered insights and governed outreach capabilities.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free trial available"
  },
  "author": {
    "@type": "Organization",
    "name": "TraceR2C LLC"
  },
  "screenshot": "https://tracer2c.com/platform-screenshot.jpg",
  "featureList": [
    "Supply Chain Compliance Management",
    "AI-Powered Risk Assessment",
    "Document Management & Version Control",
    "Multi-Region Support",
    "Enterprise Security",
    "Real-time Compliance Tracking",
    "Automated Reporting & Analytics"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TraceR2C",
  "url": "https://tracer2c.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://tracer2c.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is TraceR2C?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TraceR2C is an enterprise-grade supply chain compliance platform that delivers AI-powered insights, document management, and governed outreach capabilities for complex, multi-region operations."
      }
    },
    {
      "@type": "Question",
      "name": "Does TraceR2C support multi-region operations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, TraceR2C is built for global operations with localized compliance requirements, data residency options, and support for multiple regulatory frameworks."
      }
    },
    {
      "@type": "Question",
      "name": "What industries does TraceR2C serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TraceR2C serves regulated industries including pharmaceuticals, food & beverage, manufacturing, healthcare, and financial services with industry-specific compliance requirements."
      }
    }
  ]
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});