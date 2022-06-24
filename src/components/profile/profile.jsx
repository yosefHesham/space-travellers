import React from 'react';
import JoinedMissions from './joinedMissions';
import ReservedRockets from './reservedRockets';

const profileStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
};

const Profile = () => (
  <div className="profile_container" style={profileStyle}>
    <JoinedMissions />
    <ReservedRockets />
  </div>
);
export default Profile;
