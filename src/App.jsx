// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout.jsx';
import Home from './pages/Home/index.jsx';
import Founders from './pages/Founders.jsx';
import Recruit from './pages/Recruit.jsx';
import Consult from './pages/Consult.jsx';
import Camps from './pages/Camps.jsx';
import Partners from './pages/Partners.jsx';
import Inquire from './pages/Inquire.jsx';
import JoinNow from './pages/JoinNow.jsx';
import ProgramPackages from './pages/ProgramPackages.jsx';
import PackageDetails from './pages/PackageDetails.jsx';
import Checkout from './pages/Checkout.jsx';
import TermsRecruit from './pages/terms/TermsRecruit.jsx';
import TermsConsult from './pages/terms/TermsConsult.jsx';
import TermsCamps from './pages/terms/TermsCamps.jsx';
import Privacy from './pages/Privacy.jsx';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // If the URL has a hash, let the browser handle scrolling to that element.
    // Otherwise, scroll to top on route change.
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/camps" element={<Camps />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/inquire" element={<Inquire />} />
          <Route path="/join-now" element={<JoinNow />} />
          <Route path="/join-now/:program" element={<ProgramPackages />} />
          <Route path="/join-now/:program/:packageId" element={<PackageDetails />} />
          <Route path="/checkout/:program/:packageId" element={<Checkout />} />
          <Route path="/terms/recruit" element={<TermsRecruit />} />
          <Route path="/terms/consult" element={<TermsConsult />} />
          <Route path="/terms/camps" element={<TermsCamps />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </>
  );
}
