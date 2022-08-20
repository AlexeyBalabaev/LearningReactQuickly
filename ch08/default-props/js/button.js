class Button extends React.Component {
  render() {
    return React.createElement(
      "button",
      { className: "btn" },
      this.props.buttonLabel
    );
  }
};

class NewButton extends React.Component {
  render() {
    return React.createElement(
      "button",
      { className: "btn btn-primary" },
      this.props.newButtonLabel
    );
  }
};

Button.defaultProps = { buttonLabel: 'Submit' };
NewButton.defaultProps = { newButtonLabel: 'New default button' };