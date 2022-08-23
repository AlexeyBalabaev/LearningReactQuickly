const EnhancedButton = LoadWebsite(Button);
const EnhancedLink = LoadWebsite(Link);
const EnhancedLogo = LoadWebsite(Logo);
const NewEnhancedLogo = NewLoadWebsite(NewLogo);
const NewEnhancedButton = NewLoadWebsite(NewButton);
const NewEnhancedLink = NewLoadWebsite(NewLink);

class Content extends React.Component {
  render() {
    return (
      <div>
        <EnhancedButton />
        <br />
        <br />
        <EnhancedLink />
        <br />
        <br />
        <EnhancedLogo />
        <br />
        <br />
        <iframe id="frame" src="" width="600" height="500"/>
      </div>
    )
  }
}

class NewContent extends React.Component {
  render() {
    return(
      <div className="wrapper">
        <hr />
        <NewEnhancedButton />
        <br />
        <br />
        <NewEnhancedLink />
        <br />
        <br />
        <NewEnhancedLogo />
        <br />
        <br />
        <iframe id="new-frame" src="" width="750" height="600" />
      </div>
    )
  }
}