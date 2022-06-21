import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Missions from './missions/missions';
import Profile from './profile/profile';
import Navbar from './nav_bar';
import Rockets from './rockets/rockets';

const RouteHandler = () => (

  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);

export default RouteHandler;
