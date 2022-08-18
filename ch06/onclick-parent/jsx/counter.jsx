class Counter extends React.Component {
  render() {
    return (
      <span className={this.props.elemClass}>Clicked {this.props.value} times.</span>
    )
  }
}