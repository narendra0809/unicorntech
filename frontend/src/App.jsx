import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Lazy load components for better performance
// const WelcomePage = lazy(() => import('./pages/WelcomePage'));
import Login from './pages/admin/Login';
import AdminLayout from './pages/admin/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// categories
import PCatList from './pages/admin/PCategories/List';
import PCatCreate from './pages/admin/PCategories/Create';
import PCatEdit from './pages/admin/PCategories/Edit';

// portfolios
import PortfolioList from './pages/admin/Portfolios/List';
import PortfolioCreate from './pages/admin/Portfolios/Create';
import PortfolioEdit from './pages/admin/Portfolios/Edit';

// casestudies
import CSList from './pages/admin/CaseStudies/List';
import CSCreate from './pages/admin/CaseStudies/Create';
import CSEdit from './pages/admin/CaseStudies/Edit';

// ourteam
import OurTeamList from './pages/admin/OurTeam/List';
import OurTeamCreate from './pages/admin/OurTeam/Create';
import OurTeamEdit from './pages/admin/OurTeam/Edit';

// clientreviews
import CRList from './pages/admin/ClientReviews/List';
import CRCreate from './pages/admin/ClientReviews/Create';
import CREdit from './pages/admin/ClientReviews/Edit';
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));

const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));

// Enhanced Loading component with company branding
const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#191919]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#368DE5] mb-4"></div>
    <p className="text-white text-sm opacity-60">Loading...</p>
  </div>
);

// Enhanced 404 Not Found component
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#191919] text-white">
    <div className="text-center">
      <h1 className="text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="space-x-4">
        <button 
          onClick={() => window.location.href = '/'}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Go Home
        </button>
        <button 
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Welcome/Landing Page */}
            {/* <Route path="/" element={<WelcomePage />} /> */}
            
            {/* Main Pages */}
             <Route path="/admin/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/case-studies" element={<CaseStudyPage />} />
            <Route path="/case-studies/:id" element={<CaseStudyPage />} />

            
            {/* Backward compatibility redirects */}
            <Route path="/HomePage" element={<Navigate to="/home" replace />} />
            <Route path="/ServicePage" element={<Navigate to="/services" replace />} />
            <Route path="/AboutPage" element={<Navigate to="/about" replace />} />
            <Route path="/ContactPage" element={<Navigate to="/contact" replace />} />
            <Route path="/PortfolioPage" element={<Navigate to="/portfolio" replace />} />
            <Route path="/CaseStudyPage" element={<Navigate to="/case-studies" replace />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
            <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<div>Welcome Admin</div>} />

          <Route path="portfolio-categories" element={<PCatList/>} />
          <Route path="portfolio-categories/create" element={<PCatCreate/>} />
          <Route path="portfolio-categories/edit/:id" element={<PCatEdit/>} />

          <Route path="portfolios" element={<PortfolioList/>} />
          <Route path="portfolios/create" element={<PortfolioCreate/>} />
          <Route path="portfolios/edit/:id" element={<PortfolioEdit/>} />

          <Route path="casestudies" element={<CSList/>} />
          <Route path="casestudies/create" element={<CSCreate/>} />
          <Route path="casestudies/edit/:id" element={<CSEdit/>} />

          <Route path="ourteam" element={<OurTeamList/>} />
          <Route path="ourteam/create" element={<OurTeamCreate/>} />
          <Route path="ourteam/edit/:id" element={<OurTeamEdit/>} />

          <Route path="clientreviews" element={<CRList/>} />
          <Route path="clientreviews/create" element={<CRCreate/>} />
          <Route path="clientreviews/edit/:id" element={<CREdit/>} />
        </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;