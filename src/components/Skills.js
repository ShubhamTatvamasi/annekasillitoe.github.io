import React, { Component } from "react";
import Stars from "./Stars";

class Skills extends Component {
  render() {
    return (
      <section className="d-flex pt-sm-5 pt-1 pb-5 px-sm-3 px-1 justify-content-center">
        <div className="text-center pt-3">
          <h1 className="pb-sm-4 pb-1">Superpowers</h1>
          <Stars
            skill="HTML5"
            className={["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"]}
          />
          <Stars
            skill="CSS3"
            className={[
              "fa-star",
              "fa-star",
              "fa-star",
              "fa-star",
              "fa-star-half-o"
            ]}
          />
          <Stars
            skill="React"
            className={[
              "fa-star",
              "fa-star",
              "fa-star",
              "fa-star",
              "fa-star-half-o"
            ]}
          />
          <Stars
            skill="Redux"
            className={[
              "fa-star",
              "fa-star",
              "fa-star",
              "fa-star-half-o",
              "fa-star-o"
            ]}
          />
          <Stars
            skill="SASS"
            className={[
              "fa-star",
              "fa-star",
              "fa-star",
              "fa-star",
              "fa-star-half-o"
            ]}
          />
          <Stars
            skill="Bootstrap"
            className={[
              "fa-star",
              "fa-star",
              "fa-star",
              "fa-star-half-o",
              "fa-star-o"
            ]}
          />
          <Stars
            skill="Flexbox"
            className={[
              "fa-star",
              "fa-star",
              "fa-star",
              "fa-star-o",
              "fa-star-o"
            ]}
          />
          <Stars
            skill="Sketch"
            className={[
              "fa-star",
              "fa-star",
              "fa-star-half-o",
              "fa-star-o",
              "fa-star-o"
            ]}
          />
          <Stars
            skill="MarvelApp"
            className={[
              "fa-star",
              "fa-star",
              "fa-star-o",
              "fa-star-o",
              "fa-star-o"
            ]}
          />
        </div>
      </section>
    );
  }
}

export default Skills;
