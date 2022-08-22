class Content extends React.Component {
  render() {
    let number = 1;

    return React.createElement(
      "div",
      null,
      React.createElement(Button, { buttonLabel: "Start" }),
      React.createElement(Button, null),
      React.createElement(Button, { title: number }),
      React.createElement(Button, null),
      React.createElement(Button, { email: "not-a-valid-email" }),
      React.createElement(Button, { email: "hi@azat.co" })
    );
  }
}

class NewContent extends React.Component {
  render() {
    let number = 3;
    let text = 'Title!';

    return React.createElement(
      "div",
      { style: { marginTop: '40px' } },
      React.createElement(Button, { buttonLabel: "First button" }),
      React.createElement(Button, { title: text }),
      React.createElement(Button, { title: "New title" }),
      React.createElement(Button, { buttonLabel: "Middle button" }),
      React.createElement(Button, { email: "unvalid@email" }),
      React.createElement(Button, { email: "valid@email.com" }),
      React.createElement(Button, { title: number, buttonLabel: "Last button" })
    );
  }
}