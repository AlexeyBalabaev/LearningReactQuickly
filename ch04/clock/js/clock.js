class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = { currentTime: new Date().toLocaleString() };
  }
  launchClock() {
    setInterval(() => {
      console.log('Updating time...');
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }
  render() {
    console.log('Rendering Clock...');
    return React.createElement(
      'div',
      null,
      this.state.currentTime
    );
  }
}

class Clock1 extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock1();
    this.state = { currentTime1: new Date().toLocaleString() };
  }

  launchClock1() {
    setInterval(() => {
      console.log('Updating time...');
      this.setState({
        currentTime1: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    console.log('Rendering time...');
    return React.createElement(
      'div',
      null,
      this.state.currentTime1
    );
  }
}