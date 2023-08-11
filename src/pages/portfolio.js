import React from "react";
import Basicdetails from "../Components/Basicdetails";
import Portfolioheader from "../Components/Portfolioheader";
import Projects from "../Components/Projects";
import Certifications from "../Components/Certifications";
import Achievements from "../Components/Achievements";

function Profile() {
  return (
    <div>

      {/* Header container */}
      <Portfolioheader/>
      {/*  Basic details */}
      <Basicdetails/>
      {/*  Projects */}
      <Projects/>
      {/* Certifications  */}
      <Certifications/>
      {/* Achievements  */}
      <Achievements/>
    </div>
  );
}
export default Profile;
