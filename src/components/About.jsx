import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
    return(
      <div>
        <h1>About Page!</h1>
        <Link to={"/home"}>Link to Home</Link>
      </div>
    )
  }
export default About;