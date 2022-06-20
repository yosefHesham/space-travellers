import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from "react"
import Missions from "./missions/missions"
import Rockets from "./rockets/rockets"
import Profile from "./profile/profile"
import Navbar from "./nav_bar"

const RouteHandler = () => {

  return  <Router>
    <Navbar/>
  <Routes>
    <Route path="/" element={<Rockets></Rockets>}></Route>
    <Route path="/missions" element={<Missions></Missions>} ></Route>
    <Route path="/profile" element={<Profile></Profile>} ></Route>
  </Routes>
  </Router>

}

export default RouteHandler