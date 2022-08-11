class Content extends React.Component {
  getUrl() {
    return 'http://webapplog.com';
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Your REST API URL is: ',
        React.createElement(
          'a',
          { href: this.getUrl() },
          this.getUrl()
        )
      )
    );
  }
}

ReactDOM.render(
  React.createElement(Content, null), 
  document.getElementById('content1')
);

class MyLink extends React.Component {
  getMyUrl() {
    return 'https://github.com/';
  }

  getInformation() {
    return 'Typical description with a lot of text in it...';
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'The link to github: ',
        React.createElement(
          'a',
          { href: this.getMyUrl() },
          this.getMyUrl()
        )
      ),
      React.createElement(
        'p',
        null,
        this.getInformation()
      )
    )
  }
};

ReactDOM.render(
  React.createElement(MyLink, null),
  document.getElementById('content2')
);
