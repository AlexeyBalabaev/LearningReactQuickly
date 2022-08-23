class Button extends React.Component {
  render() {
    return React.createElement(
      "button",
      {
        className: "btn btn-primary",
        onClick: this.props.handleClick },
      this.props.label
    );
  }
}

class Link extends React.Component {
  render() {
    return React.createElement(
      "a",
      { onClick: this.props.handleClick, href: "#" },
      this.props.label
    );
  }
}

class Logo extends React.Component {
  render() {
    return React.createElement("img", { onClick: this.props.handleClick, width: "40", src: "logo.png", href: "#" });
  }
}

// Logo = (props)=>{
//   return <img onClick={props.handleClick} width="40" src="logo.png" href="#"/>
// }

const NewButton = props => {
  return React.createElement(
    "button",
    { className: "btn btn-danger", onClick: props.handleClick },
    props.label
  );
};

const NewLogo = props => {
  return React.createElement("img", { onClick: props.handleClick, width: "40", src: "logo.png", href: "#" });
};

const NewLink = props => {
  return React.createElement(
    "a",
    { onClick: props.handleClick, href: "#" },
    props.label
  );
};