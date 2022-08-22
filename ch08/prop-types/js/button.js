class Button extends React.Component {
  render() {
    return React.createElement(
      "button",
      { className: "btn" },
      this.props.buttonLabel
    );
  }
}

class NewButton extends React.Component {
  render() {
    return React.createElement(
      "button",
      { className: "btn" },
      this.props.buttonLabel
    );
  }
}

Button.defaultProps = { buttonLabel: 'Submit' };

NewButton.defaultProps = {
  buttonlabel: 'Default Button'
};

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  title: PropTypes.string,
  email(props, propName, componentName) {
    let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!emailRegularExpression.test(props[propName])) {
      return new Error('Email validation failed!');
    }
  }
};

NewButton.propTypes = {
  handler: PropTypes.func.isRequired,
  title: PropTypes.string,
  email(props, propName, newComponentName) {
    let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!emailRegularExpression.test(props[propName])) {
      return new Error('Email validation failed!');
    }
  }
};