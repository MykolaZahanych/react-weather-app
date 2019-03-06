import React from "react";

export default class Forcastday extends React.Component {
 

  render() {
    const { day } = this.props;
    return (
      <div className="forcastday-container">
        <div className="image">
          <img src={day.condition.icon} alt="forecast-icon" />
        </div>
        <div className="text">{day.avgtemp_c}°</div>
        <div className="muted-text">{day.condition.text}</div>
      </div>
    );
  }
}
