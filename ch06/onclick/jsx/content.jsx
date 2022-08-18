class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      siblingCounter: 7
    };
  }

  handleClick(event) {
    this.setState({counter: ++this.state.counter});
  }

  handleSiblingClick(event) {
    this.setState({siblingCounter: ++this.state.siblingCounter});
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick.bind(this)}
          className="btn btn-primary">
          Don't click me {this.state.counter} times!
        </button>
        <button
          onClick={this.handleSiblingClick.bind(this)}
          className="btn btn=primary"
          style={{marginLeft: '40px', color: '#000'}}>
          Another button with another start counter, bit now it's: {this.state.siblingCounter}
        </button>
      </div>
    )
  }
}