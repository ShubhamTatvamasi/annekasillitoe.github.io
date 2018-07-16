import React, { Component } from "react";
import twitter from "../assets/twitter_logo.svg";
import linkedin from "../assets/linkedin_logo.svg";
import email from "../assets/envelope.svg";
import github from "../assets/github_logo.svg";

class Contact extends Component {
  render() {
    return (
      <section className="d-flex pt-sm-5 pt-1 pb-5 px-sm-3 px-1 justify-content-center contact">
        <div className="text-center pt-3">
          <h1 className="pb-sm-4 pb-1">Contact Me</h1>
          <p className="py-2">
              Click to view and download my CV <a href="https://docs.google.com/document/d/1htolYi06hWQchRumEet-wTy0_2TzbvHWcnZ1ZEm22zE/edit?usp=sharing" className="text-white cv-link"> here
            </a>.
          </p>
          <ul className="contact-icons pt-2">
            <li>
              <a href="http://www.twitter.com/annekasillitoe">
                <img src={twitter} className="icon" alt="Twitter icon link"/></a>
            </li>
            <li>
              <a
                href="mailto:annekasillitoe@gmail.com?Subject=Hello"
                target="_top"
              >
                <img src={email} className="icon" alt="Email icon link"/>
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com/annekasillitoe"><img src={linkedin} className="icon" alt="LinkedIn icon link"/></a>
            </li>
            <li>
              <a href="http://www.github.com/annekasillitoe">
                <img src={github} className="icon" alt="Github icon link"/></a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Contact;
