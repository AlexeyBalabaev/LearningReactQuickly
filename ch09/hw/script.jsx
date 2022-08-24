class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    fetch('./menus.json')
      .then((response) => {
        return response.json();
      })
      .then((menus) => {
        this.setState({
          menus:menus,
        })
      });
  }

  render() {
    return(
      <div>
        {this.state.menus.map((v,i) => {
          return <div key={i} className="menu-elem"><Link label={v} /></div>
        })}
      </div>
    )
  }
}

class Link extends React.Component {
  render() {
    const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');

    return (
      <a href={url}>{this.props.label}</a>
    )
  }
}

ReactDOM.render(
  <Menu />,
  document.getElementById('menu')
)