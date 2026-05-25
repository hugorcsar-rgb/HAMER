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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
          {/* Terms & Privacy come in Fase 2 */}
        </Route>
      </Routes>
    </>
  );
}
