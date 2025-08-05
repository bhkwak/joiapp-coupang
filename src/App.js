// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage    from './LandingPage';
import QuestionsPage  from './QuestionsPage';
import ResultsPage    from './ResultsPage';
import CalculatingPage from './CalculatingPage';
import DashboardPage  from './DashboardPage';
import RegistrationPage from './RegistrationPage';
import SurveyPage     from './SurveyPage';
import LoginPage      from './LoginPage';
import ProfilePage    from './ProfilePage';
import AdminPage      from './Admin/AdminPage';

 

const App = () => {
 
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<LandingPage />} />
        <Route path="/questions"   element={<QuestionsPage />} />
        <Route path="/results"     element={<ResultsPage />} />
        <Route path="/calculating" element={<CalculatingPage />} />
        <Route path="/dashboard"   element={<DashboardPage />} />
        <Route path="/survey"      element={<SurveyPage />} />
        <Route path="/profile"     element={<ProfilePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login"       element={<LoginPage />} />

        {/* protect /admin so only admin users can see it */}
     
        <Route path="/admin"       element={<AdminPage />} />

        {/* catch‐all → back to landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
