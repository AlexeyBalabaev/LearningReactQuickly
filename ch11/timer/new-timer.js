class NewTimer extends React.Component {
  render() {
    if (this.props.time == 0) {
      document.getElementById('end-of-timer').play();
    }

    if (this.props.time == 0 || this.props.time == null) {
      return React.createElement("div", null);
    }

    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "Countdown: ",
        this.props.time
      )
    );
  }
}

class NewButton extends React.Component {
  startTimer(event) {
    return this.props.StartTimer(rgis.props.time);
  }

  render() {
    return React.createElement(
      "button",
      {
        type: "button",
        className: "btn btn-primary",
        onClick: () => {
          this.props.startTimer(this.props.time);
        } },
      this.props.time,
      " seconds"
    );
  }
}

class NewTimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      timeLeft: null
    };
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer(timeLeft) {
    clearInterval(this.state.timer);

    let timer = setInterval(() => {
      console.log('2: Inside of setInterval');
      var timeLeft = this.state.timeLeft - 1;

      if (timeLeft == 0) clearInterval(timer);
      this.setState({ timeLeft: timeLeft });
    }, 1000);

    console.log('1: After setInterval');
    return this.setState({
      timer: timer,
      timeLeft: timeLeft
    });
  }

  render() {
    return React.createElement(
      "div",
      { className: "row-fluid" },
      React.createElement(
        "h2",
        null,
        "New timer"
      ),
      React.createElement(
        "div",
        { className: "btn-group", role: "group" },
        React.createElement(NewButton, { time: "5", startTimer: this.startTimer }),
        React.createElement(NewButton, { time: "10", startTimer: this.startTimer }),
        React.createElement(NewButton, { time: "15", startTimer: this.startTimer }),
        React.createElement(NewButton, { time: "20", startTimer: this.startTimer })
      ),
      React.createElement(NewTimer, { time: this.state.timeLeft }),
      React.createElement("audio", { id: "end-of-timer", src: "flute_c_long_01.wav", preload: "auto" })
    );
  }
}

ReactDOM.render(React.createElement(NewTimerWrapper, null), document.querySelector('.new-timer-app'));
