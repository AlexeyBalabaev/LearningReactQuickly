class Content extends React.Component {
  constructor(props) {
    super(props)
    console.log('I log, therefore I am')
  }
  componentWillMount() {
    console.log(ReactDOM.findDOMNode(this))
  }
  componentDidMount() {
    console.dir(ReactDOM.findDOMNode(this))
  }
  render() {
    console.log('Render')
    return (
      <div/>
    )
  }
}

class CheckComponentsMethods extends React.Component {
  constructor(props) {
    super(props);
    console.log('I want to check how it works by myself.')
  };

  componentWillMount() {
    console.log(ReactDOM.findDOMNode(this));
  };
  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this));
  };

  render() {
    console.log('This is the reason, why I decided to make the same example');
    return(
      <div/>
    )
  }

};
