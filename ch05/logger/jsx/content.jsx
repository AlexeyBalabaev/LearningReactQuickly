class Content extends React.Component {
  constructor(props) {
    super(props)
    this.launchClock()
    this.state = {
      counter: 0,
      currentTime: (new Date()).toLocaleString()
    }
  }
  launchClock() {
    setInterval(()=>{
      this.setState({
        counter: ++this.state.counter,
        currentTime: (new Date()).toLocaleString()
      })
    }, 1000)
  }
  render() {
    if (this.state.counter > 2) return <div/>
    return <Logger time={this.state.currentTime}></Logger>
  }
}

class Content1 extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock1();
    this.state = {
      counter1: 0,
      currentTime1: (new Date()).toLocaleString()
    };
  };

  launchClock1() {
    setInterval(() => {
      this.setState({
        counter1: ++this.state.counter1,
        currentTime1: (new Date()).toLocaleString()
      });
    }, 1000);
  };

  render() {
    if (this.state.counter1 > 2) return <div />;
    return <Logger1 time={this.state.currentTime1}></Logger1>;
  }
}
