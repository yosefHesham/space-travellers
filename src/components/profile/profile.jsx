import React from 'react';
import JoinedMissions from './joinedMissions';
import ReservedRockets from './reservedRockets';

const Profile = () =>  { 
 
 return ( <div className="profile_container" style={{display:"flex"}}>
    <JoinedMissions  />
    <ReservedRockets></ReservedRockets>
  </div>
);
}
export default Profile
