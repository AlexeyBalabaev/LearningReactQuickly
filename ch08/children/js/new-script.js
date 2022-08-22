ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(
    NewContent,
    null,
    React.createElement(
      "h2",
      null,
      "The second element"
    ),
    React.createElement(
      "p",
      null,
      "Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, voluptatem."
    )
  ),
  React.createElement(
    Content,
    null,
    React.createElement("img", { src: "images/azat.jpg", width: "100" })
  ),
  React.createElement(
    NewContent,
    null,
    React.createElement(
      "a",
      { href: "http://react.rocks", className: "btn btn-primary" },
      "http://react.rocks"
    )
  ),
  React.createElement(
    NewContent,
    null,
    React.createElement(
      "a",
      { className: "btn btn-danger", href: "http://react.rocks" },
      "http://react.rocks"
    ),
    React.createElement(
      "span",
      { className: "extension" },
      "New information"
    )
  )
), document.getElementById('new-content'));