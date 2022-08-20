class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textbook: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ textbook: event.target.value });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", {
        type: "text",
        onChange: this.handleChange,
        placeholder: "Eloquent TypeScript: Myth or Reality" }),
      React.createElement("br", null),
      React.createElement(
        "span",
        null,
        this.state.textbook
      )
    );
  }

}

class MyExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Mr. '
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return React.createElement("input", { type: "text", name: "title", value: this.state.title,
      onChange: this.handleTitleChange.bind(this) });
  }
}