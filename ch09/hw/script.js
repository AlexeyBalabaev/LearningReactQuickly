class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    };
  }

  componentDidMount() {
    fetch('./menus.json').then(response => {
      return response.json();
    }).then(menus => {
      this.setState({
        menus: menus
      });
    });
  }

  render() {
    return React.createElement(
      'div',
      null,
      this.state.menus.map((v, i) => {
        return React.createElement(
          'div',
          { key: i, className: 'menu-elem' },
          React.createElement(Link, { label: v })
        );
      })
    );
  }
}

class Link extends React.Component {
  render() {
    const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');

    return React.createElement(
      'a',
      { href: url },
      this.props.label
    );
  }
}

ReactDOM.render(React.createElement(Menu, null), document.getElementById('menu'));
