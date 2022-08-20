class Content extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Button, { buttonLabel: "Start" }),
      React.createElement(Button, null),
      React.createElement(Button, null),
      React.createElement(Button, null)
    );
  }
}

class NewContent extends React.Component {
  render() {
    return React.createElement(
      "div",
      { style: { marginTop: '40px' } },
      React.createElement(NewButton, { newButtonLabel: "The first button" }),
      React.createElement(NewButton, null),
      React.createElement(NewButton, null),
      React.createElement(NewButton, null),
      React.createElement(NewButton, { newButtonLabel: "The latest button..." })
    );
  }
}