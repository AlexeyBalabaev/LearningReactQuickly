class Counter extends React.Component {
  render() {
    return React.createElement(
      "span",
      { className: this.props.elemClass },
      "Clicked ",
      this.props.value,
      " times."
    );
  }
}