import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Suspense, lazy } from 'react';
import { Footer } from './components/Footer';
import { NotFound } from './components/NotFound';
import { SEOHead } from './components/SEOHead';
import { LocalBusinessSchema, ServiceListSchema, WebSiteSchema } from './components/JsonLd';
import { StickyMobileCTA } from './components/StickyMobileCTA';

const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));
const ProjectsPage = lazy(() => import('./components/ProjectsPage').then(m => ({ default: m.ProjectsPage })));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-white/10 border-t-white rounded-full animate-spin" />
  </div>
);

function HomePage() {
  return (
    <>
      <SEOHead
        title="Expert Roofing Services"
        description="Gorrocino Roofing — Your Local Top Rated Roofing Company. Expert residential and commercial roofing services across Southern California. Licensed & Insured."
        canonical="/"
      />
      <LocalBusinessSchema />
      <ServiceListSchema />
      <WebSiteSchema />
      <main>
        <Hero />
        <About />
        <Services />
        <CallToAction />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-white/20">
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<ProjectsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <StickyMobileCTA />
      <Footer />
    </div>
  );
}

export default App;