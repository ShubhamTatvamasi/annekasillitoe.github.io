import React, { Component } from "react";

class Stars extends Component {
  displayStars = (index) => {
    return(
      this.props.className.map((className) => {
        return(
          <i key={index} className={`fa + ${className}`} aria-hidden="true" />
        )
      })
    )
  };

  render() {
    const { skill } = this.props;
    return (
      <div>
        <p className="d-inline-block">{skill}</p>
        <div className="d-inline-block pl-3">
        {this.displayStars()}
        </div>
      </div>
    );
  }
}

export default Stars;
