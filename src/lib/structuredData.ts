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

// Resources Page Schema for SEO
export const resourcesPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Compliance Resources & Guides",
  "description": "Enterprise compliance resources for 2025-2026 regulations including FSMA 204 traceability, EU Deforestation Regulation (EUDR), CSRD ESG reporting, and AI-powered GRC automation.",
  "url": "https://tracer2c.com/resources",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Article",
        "position": 1,
        "name": "FSMA 204 Compliance Deadline Extended: What It Means for Your Business",
        "description": "FDA extended the FSMA 204 traceability deadline to January 2027. Learn what this means for your implementation timeline and strategy.",
        "url": "https://tracer2c.com/resources/blog/fsma-204-deadline-extended",
        "datePublished": "2025-01-10",
        "author": {
          "@type": "Person",
          "name": "Dr. Rachel Morrison"
        }
      },
      {
        "@type": "Article",
        "position": 2,
        "name": "EUDR Compliance: 6 Steps to Prepare for EU Deforestation Regulation",
        "description": "The EU Deforestation Regulation takes effect in 2025. Here's your comprehensive roadmap to achieving compliance.",
        "url": "https://tracer2c.com/resources/blog/eudr-compliance-guide",
        "datePublished": "2025-01-08",
        "author": {
          "@type": "Person",
          "name": "Marcus Chen"
        }
      },
      {
        "@type": "Article",
        "position": 3,
        "name": "CSRD Reporting: Enterprise Guide to ESG Requirements in 2026",
        "description": "Corporate Sustainability Reporting Directive compliance guide for large enterprises with multi-region operations.",
        "url": "https://tracer2c.com/resources/blog/csrd-enterprise-guide",
        "datePublished": "2025-01-05",
        "author": {
          "@type": "Person",
          "name": "Sarah Thompson"
        }
      }
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "TraceR2C LLC",
    "logo": "https://tracer2c.com/lovable-uploads/5166647f-ac50-42be-a48d-24b0fcc22967.png"
  }
};

// Article Schema for individual blog posts
export const articleSchema = (article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "url": article.url,
  "datePublished": article.datePublished,
  "dateModified": article.datePublished,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "TraceR2C LLC",
    "logo": {
      "@type": "ImageObject",
      "url": "https://tracer2c.com/lovable-uploads/5166647f-ac50-42be-a48d-24b0fcc22967.png"
    }
  },
  "image": article.image || "https://tracer2c.com/og-image.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

// HowTo Schema for guides
export const howToSchema = (guide: {
  title: string;
  description: string;
  url: string;
  steps: Array<{ name: string; text: string }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": guide.title,
  "description": guide.description,
  "url": guide.url,
  "step": guide.steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text
  }))
});