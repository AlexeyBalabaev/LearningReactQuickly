class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {opacity: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseInteraction = this.handleMouseInteraction.bind(this);
  }

  handleClick() {
    if (!this.props.allowToggleWithClick) {
      return false;
    }

    this.toggle();
  }

  handleMouseInteraction() {
    if (!this.props.allowToggleWithMouseInteraction) {
      return false;
    }

    this.toggle();
  }

  toggle() {
    const tooltipNode = ReactDOM.findDOMNode(this);
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft,
    })
  }

  render() {
    const top = this.state.top || 0;
    const style = {
      zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: top + (this.props.positionWhereShowText === 'bottom' ? +20 : -60),
      left: (this.state.left || 0) - 30
    };

    const toolTipClasses = 'tooltip ' + this.props.positionWhereShowText;

    return (
      <div style={{display: 'inline'}}>
        <span style={{color: 'blue'}} onClick={this.handleClick} onMouseEnter={this.handleMouseInteraction} onMouseOut={this.handleMouseInteraction}>
          {this.props.children}
        </span>
        <div className={toolTipClasses} style={style} role="tooltip">
          <div className="tooltip-arrow"></div>
          <div className="tooltip-inner">
            {this.props.text}
          </div>
        </div>
      </div>
    )
  }
}

Tooltip.propTypes = {
  allowToggleWithClick: PropTypes.bool,
  allowToggleWithMouseInteraction: PropTypes.bool,
  positionWhereShowText: PropTypes.oneOf(['bottom', 'top']),
}

Tooltip.defaultProps = {
  allowToggleWithClick: false,
  allowToggleWithMouseInteraction: true,
  positionWhereShowText: 'bottom',
}

ReactDOM.render(<div>
  <Tooltip text="Master Express.js-The Node.js Framework For Your Web Development" allowToggleWithClick={true} allowToggleWithMouseInteraction={false} positionWhereShowText="top">Pro Express.js</Tooltip> was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress
    after <Tooltip text="Practical Node.js: Building Real-World Scalable Web Apps">Practical Node.js</Tooltip>.
    ...
    The main focus of this post is to compare the four Node.js/Io.js frameworks: <Tooltip text="HTTP API server">Hapi</Tooltip>, <Tooltip text="Release the Kraken!">Kraken</Tooltip>, <Tooltip text="Sail away">Sails.js</Tooltip> and <Tooltip text="IBM of frameworks">Loopback</Tooltip>. There are many other frameworks to consider, but I had to draw the line somewhere.
  </div>,
  document.getElementById('tooltip'))
