class Mouse extends React.Component {
  handleMouseOver(event) {
    console.log('mouse is over with event');
    console.dir(event);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        {
          style: { border: '1px solid red' },
          onMouseOver: this.handleMouseOver.bind(this) },
        'Open DevTools and move your mouse cursor over here'
      )
    );
  }
}