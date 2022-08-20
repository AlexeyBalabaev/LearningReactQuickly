class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {textbook: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({textbook: event.target.value});
  }

  render() {
    return <div>
      <input
        type="text"
        onChange={this.handleChange}
        placeholder="Eloquent TypeScript: Myth or Reality" />
      <br/>
      <span>{this.state.textbook}</span>
    </div>
  }

}

class MyExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Mr. '
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  render() {
    return (
      <input type="text" name="title" value={this.state.title} 
        onChange={this.handleTitleChange.bind(this)} />
    )
  }
}
