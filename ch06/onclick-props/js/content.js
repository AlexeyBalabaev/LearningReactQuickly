class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleAnotherClick = this.handleAnotherClick.bind(this);
    this.state = {
      counter: 0,
      anotherCounter: 4
    };
  }

  handleClick(event) {
    this.setState({ counter: ++this.state.counter });
  }

  handleAnotherClick(event) {
    this.setState({ anotherCounter: ++this.state.anotherCounter });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(ClickCounterButton, {
        counter: this.state.counter,
        handler: this.handleClick }),
      React.createElement(ClickCounterButton, {
        counter: this.state.anotherCounter,
        handler: this.handleAnotherClick
      })
    );
  }
}