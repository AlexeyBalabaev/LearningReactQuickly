class Content extends React.Component {
  render() {
    let number = 1;

    return (
      <div>
        <Button buttonLabel="Start"/>
        <Button />
        <Button title={number}/>
        <Button />
        <Button email="not-a-valid-email"/>
        <Button email="hi@azat.co"/>
      </div>
    )
  }
}

class NewContent extends React.Component {
  render() {
    let number = 3;
    let text = 'Title!'

    return (
      <div style={{marginTop: '40px'}}>
        <Button buttonLabel="First button" />
        <Button title={text} />
        <Button title='New title' />
        <Button buttonLabel="Middle button" />
        <Button email="unvalid@email" />
        <Button email="valid@email.com" />
        <Button title={number} buttonLabel="Last button" />
      </div>
    )
  }
}
