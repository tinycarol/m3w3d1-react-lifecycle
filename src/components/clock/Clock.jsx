import React from "react";
import "./Clock.css";

const padLeft = (number, size = 2) => {
  return number.toString().padStart(size, "0");
};

export default class Clock extends React.Component {
  state = {
    time: new Date(),
	};
	intervalId = 0;

  getCurrentTime() {
    return `${padLeft(this.state.time.getHours())}:${padLeft(
      this.state.time.getMinutes()
    )}:${padLeft(this.state.time.getSeconds())}.${padLeft(
      this.state.time.getMilliseconds(),
      3
    )}`;
  }

  updateTime() {
    this.setState({ time: new Date() });
  }

  componentDidUpdate() {
    /*  setTimeout(() => this.updateTime(), 1); */
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.updateTime(), 1);
    /*  setTimeout(() => this.updateTime(), 1); */
  }

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

  render() {
    return <div className="Clock">{this.getCurrentTime()}</div>;
  }
}
