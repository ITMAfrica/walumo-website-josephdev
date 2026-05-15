import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { Layout } from './components/layout/Layout';

const Home = React.lazy(() => import('./components/pages/Home').then(m => ({ default: m.Home })));
const About = React.lazy(() => import('./components/pages/About').then(m => ({ default: m.About })));
const WhatWeDo = React.lazy(() => import('./components/pages/WhatWeDo').then(m => ({ default: m.WhatWeDo })));
const Partners = React.lazy(() => import('./components/pages/Partners').then(m => ({ default: m.Partners })));
const Contact = React.lazy(() => import('./components/pages/Contact').then(m => ({ default: m.Contact })));
const Connect = React.lazy(() => import('./components/pages/Connect').then(m => ({ default: m.Connect })));

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-950">
    <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Connect />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
