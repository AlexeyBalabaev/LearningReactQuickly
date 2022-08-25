class NewTimer extends React.Component {
  render() {
    if (this.props.time == 0) {
      document.getElementById('end-of-timer').play();
    }

    if (this.props.time == 0 || this.props.time == null) {
      return <div />
    }

    return <div><h3>Countdown: {this.props.time}</h3></div>
  }
}

class NewButton extends React.Component {
  startTimer(event) {
    return this.props.StartTimer(rgis.props.time)
  }

  render() {
    return (
      <button 
        type="button" 
        className="btn btn-primary" 
        onClick={() => {this.props.startTimer(this.props.time)}}>
        {this.props.time} seconds
      </button>
    )
  }
}

class NewTimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      timeLeft: null
    }
    this.startTimer = this.startTimer.bind(this)
  }

  startTimer(timeLeft) {
    clearInterval(this.state.timer);

    let timer = setInterval(() => {
      console.log('2: Inside of setInterval');
      var timeLeft = this.state.timeLeft - 1;

      if (timeLeft == 0) clearInterval(timer);
      this.setState({timeLeft: timeLeft});
    }, 1000)

    console.log('1: After setInterval');
    return this.setState({
      timer: timer,
      timeLeft: timeLeft
    })
  }

  render() {
    return (
      <div className="row-fluid">
        <h2>New timer</h2>
        <div className="btn-group" role="group">
          <NewButton time="5" startTimer={this.startTimer} />
          <NewButton time="10" startTimer={this.startTimer} />
          <NewButton time="15" startTimer={this.startTimer} />
          <NewButton time="20" startTimer={this.startTimer} />
        </div>
        <NewTimer time={this.state.timeLeft} />
        <audio id="end-of-timer" src="flute_c_long_01.wav" preload="auto"></audio>
      </div>
    )
  }
}

ReactDOM.render(
  <NewTimerWrapper />,
  document.querySelector('.new-timer-app')
)