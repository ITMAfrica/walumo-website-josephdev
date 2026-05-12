import React, { useState, useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { WhatWeDo } from './components/pages/WhatWeDo';
import { Partners } from './components/pages/Partners';
import { Contact } from './components/pages/Contact';
import { Connect } from './components/pages/Connect';

// Simple custom hook for hash navigation if we want to persist slightly
const useHashLocation = () => {
  const [loc, setLoc] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setLoc(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // init

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: string) => {
    window.location.hash = page;
  };

  return { page: loc, navigate };
};

export default function App() {
  const { page, navigate } = useHashLocation();

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'connect': return <Connect onNavigate={navigate} />;
      case 'about': return <About />;
      case 'what-we-do': return <WhatWeDo onNavigate={navigate} />;
      case 'partners': return <Partners onNavigate={navigate} />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  // Reset scroll on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <Layout currentPage={page} onNavigate={navigate}>
      {renderPage()}
    </Layout>
  );
}
