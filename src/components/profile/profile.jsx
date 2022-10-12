import React from 'react';
import JoinedMissions from './joinedMissions';
import ReservedRockets from './reservedRockets';

const Profile = () => (
  <div className="container-fluid px-2 md:px-24 py-20 md:py-32 h-screen flex justify-between gap-2">
    <JoinedMissions />
    <ReservedRockets />
  </div>
);
export default Profile;
