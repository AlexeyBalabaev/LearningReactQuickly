var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const LoadWebsite = Component => {
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
      return React.createElement(Component, _extends({}, this.state, this.props));
    }
  };

  _LoadWebsite.displayName = 'EhnancedComponent';

  return _LoadWebsite;
};

const NewLoadWebsite = Component => {
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
      return React.createElement(Component, _extends({}, this.state, this.props));
    }
  }

  _NewLoadWebsite.displayName = 'NewEnhancedComponent';

  return _NewLoadWebsite;
};