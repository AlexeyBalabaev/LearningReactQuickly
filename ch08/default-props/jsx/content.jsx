class Content extends React.Component {
  render() {
    return (
      <div>
        <Button buttonLabel="Start"/>
        <Button />
        <Button />
        <Button />
      </div>
    )
  }
}

class NewContent extends React.Component {
  render() {
    return (
      <div style={{marginTop: '40px'}}>
        <NewButton newButtonLabel="The first button" />
        <NewButton />
        <NewButton />
        <NewButton />
        <NewButton newButtonLabel="The latest button..." />
      </div>
    )
  }
}
