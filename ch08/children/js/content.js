class Content extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "content" },
      this.props.children
    );
  }
}

class NewContent extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "content" },
      this.props.children
    );
  }
}