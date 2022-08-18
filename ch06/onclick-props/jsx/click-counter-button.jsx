class ClickCounterButton extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <button
          onClick={this.props.handler}
          className="btn btn-danger">
          Increase Volume (Current volume is {this.props.counter})
        </button>
      </div>
    )
     
  }
}