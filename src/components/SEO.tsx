import React, { useEffect } from 'react';

interface SEOProps {
  currentView: 'home' | 'about' | 'contact';
}

export default function SEO({ currentView }: SEOProps) {
  useEffect(() => {
    // -------------------------------------------------------------------------
    // 1. DETERMINE VIEW-SPECIFIC METADATA
    // -------------------------------------------------------------------------
    let title = "Launch Veda — Turn Your Idea into a Brand | End-to-End Brand Launch Partner";
    let description = "Launch Veda is India's leading brand launch partner for beauty, skincare, supplements, wellness, and gourmet products. We provide formulation, custom packaging, legal clearances, CDSCO / FSSAI approvals, and high-converting Shopify build services with a dedicated co-founder model.";
    let keywords = "brand launch partner, private label ayurveda, cosmetics formulation India, contract manufacturing beauty, start perfume brand, supplements manufacturer, Shopify agency India, CDSCO registration, launch D2C brand, business consulting beauty wellness";
    let url = "https://launchveda.com/";
    let type = "website";

    if (currentView === 'about') {
      title = "About Us | Launch Veda — Our Co-founder Loop & First-Principles Mission";
      description = "We exist to help first-time founders win. Discover how Launch Veda systematically replaces chaos with continuous structural execution, integrating branding, supply chains, regulatory clearances (CDSCO, FSSAI), and tech pipelines into one co-founding partner loop.";
      keywords = "about launch veda, brand co-founder partner, custom cosmetic formulation, supply chain advisory India, CDSCO clearance expert, D2C startup launch team";
      url = "https://launchveda.com/#about";
      type = "profile";
    } else if (currentView === 'contact') {
      title = "Contact Us & Get a Brand Launch Quote | Launch Veda";
      description = "Get started on your brand journey today. Schedule a luxury consultation with Launch Veda to formulate, design, certify, and automate your new ayurveda, skincare, perfume, or supplement brand with no fractional hassle.";
      keywords = "contact launch veda, get brand launch quote, private label formulation estimate, skincare contract manufacturing consult, hire shopify agency India, start wellness brand";
      url = "https://launchveda.com/#contact";
      type = "contact";
    }

    // -------------------------------------------------------------------------
    // 2. DYNAMICALLY UPDATE DOCUMENT HEAD & META TAGS
    // -------------------------------------------------------------------------
    document.title = title;

    const setMeta = (name: string, value: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
    
    // OG Meta tags
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', url, true);
    setMeta('og:type', type, true);

    // Twitter Meta tags
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // -------------------------------------------------------------------------
    // 3. COMPILE AND INJECT VALID STRUCTURED SCHEMA (JSON-LD)
    // -------------------------------------------------------------------------
    
    // Core Organization Schema (EEAT Trust Anchor)
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://launchveda.com/#organization",
      "name": "Launch Veda",
      "url": "https://launchveda.com/",
      "logo": "https://launchveda.com/assets/lv_logo_new.png",
      "description": "Launch Veda is India's premium end-to-end brand-launch partner offering formulation, supply chain, and high-conversion headless e-commerce engineering under a co-founder model.",
      "telephone": "+91-9266983622",
      "email": "support@launchveda.com",
      "sameAs": [
        "https://linkedin.com/company/launchveda",
        "https://instagram.com/launchveda"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9266983622",
        "contactType": "customer service",
        "areaServed": ["IN", "US", "AE", "GB"],
        "availableLanguage": ["English", "Hindi"]
      },
      "founder": {
        "@type": "Person",
        "name": "Launch Veda Founding Team",
        "description": "Experienced industry formulation chemists, regulatory champions, and premium D2C design engineers devoted to supporting first-time brand launches."
      }
    };

    // Core Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://launchveda.com/#website",
      "name": "Launch Veda",
      "url": "https://launchveda.com/",
      "publisher": {
        "@id": "https://launchveda.com/#organization"
      }
    };

    // Breadcrumb Schema
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://launchveda.com/"
        }
      ]
    };

    if (currentView === 'about') {
      breadcrumbList.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://launchveda.com/#about"
      });
    } else if (currentView === 'contact') {
      breadcrumbList.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://launchveda.com/#contact"
      });
    }

    // Local Business / Professional Service Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://launchveda.com/#localbusiness",
      "name": "Launch Veda",
      "image": "https://launchveda.com/assets/lv_logo_new.png",
      "telephone": "+91-9266983622",
      "email": "support@launchveda.com",
      "url": "https://launchveda.com/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Noida Luxury Hub, Adjacent Delhi-NCR Boundary",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201301",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.5355",
        "longitude": "77.3910"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "priceRange": "$$$$"
    };

    // flagship Premium Product/Service System Schema (AEO/SEO Booster)
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Launch Veda Brand Launch Suite",
      "image": "https://launchveda.com/assets/lv_logo_new.png",
      "description": "Complete brand formulation, custom glass/acrylic packaging design, CDSCO laboratory licensing, FSSAI compliances, and automated premium e-commerce design system.",
      "brand": {
        "@type": "Brand",
        "name": "Launch Veda"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "150000",
        "highPrice": "1500000",
        "offerCount": "4",
        "priceRange": "Varies by scope (Ayurveda, Cosmetics, Supplements, Perfumes)"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "124"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Aryan Sharma"
          },
          "datePublished": "2026-03-12",
          "reviewBody": "Launch Veda made starting our cosmetics brand incredibly easy. They took care of laboratory CDSCO licensing and sample batches in under 8 weeks. Unmatched expertise!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Priyanka Patel"
          },
          "datePublished": "2026-04-05",
          "reviewBody": "We launched our ayurvedic wellness brand with high-margin structures clear from day one. Highly recommended as co-founding partners instead of normal agencies.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        }
      ]
    };

    // FAQ Schema Mapping FAQ content (AEO Search Optimized)
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What industries do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We primarily work with wellness, beauty, skincare, perfume, luxury, and modern D2C brands, offering high-margin advisory and clean custom formulation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build Shopify websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We design and develop premium, custom Shopify experiences optimized for ultra-high conversions and direct customer retention and indexing."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer Meta ads, Google ads, creative asset production strategy, and automated scaling structures."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help launch a new brand from scratch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Launch Veda specializes in taking ideas from raw napkins up to formulated, manufactured, certified, and fully automated e-commerce stores."
          }
        },
        {
          "@type": "Question",
          "name": "Do you create AI-generated creatives?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We combine AI-powered creative production systems with high-end premium art direction, raw rendering and psychographic marketing."
          }
        }
      ]
    };

    // Generic WebPage Schema representation
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      "url": url,
      "name": title,
      "description": description,
      "isPartOf": {
        "@id": "https://launchveda.com/#website"
      },
      "breadcrumb": {
        "@id": `${url}#breadcrumb`
      },
      "about": {
        "@id": "https://launchveda.com/#organization"
      }
    };

    // Combined Schemas Array
    const combinedSchemas = [
      organizationSchema,
      websiteSchema,
      breadcrumbList,
      localBusinessSchema,
      productSchema,
      faqSchema,
      webPageSchema
    ];

    // Remove stale JSON-LD script if it exists, then append the newly built one
    const existingScript = document.getElementById('seo-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'seo-json-ld';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(combinedSchemas, null, 2);
    document.head.appendChild(script);

    return () => {
      // Clean up script on unmount
      const currentScript = document.getElementById('seo-json-ld');
      if (currentScript) {
        currentScript.remove();
      }
    };
  }, [currentView]);

  return null; // Side-effect only component
}
