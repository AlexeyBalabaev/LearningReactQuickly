const LoadWebsite = (Component) => {
  class _LoadWebsite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        label: 'Run', 
        handleClick: this.handleClick.bind(this)
      };
    }

    getUrl() {
      return 'https://facebook.github.io/react/docs/top-level-api.html';
    }

    handleClick(event) {
      document.getElementById('frame').src = this.getUrl();
    }

    componentDidMount() {
      console.log(ReactDOM.findDOMNode(this));
    }

    render() {
      console.log(this.state);
      return <Component {...this.state} {...this.props} />
    }
  };

  _LoadWebsite.displayName = 'EhnancedComponent';

  return _LoadWebsite;
}

const NewLoadWebsite = (Component) => {
  class _NewLoadWebsite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        label: 'Start',
        handleClick: this.handleClick.bind(this)
      };
    }

    getUrl() {
      return 'https://facebook.github.io/react/docs/top-level-api.html';
    }
    
    handleClick() {
      document.getElementById('new-frame').src = this.getUrl();
    }

    componentDidMount() {
      console.log(ReactDOM.findDOMNode(this));
    }

    render() {
      console.log(this.state);
      return <Component {...this.state} {...this.props} />
    }
  }

  _NewLoadWebsite.displayName = 'NewEnhancedComponent';

  return _NewLoadWebsite;
}
