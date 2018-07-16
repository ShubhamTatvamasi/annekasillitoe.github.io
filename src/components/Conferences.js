import React, { Component } from "react";

class Conferences extends Component {
  render() {
    return (
      <section className="d-flex pt-sm-5 pt-1 pb-5 px-sm-3 px-1 justify-content-center">
        <div className="text-center pt-3">
          <h1 className="pb-sm-4 pb-1">Conferences and Talks</h1>
          <p>
            I like attending conferences and meetups around women in tech and
            accessibilty and design.
          </p>
          <p>Some of these have included, but are not limited to:</p>
          <ul className="conferences-list">
            <li>Women In Tech Breakfast - November 2016</li>
            <li>
              Turing Lecture: AI Through the Looking Glass - November 2017
            </li>
            <li>Tech(K)now Day - October 2017 & February 2018</li>
            <li>GovDesign meetups - 2018</li>
          </ul>
          <p>
            I've recently just started giving talks in school's to young girls
            about getting involved in STEM careers.
          </p>
        </div>
      </section>
    );
  }
}

export default Conferences;
