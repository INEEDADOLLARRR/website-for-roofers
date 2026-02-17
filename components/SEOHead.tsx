import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../constants';

interface SEOHeadProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: 'website' | 'article';
    article?: {
        author?: string;
        publishedTime?: string;
        tags?: string[];
        section?: string;
    };
}

const SITE_URL = 'https://gorrocinoroofing.com';

export const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description,
    canonical,
    image = '/socal-skyline.png',
    type = 'website',
    article,
}) => {
    const fullTitle = `${title} | ${BUSINESS_INFO.name}`;
    const fullUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
    const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={BUSINESS_INFO.name} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />

            {/* Article-specific */}
            {article?.publishedTime && (
                <meta property="article:published_time" content={article.publishedTime} />
            )}
            {article?.author && (
                <meta property="article:author" content={article.author} />
            )}
            {article?.section && (
                <meta property="article:section" content={article.section} />
            )}
            {article?.tags?.map((tag) => (
                <meta key={tag} property="article:tag" content={tag} />
            ))}
        </Helmet>
    );
};
