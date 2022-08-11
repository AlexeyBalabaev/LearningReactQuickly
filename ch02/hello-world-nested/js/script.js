let h1 = React.createElement('h1', null, 'Hello world!!!')
ReactDOM.render(
  React.createElement('div', null, h1, h1),
  document.getElementById('content')
)

class HelloWorld extends React.Component {
  render() {
    console.log(Object.isFrozen(this.props));
    return React.createElement('div', null, h1, h1);
  }
}

ReactDOM.render(
  React.createElement(HelloWorld, null),
  document.querySelector('.frozen-check')
)