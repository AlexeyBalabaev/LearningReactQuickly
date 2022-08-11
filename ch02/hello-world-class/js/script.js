let h1 = React.createElement('h1', null, 'Hello world!')
let p = React.createElement('p', null, "Description about our product...");

class HelloWorld extends React.Component {
  render() {
    return React.createElement('div', null, h1, h1)
  }
}

class ImportantDescription extends React.Component {
  render() {
    return React.createElement('div', null, p, p, p)
  }
}

ReactDOM.render(
  React.createElement(HelloWorld, null),
  document.getElementById('content')
)

ReactDOM.render(
  React.createElement(ImportantDescription, null),
  document.getElementById('description-wrap')
)
