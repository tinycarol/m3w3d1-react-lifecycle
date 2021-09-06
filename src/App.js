import React from "react";
import "./App.css";
import Clock from "./components/clock/Clock";
import Randog from "./components/randog/Randog";

export default class App extends React.Component {
  state = {
    showClock: true,
  };

  toggleClock = () => {
    this.setState((old) => ({ showClock: !old.showClock }));
  };

  render() {
    return (
      <div className="App">
        <Randog />
        {/* <button onClick={this.toggleClock}>Toggle clock</button>
        {this.state.showClock && <Clock />} */}
      </div>
    );
  }
}
