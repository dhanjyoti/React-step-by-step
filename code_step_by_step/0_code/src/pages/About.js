import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h3>About page</h3>
      <div>
        <Link to="/user/dhanjyoti">Dhanjyoti</Link>
      </div>
      <div>
        <Link to="/user/new">New</Link>
      </div>
    </div>
  );
};

export default About;
