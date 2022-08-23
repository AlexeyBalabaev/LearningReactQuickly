const EnhancedButton = LoadWebsite(Button);
const EnhancedLink = LoadWebsite(Link);
const EnhancedLogo = LoadWebsite(Logo);
const NewEnhancedLogo = NewLoadWebsite(NewLogo);
const NewEnhancedButton = NewLoadWebsite(NewButton);
const NewEnhancedLink = NewLoadWebsite(NewLink);

class Content extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(EnhancedButton, null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(EnhancedLink, null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(EnhancedLogo, null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement("iframe", { id: "frame", src: "", width: "600", height: "500" })
    );
  }
}

class NewContent extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement("hr", null),
      React.createElement(NewEnhancedButton, null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(NewEnhancedLink, null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(NewEnhancedLogo, null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement("iframe", { id: "new-frame", src: "", width: "750", height: "600" })
    );
  }
}