let helloWorldReactElement = <h1>Hello world!</h1>
class HelloWorld extends React.Component {
  render() {
    return <div>
      {helloWorldReactElement}
      {helloWorldReactElement}
    </div>
  }
}
ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('content')
)

// the example about date and time on JSX
class DateTimeNow extends React.Component {
  render() {
    let dateTimeNowJSX = new Date().toLocaleString()

    return <span>Current date and time is {dateTimeNowJSX}.</span>
  }
}

ReactDOM.render(
  <DateTimeNow/>,
  document.getElementById('content')
);

// Component for checking profiles
class ProfileLink extends React.Component {
  render() {
    return (
      <a href={this.props.url} 
        title={this.props.label} 
        target="_blank">Profile
      </a>
    )
  }
}

ReactDOM.render(
  <ProfileLink url='/users/alex' label='Profile for Alex' />,
  document.getElementById('content')
)
