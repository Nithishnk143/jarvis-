import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './components/layout/AuthLayout';
import PortalLayout from './components/layout/PortalLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Auth
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ProfileSetup from './pages/onboarding/ProfileSetup';
import UserTypeSelect from './pages/onboarding/UserTypeSelect';
import NotFound from './pages/NotFound';

// Common
import Dashboard from './pages/common/Dashboard';
import Scholarships from './pages/common/Scholarships';
import Mentors from './pages/common/Mentors';
import Notifications from './pages/common/Notifications';

// Portal: 10th
import TenthDashboard from './pages/portals/tenth/TenthDashboard';
import StreamQuiz from './pages/portals/tenth/StreamQuiz';
import StreamGuide from './pages/portals/tenth/StreamGuide';
import TenthRoadmap from './pages/portals/tenth/TenthRoadmap';

// Portal: 12th
import TwelfthDashboard from './pages/portals/twelfth/TwelfthDashboard';
import DegreeQuiz from './pages/portals/twelfth/DegreeQuiz';
import CollegeFinder from './pages/portals/twelfth/CollegeFinder';
import ExamTracker from './pages/portals/twelfth/ExamTracker';
import WhatIfSimulator from './pages/portals/twelfth/WhatIfSimulator';

// Portal: UG
import UGDashboard from './pages/portals/ug/UGDashboard';
import JobRecommender from './pages/portals/ug/JobRecommender';
import SkillGapTracker from './pages/portals/ug/SkillGapTracker';
import ResumeBuilderTips from './pages/portals/ug/ResumeBuilderTips';
import InternshipBoard from './pages/portals/ug/InternshipBoard';
import InterviewPrep from './pages/portals/ug/InterviewPrep';

// Portal: PG
import PGDashboard from './pages/portals/pg/PGDashboard';
import PathRecommender from './pages/portals/pg/PathRecommender';
import ResearchFinder from './pages/portals/pg/ResearchFinder';
import AbroadGuide from './pages/portals/pg/AbroadGuide';

// Portal: Professional
import ProfessionalDashboard from './pages/portals/professional/ProfessionalDashboard';
import CareerSwitch from './pages/portals/professional/CareerSwitch';
import SalaryInsights from './pages/portals/professional/SalaryInsights';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      
      {/* Public Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Protected Profile Setup */}
      <Route element={<ProtectedRoute />}>
        <Route path="/setup-profile" element={<ProfileSetup />} />
        <Route path="/onboarding" element={<UserTypeSelect />} />
      </Route>

      {/* Protected Main Routes inside Portal Layout */}
      <Route element={<ProtectedRoute><PortalLayout /></ProtectedRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/roadmaps" element={<div className="container py-5 text-center"><h3>AI Roadmaps Integration Coming Soon</h3></div>} />
        <Route path="/notifications" element={<Notifications />} />

        {/* 10th Portal */}
        <Route path="/portal/tenth" element={<TenthDashboard />} />
        <Route path="/portal/tenth/quiz" element={<StreamQuiz />} />
        <Route path="/portal/tenth/stream" element={<StreamGuide />} />
        <Route path="/portal/tenth/roadmap" element={<TenthRoadmap />} />

        {/* 12th Portal */}
        <Route path="/portal/twelfth" element={<TwelfthDashboard />} />
        <Route path="/portal/twelfth/quiz" element={<DegreeQuiz />} />
        <Route path="/portal/twelfth/colleges" element={<CollegeFinder />} />
        <Route path="/portal/twelfth/exams" element={<ExamTracker />} />
        <Route path="/portal/twelfth/whatif" element={<WhatIfSimulator />} />

        {/* UG Portal */}
        <Route path="/portal/ug" element={<UGDashboard />} />
        <Route path="/portal/ug/jobs" element={<JobRecommender />} />
        <Route path="/portal/ug/skills" element={<SkillGapTracker />} />
        <Route path="/portal/ug/resume" element={<ResumeBuilderTips />} />
        <Route path="/portal/ug/internships" element={<InternshipBoard />} />
        <Route path="/portal/ug/interview" element={<InterviewPrep />} />

        {/* PG Portal */}
        <Route path="/portal/pg" element={<PGDashboard />} />
        <Route path="/portal/pg/path" element={<PathRecommender />} />
        <Route path="/portal/pg/research" element={<ResearchFinder />} />
        <Route path="/portal/pg/abroad" element={<AbroadGuide />} />

        {/* Professional Portal */}
        <Route path="/portal/professional" element={<ProfessionalDashboard />} />
        <Route path="/portal/professional/switch" element={<CareerSwitch />} />
        <Route path="/portal/professional/salary" element={<SalaryInsights />} />
        <Route path="/portal/professional/skills" element={<div className="text-center py-5"><h3>Skills Viewer Coming Soon</h3></div>} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
