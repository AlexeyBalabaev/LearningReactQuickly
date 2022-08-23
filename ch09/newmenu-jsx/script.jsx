class Menu extends React.Component {
  render() {
    let menus = [
      'Home',
      'About',
      'Services',
      'Portfolio',
      'Contact us',
      'Extra information'
    ];

    return(
      <div>
        {menus.map((v, i) => {
          return <div key={i} className="menu-elem"><Link label={v} /></div>
        })}
      </div>
    )
  }
  
};

class Link extends React.Component {
  render() {
    const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');

    return (
      <a href={url}>{this.props.label}</a>
    )
  }
};

ReactDOM.render(
  <Menu />,
  document.getElementById('menu')
);