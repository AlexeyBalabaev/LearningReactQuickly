class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let menus = [
      'Home',
      'About',
      'Services',
      'Portfolio',
      'Contact us',
      'Extra information'
    ];

    return React.createElement(
      'div',
      null,
      menus.map((v, i) => {
        return React.createElement(
          'div',
          {
            key: i,
            className: "menu-elem"
          },
          React.createElement(
            Link,
            {label: v}
          )
        )
      })
    )
  }
  
};

class Link extends React.Component {
  render() {
    const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');

    return(
      React.createElement(
        'a',
        {href: url},
        this.props.label
      )
    )
  }

};

ReactDOM.render(
  React.createElement(
    Menu,
    null
  ),
  document.getElementById('menu')
);
