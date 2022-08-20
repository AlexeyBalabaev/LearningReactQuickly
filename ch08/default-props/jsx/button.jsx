class Button extends React.Component {
  render() {
    return <button className="btn" >{this.props.buttonLabel}</button>
  }
};

class NewButton extends React.Component {
  render() {
    return <button className="btn btn-primary">{this.props.newButtonLabel}</button>
  }
};

Button.defaultProps = {buttonLabel: 'Submit'};
NewButton.defaultProps = {newButtonLabel: 'New default button'};