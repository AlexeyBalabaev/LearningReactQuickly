class Button extends React.Component {
  render() {
    return <button
      className="btn btn-primary"
      onClick={this.props.handleClick}>
      {this.props.label}
    </button>
  }
}

class Link extends React.Component {
  render() {
    return <a onClick={this.props.handleClick} href="#">{this.props.label}</a>
  }
}

class Logo extends React.Component {
  render() {
    return <img onClick={this.props.handleClick} width="40" src="logo.png" href="#"/>
  }
}

// Logo = (props)=>{
//   return <img onClick={props.handleClick} width="40" src="logo.png" href="#"/>
// }

const NewButton = (props) => {
  return (
    <button className="btn btn-danger" onClick={props.handleClick}>
      {props.label}
    </button>
  )
}

const NewLogo = (props) => {
  return <img onClick={props.handleClick} width="40" src="logo.png" href="#" />
}

const NewLink = (props) => {
  return <a onClick={props.handleClick} href="#">{props.label}</a>
}
