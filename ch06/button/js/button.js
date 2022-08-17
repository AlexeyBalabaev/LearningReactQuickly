class ButtonBlock extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleSave(event) {
    console.log(this, event);
  }

  handleSend(event) {
    console.log(this, event);
  }

  render() {
    return React.createElement(
      "div",
      { className: "btn-wrap" },
      React.createElement(
        "button",
        { onClick: this.handleSave, className: "first-btn" },
        "Save"
      ),
      React.createElement(
        "button",
        { onClick: this.handleSend },
        "Send"
      )
    );
  }
}