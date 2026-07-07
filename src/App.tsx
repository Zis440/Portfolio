import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <Helmet>
        <title>Saphalya Das · AI Researcher &amp; ML Engineer</title>
        <meta name="description" content="Saphalya Das – AI Researcher &amp; ML Engineer. Multimodal AI, Neural Interfaces, Generative Systems, Mental Health Intelligence." />
        <meta property="og:title" content="Saphalya Das · AI Researcher &amp; ML Engineer" />
        <meta property="og:description" content="Multimodal AI · Neural Decoding · Genomic Intelligence · BCI · RAG · LLMs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saphalyadas.com" />
        <meta property="og:image" content="https://saphalyadas.com/img.png" />
        <meta name="theme-color" content="#0a0a0a" />
      </Helmet>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
