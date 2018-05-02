import React, { Component } from 'react';

class EleUpdation extends Component {
  constructor() {
    super();

    this.state = { time: new Date().toLocaleTimeString(), score: 1, };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);

    setInterval(() => {
      this.setState({
        score: this.state.score + 1,
      });
    }, 300);
  }

  render() {
    const { time, score } = this.state;

    return (
        <section className="info-panel">
          <h2>Update React Elements Dynamically</h2>
          Current Time: {time}
          <i className="right">Your Trainer's coolness level is: <strong>{score}</strong></i>
        </section>
    );
  };

}

export default EleUpdation;
