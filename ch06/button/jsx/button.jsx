class ButtonBlock extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleSave(event) {
    console.log(this, event)
  }

  handleSend(event) {
    console.log(this, event);
  }

  render() {
    return (
      <div className="btn-wrap">
        {/* <button onClick={((event)=>{console.log(this, event)})}>Save</button> */}
        <button onClick={this.handleSave} className="first-btn">Save</button>
        <button onClick={this.handleSend}>Send</button>
      </div>
    )
  }
}