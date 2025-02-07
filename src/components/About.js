import React from "react";
import Links from "./Links"

function About(props) {
  const bioContent = (props.bio && props.bio.trim().length > 0) ? <p>{props.bio}</p> : null;
  
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioContent}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {   <Links 
        github="https://github.com/liza"
        linkedin="https://www.linkedin.com/in/liza/"
      />}
    </div>
  );
}

export default About;
