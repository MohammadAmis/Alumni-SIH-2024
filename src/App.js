// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/etc/AuthContext';
import ProtectedRoute from './Components/etc/ProtectedRoute';
import Navbar from './Components/etc/Navbar';

import Login from './Components/etc/Login';

// Unregistered user components
import Home from './Components/Common/home/Home';
import About from './Components/Common/about/About';
import SuccesStory from './Components/Common/success story/Success_Story';
import Alumni from './Components/Common/alumni directory/Alumni';
import Help from './Components/Common/help faq/Help';
import JopPortal from './Components/Common/job portal/Job_Portal';
import News from './Components/Common/news blog opinion/News';
import Events from './Components/Common/events/Events'

// Registered user components
import Profile from './Components/registered/profile/Profile';
import Community from './Components/registered/community/Community';
import Engagement from './Components/registered/engagement/Engagement';

// College components
import CollegeProfile from './Components/college/college profile/CollegeProfile';
import CollegeDashboard from './Components/college/dashboard/CollegeDashboard';

// Govt components
import AboutPortal from './Components/government/about portal/AboutPortal';
import CollegeDirectory from './Components/government/college directory/CollegeDirectory';
import GovtDashboard from './Components/government/dashboard/GovtDashboard';

function App() {
  return (
    <AuthProvider> {/* Wrap your app with AuthProvider */}
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/alumni-directory" element={<Alumni />} />
          <Route path="/job-portal" element={<JopPortal />} />
          <Route path='/success-story' element={<SuccesStory/>}/>
          <Route path="/news" element={<News />} />
          <Route path="/help" element={<Help />} />
          <Route path='/login' element={<Login/>}/>

          <Route path="/community" element={
            <ProtectedRoute element={<Community />} requiredAccess={['registered', 'college']} />
          } />
          <Route path="/engagement" element={
            <ProtectedRoute element={<Engagement />} requiredAccess={['registered', 'college']} />
          } />
          <Route path="/profile" element={
            <ProtectedRoute element={<Profile />} requiredAccess={['registered']} />
          } />

          <Route path="/college-dashboard" element={
            <ProtectedRoute element={<CollegeDashboard />} requiredAccess={['college']} />
          } />
          <Route path="/college-profile" element={
            <ProtectedRoute element={<CollegeProfile />} requiredAccess={['college']} />
          } />

          <Route path="/college-directory" element={
            <ProtectedRoute element={<CollegeDirectory />} requiredAccess={['government']} />
          } />
          <Route path="/about-portal" element={
            <ProtectedRoute element={<AboutPortal />} requiredAccess={['government']} />
          } />
          <Route path="/govt-dashboard" element={
            <ProtectedRoute element={<GovtDashboard />} requiredAccess={['government']} />
          } />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
