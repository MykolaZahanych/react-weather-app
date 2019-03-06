import React from "react";
import { EventEmitter } from "events";

export default class Store extends React.Component {
  constructor(props) {
    super(props);
    this.EventEmitter = new EventEmitter();

    //main app state
    this.state = {
      appName: "Weather Up"
    };
  }

  render() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        ...this.state,
        eventEmitter: this.EventEmitter
      });
    });
  }
}
