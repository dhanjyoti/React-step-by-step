import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CommonContext } from "../component/CommonContext";

const About = () => {
  const {color, updateColor} = useContext(CommonContext)

  return (
    <div style={{color}}>
      <h3 style={{"cursor":"pointer"}} onClick={()=>{
      updateColor('black')
    }}>About page</h3>
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
