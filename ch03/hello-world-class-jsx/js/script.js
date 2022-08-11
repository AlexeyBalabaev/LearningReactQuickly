let helloWorldReactElement = React.createElement(
  'h1',
  null,
  'Hello world!'
);
class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      helloWorldReactElement,
      helloWorldReactElement
    );
  }
}
ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('content'));

class DateTimeNow extends React.Component {
  render() {
    let dateTimeNow = new Date().toLocaleString();

    return React.createElement(
      'span',
      null,
      `Current date and time is ${dateTimeNow}.`
    )
  }
}

ReactDOM.render(React.createElement(DateTimeNow, null), document.getElementById('content'));
