import React from "react";
import Navigation from "../components/Navigation";

import Course from "../components/Course";


function Courses() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
      <Course />
      </div>
    
    </>
  );
}

export default Courses;
