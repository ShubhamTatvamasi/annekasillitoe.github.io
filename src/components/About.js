import React, { Component } from "react";
import portrait from "../assets/anneka.png";

class About extends Component {
  render() {
    return (
      <section className="pt-sm-5 pt-1 pb-5 px-sm-3 px-1">
        <div className="text-center pt-3">
          <img className="portrait" src={portrait} alt="Portrait of Anneka" />
          <h1 id="About">Hi, I'm Anneka</h1>
        </div>
        <div className="px-2">
          <p>
            I am a Front-End Developer who loves working with React and Redux. I
            love using SASS with Bootstrap v4 with Flexbox to get projects up
            and running quickly.
          </p>
          <p>
            Originally a self taught developer, I completed an exclusive
            bootcamp in Full Stack development. Since then I have completed a
            range of courses on UI and UX design with a view to using these
            skills to bridge the gap between designers and developers.
          </p>
          <p>
            I am an advocate of accessibility and spend much time trying to
            build accessible products and researching the issues around
            accessibility.
          </p>
          <p>
            I like to dedicate some of my time to talking in school's to girls
            about entering STEM careers and have given talks around accessibility.
          </p>
          <p>
            I like to use Adobe XD and Sketch for simple app and website designs and
            Zeplin or Adobe XD for prototyping for user testing.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
