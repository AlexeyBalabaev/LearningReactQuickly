class NewTooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: false
    };
    this.handleClickToggle = this.handleClickToggle.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleClickToggle() {
    if (!this.props.allowToggleClick) {
      return false;
    }

    this.toggle();
  }

  handleMouseMove() {
    if (!this.props.allowMouseMove) {
      return false;
    }

    this.toggle();
  }

  toggle() {
    const tooltipNode = ReactDOM.findDOMNode(this);

    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft
    });
  }

  render() {
    const top = this.state.top || 0;
    const style = {
      zIndex: this.state.opacity ? 5 : -5,
      opacity: +this.state.opacity,
      top: top + (this.props.positionText === 'bottom' ? +20 : -60),
      left: (this.state.left || 0) - 30
    };
    const tooltipClasses = 'tooltip ' + this.props.positionText;

    return React.createElement(
      'div',
      { style: { display: 'inline' } },
      React.createElement(
        'span',
        { style: { color: 'red', fontWeight: 700 },
          onClick: this.handleClickToggle,
          onMouseEnter: this.handleMouseMove,
          onMouseOut: this.handleMouseMove },
        this.props.children
      ),
      React.createElement(
        'div',
        { className: tooltipClasses, style: style, role: 'tooiltip' },
        React.createElement('div', { className: 'tooltip-arrow' }),
        React.createElement(
          'div',
          { className: 'tooltip-inner' },
          this.props.text
        )
      )
    );
  }

}

NewTooltip.propTypes = {
  allowToggleClick: PropTypes.bool,
  allowMouseMove: PropTypes.bool,
  positionText: PropTypes.oneOf(['bottom', 'top'])
};

NewTooltip.defaultProps = {
  allowToggleClick: false,
  allowMouseMove: true,
  positionText: 'bottom'
};

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(
    NewTooltip,
    { text: 'Master Express.js-The Node.js Framework For Your Web Development',
      allowToggleClick: true, allowMouseMove: false,
      positionText: 'bottom' },
    'Pro Express.js'
  ),
  ' was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress after ',
  React.createElement(
    NewTooltip,
    { text: 'Practical Node.js: Building Real-World Scalable Web Apps' },
    'Practical Node.js'
  ),
  '. ... The main focus of this post is to compare the four Node.js/Io.js frameworks:',
  React.createElement(
    NewTooltip,
    { text: 'HTTP API server' },
    'Hapi'
  ),
  ', ',
  React.createElement(
    NewTooltip,
    { text: 'Release the \r Kraken!' },
    'Kraken'
  ),
  ', ',
  React.createElement(
    NewTooltip,
    { text: 'Sail away' },
    'Sails.js'
  ),
  ' and',
  React.createElement(
    NewTooltip,
    { text: 'IBM of frameworks' },
    'Loopback'
  ),
  '. There are many other frameworks to consider, but I had to draw the line somewhere.'
), document.getElementById('tooltip'));
