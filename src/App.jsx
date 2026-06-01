// src/App.jsx — route definitions for vite-react-ssg (data-router format)
// The `handle.title` on each route drives the per-page <title> (see Layout).
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

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />, handle: { title: 'HAMER — Golf Consulting · NCAA Recruiting, Development & Camps' } },
      { path: 'founders', element: <Founders />, handle: { title: 'The Founders — HAMER Golf Consulting' } },
      { path: 'recruit', element: <Recruit />, handle: { title: 'Recruit — NCAA Collegiate Golf Placement · HAMER' } },
      { path: 'consult', element: <Consult />, handle: { title: 'Consult — Year-Round Junior Golf Development · HAMER' } },
      { path: 'camps', element: <Camps />, handle: { title: 'Camps — Junior Golf Program Architecture · HAMER' } },
      { path: 'partners', element: <Partners />, handle: { title: 'Partners — HAMER Golf Consulting' } },
      { path: 'inquire', element: <Inquire />, handle: { title: 'Inquire — HAMER Golf Consulting' } },
      { path: 'join-now', element: <JoinNow />, handle: { title: 'Join Now — HAMER Golf Consulting' } },
      { path: 'join-now/:program', element: <ProgramPackages /> },
      { path: 'join-now/:program/:packageId', element: <PackageDetails /> },
      { path: 'checkout/:program/:packageId', element: <Checkout /> },
      { path: 'terms/recruit', element: <TermsRecruit />, handle: { title: 'Recruit Terms — HAMER Golf Consulting' } },
      { path: 'terms/consult', element: <TermsConsult />, handle: { title: 'Consult Terms — HAMER Golf Consulting' } },
      { path: 'terms/camps', element: <TermsCamps />, handle: { title: 'Camps Terms — HAMER Golf Consulting' } },
      { path: 'privacy', element: <Privacy />, handle: { title: 'Privacy Notice — HAMER Golf Consulting' } },
    ],
  },
];
