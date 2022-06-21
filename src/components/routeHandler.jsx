/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Missions from './missions/missions';
import Rockets from './rockets/rockets';
import Profile from './profile/profile';
import Navbar from './nav_bar';

function RouteHandler() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
export default RouteHandler;
