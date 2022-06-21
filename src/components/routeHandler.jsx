import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Missions from './missions/missions';
import Profile from './profile/profile';
import Navbar from './nav_bar';

const RouteHandler = () => (
  <Router>
    <Navbar />
    <Routes>
      {/* <Route path="/" element={<Rockets />} /> */}
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);

export default RouteHandler;
