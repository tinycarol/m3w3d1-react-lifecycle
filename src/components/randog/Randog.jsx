import React from "react";
import axios from "axios";
import "./Randog.css";

export default class Randog extends React.Component {
	state = {
		dog: null
	};
	intervalId = 0;

  getDog() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
			.then((res) => {
				this.setState({ dog: res.data.message });
			})
      .catch(() => {
        console.log("Error");
      });
  }

	componentDidMount() {
		this.intervalId = setInterval(() => this.getDog(), 2000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	render() {
		if (!this.state.dog) {
			return "Loading...";
		}
    return (
      <div className="Randog">
        <img src={this.state.dog} alt="Dog" />
      </div>
    );
  }
}
