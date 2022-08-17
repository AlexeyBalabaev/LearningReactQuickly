class Mouse extends React.Component {
  handleMouseOverCapture(event) {
    console.log('mouse over on capture event');
    console.dir(event, this);
  }

  handleMouseOver(event) {
    console.log('mouse over on bubbling event');
    console.dir(event, this);
  }

  render() {
    return <div>
      <div
        style={{border: '1px solid red'}}
        onMouseOverCapture={this.handleMouseOverCapture.bind(this)}
        onMouseOver={this.handleMouseOver.bind(this)} >
          Open DevTools and move your mouse cursor over here
        </div>
    </div>
  }
}