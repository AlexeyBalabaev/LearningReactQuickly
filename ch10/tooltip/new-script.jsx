class NewTooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const {offsetTop: top, offsetLeft: left} = ReactDOM.findDOMNode(this);

    this.setState({
      opacity: !this.state.opacity,
      top,
      left
    })
  }

  render() {
    const style = {
      zIndex: (this.state.opacity) ? 10 : -10,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 20,
      left: (this.state.left || 0) - 30
    }

    return (
      <div style={{display: 'inline'}}>
        <span style={{color: 'red', 
            fontWeight: 700,
            cursor: 'pointer'
          }} 
          onMouseEnter={this.toggle} 
          onMouseOut={this.toggle}>
          {this.props.children}
        </span>
        <div className="tooltip bottom"
          style={style}
          role="tooltip">
          <div className="tooltip-arrow"></div>
          <div className="tooltip-inner">
            {this.props.text}
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <NewTooltip text="The book you're reading now">React Quickly</NewTooltip> was 
    published in 2017. It's awesome! <NewTooltip text="The description of the example!">
    The new example</NewTooltip> is just right here!
  </div>,
  document.querySelector('.new-tooltip')
)