import React from 'react';
import { BUSINESS_INFO } from '../constants';

const SITE_URL = 'https://gorrocinoroofing.com';

interface BreadcrumbItem {
    name: string;
    url: string;
}

// LocalBusiness Schema (homepage)
export function LocalBusinessSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'RoofingContractor',
        '@id': `${SITE_URL}/#organization`,
        name: BUSINESS_INFO.name,
        url: SITE_URL,
        telephone: BUSINESS_INFO.phone,
        email: BUSINESS_INFO.email,
        priceRange: '$$',
        image: `${SITE_URL}/commercial-tpo-roof.png`,
        description: `${BUSINESS_INFO.name} — ${BUSINESS_INFO.tagline}. Expert residential and commercial roofing services.`,
        address: {
            '@type': 'PostalAddress',
            addressRegion: 'CA',
            addressCountry: 'US',
            areaServed: BUSINESS_INFO.area
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 33.9533, // Riverside center approx
            longitude: -117.3963
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '07:00',
                closes: '18:00'
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday'],
                opens: '08:00',
                closes: '14:00'
            }
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// WebSite Schema (homepage)
export function WebSiteSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: BUSINESS_INFO.name,
        url: SITE_URL,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// Service Schema (List of services)
export function ServiceListSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
            {
                '@type': 'Service',
                name: 'New Roof Installation',
                serviceType: 'Roofing',
                provider: { '@type': 'RoofingContractor', name: BUSINESS_INFO.name }
            },
            {
                '@type': 'Service',
                name: 'Roof Repair',
                serviceType: 'Roofing',
                provider: { '@type': 'RoofingContractor', name: BUSINESS_INFO.name }
            },
            {
                '@type': 'Service',
                name: 'Commercial TPO Roofing',
                serviceType: 'Commercial Roofing',
                provider: { '@type': 'RoofingContractor', name: BUSINESS_INFO.name }
            },
            {
                '@type': 'Service',
                name: 'Waterproofing',
                serviceType: 'Waterproofing',
                provider: { '@type': 'RoofingContractor', name: BUSINESS_INFO.name }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// Article Schema (blog posts)
interface ArticleSchemaProps {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    author: string;
    url: string;
}

export function ArticleSchema({ title, description, image, datePublished, author, url }: ArticleSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image: image.startsWith('http') ? image : `${SITE_URL}${image}`,
        datePublished,
        dateModified: datePublished,
        author: {
            '@type': 'Organization',
            name: author,
            url: SITE_URL,
        },
        publisher: {
            '@type': 'Organization',
            name: BUSINESS_INFO.name,
            url: SITE_URL,
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}${url}`,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// BreadcrumbList Schema
interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.url}`,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// FAQPage Schema
interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
