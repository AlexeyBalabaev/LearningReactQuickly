class Note extends React.Component {
  confirmLeave(e) {
    let confirmationMessage = 'Do you really want to close?'
    e.returnValue = confirmationMessage     // Gecko, Trident, Chrome 34+
    return confirmationMessage              // Gecko, WebKit, Chrome <34
  }
  componentDidMount() {
    console.log('Attaching confirmLeave event listener for beforeunload')
    window.addEventListener('beforeunload', this.confirmLeave)
  }
  componentWillUnmount() {
    console.log('Removing confirmLeave event listener for beforeunload')
    window.removeEventListener('beforeunload', this.confirmLeave)
  }
  render() {
    console.log('Render')
    return <div>Here will be our input field for notes (parent will remove in {this.props.secondsLeft} seconds)</div>
  }
}

class NewNote extends React.Component {
  agreeToLeave(e) {
    let leaveMessage = 'Do you really want to close?';
    e.returnValue = leaveMessage;
    return leaveMessage;
  }

  componentDidMount() {
    console.log('Attaching agreeToLeave event listener for beforeunload...');
    window.addEventListener('beforeunload', this.agreeToLeave);
  }

  componentWillUnmount() {
    console.log('Removing agreeToLeave event listener for beforeunload...');
    window.removeEventListener('beforeunload', this.agreeToLeave);
  }

  render() {
    console.log('Rendering...');
    return (
      <div>
        Here will be our input field for notes (parent will remove in {this.props.secondsCounter} seconds.)
      </div>
    )
  }
}