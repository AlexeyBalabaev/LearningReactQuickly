class MySliderButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sliderCount: 0 };
    this.handleSlide = this.handleSlide.bind(this);
    this.handleMyChange = this.handleMyChange.bind(this);
  }

  handleSlide(event, ui2) {
    this.setState({ sliderCount: ui2.value });
  }

  handleMyChange(value) {
    return () => {
      $('#new-slider').slider('value', this.state.sliderCount + value);
      this.setState({ sliderCount: this.state.sliderCount + value });
    };
  }

  componentDidMount() {
    $('#new-slider').on('slide', this.handleSlide);
  }

  componentWillUnmount() {
    $('#new-slider').off('slide', this.handleSlide);
  }

  render() {
    return React.createElement(
      'div',
      { className: 'btn_wrap' },
      React.createElement(
        'button',
        { disabled: this.state.sliderCount < 1 ? true : false,
          className: 'btn btn-primary',
          onClick: this.handleMyChange(-1) },
        '1 less (',
        this.state.sliderCount - 1,
        ')'
      ),
      React.createElement(
        'button',
        { disabled: this.state.sliderCount > 99 ? true : false,
          className: 'btn btn-primary',
          onClick: this.handleMyChange(1) },
        '1 more (',
        this.state.sliderCount + 1,
        ')'
      )
    );
  }
}