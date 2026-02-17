import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbSchema } from './JsonLd';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    const schemaItems = items.map(item => ({ name: item.label, url: item.href }));

    return (
        <>
            <BreadcrumbSchema items={schemaItems} />
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                    <Home className="w-3.5 h-3.5" />
                    <span className="sr-only">Home</span>
                </Link>
                {items.map((item, index) => (
                    <React.Fragment key={item.href}>
                        <ChevronRight className="w-3.5 h-3.5 text-neutral-700" />
                        {index === items.length - 1 ? (
                            <span className="text-neutral-300 truncate max-w-[200px] md:max-w-none">{item.label}</span>
                        ) : (
                            <Link to={item.href} className="hover:text-white transition-colors">
                                {item.label}
                            </Link>
                        )}
                    </React.Fragment>
                ))}
            </nav>
        </>
    );
};
