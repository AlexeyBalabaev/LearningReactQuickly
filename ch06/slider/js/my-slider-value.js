class MySliderValue extends React.Component {
  constructor(props) {
    super(props);
    this.handleMySlide = this.handleMySlide.bind(this);
    this.state = { MySliderValue: 0 };
  }

  handleMySlide(event) {
    this.setState({ MySliderValue: event.detail.ui2.value });
  }

  componentDidMount() {
    window.addEventListener('slide', this.handleMySlide);
  }

  componentWillUnmount() {
    window.removeEventListener('slide', this.handleMySlide);
  }

  render() {
    return React.createElement(
      'div',
      { className: '' },
      'Value: ',
      this.state.MySliderValue
    );
  }
}