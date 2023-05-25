import React from "react";
import profile from "./data/profile-data";
import { VscArrowRight } from "react-icons/vsc";

const Profile = () => {
  return (
    <div className = 'container'>
      
      <div className="grid">
        {profile.map((item) => {
          return (
            <div key={item.image} className = 'person-profile'>
              <div>
                <img src={item.image} alt={item.name} className = 'image' />
              </div>
              <p  className = 'position'>{item.name}</p>
              <p  >{item.position}</p>
              <a href="#" className = 'learn-more'>Learn More <VscArrowRight /></a>
            </div>

          );
        })}
      </div>
    </div>
  );
};

export default Profile;
