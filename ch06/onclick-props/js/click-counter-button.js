class ClickCounterButton extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "button",
        {
          onClick: this.props.handler,
          className: "btn btn-danger" },
        "Increase Volume (Current volume is ",
        this.props.counter,
        ")"
      )
    );
  }
}