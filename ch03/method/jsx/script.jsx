class Content extends React.Component {
  getUrl() {
    return 'http://webapplog.com'
  }
  render() {
    return (
      <div>
        <p>Your REST API URL is: <a href={this.getUrl()}>{this.getUrl()}</a></p>
      </div>
    )
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById('content1')
)

class MyLink extends React.Component {
  getMyUrl() {
    return 'https://github.com/';
  };

  getInformation() {
    return 'Typical description with a lot of text in it...';
  };

  render() {
    return (
      <div>
        <p>The link to github: <a href={this.getUrl()}>{this.getUrl()}</a></p>
        <p>{this.getInformation()}</p>
      </div>
    )
  }
}
