import React, { Component } from "react";
import portrait from "../assets/anneka.png";

class About extends Component {
  render() {
    return (
      <section className="d-flex pt-sm-5 pt-1 pb-5 px-sm-3 px-1 justify-content-center">
        <div className="text-center pt-3">
          <img className="portrait" src={portrait} alt="Portrait of Anneka" />
          <h1 id="About">Hi, I'm Anneka</h1>
          <p>
            I am a Front-End Developer who loves working with React and Redux. I
            love using SASS with Bootstrap v4 with Flexbox.
          </p>
          <p>
            Originally a self taught developer, I completed an exclusive
            bootcamp in Full Stack development. Since then I have completed a
            range of courses on UI and UX design with a view to using these
            skills further.
          </p>
          <p>
            I am an advocate of accessibility and spend much time trying to
            build accessible products and researching the issues around
            accessibilty.
          </p>
          <p>
            I like to dedicate some of my time to talking in school's to girls
            about entering STEM careers.
          </p>
          <p>
            I like to use Sketch for simple app and website designs and
            MarvelApp for prototyping for user testing.
          </p>
          <p>
            I am currently working for Social Finance in their Digital Labs
            team, building products that empower people to solve entrenched
            social problems.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
