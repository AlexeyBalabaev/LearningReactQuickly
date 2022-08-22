ReactDOM.render(
  <div>
    <NewContent>
      <h2>The second element</h2>
      <p>Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, voluptatem.</p>
    </NewContent>
    <Content>
      <img src="images/azat.jpg" width="100"/>
    </Content>
    <NewContent>
      <a href="http://react.rocks" className="btn btn-primary">http://react.rocks</a>
    </NewContent>
    <NewContent>
      <a className="btn btn-danger" href="http://react.rocks">http://react.rocks</a>
      <span className="extension">New information</span>
    </NewContent>
  </div>,
  document.getElementById('new-content')
)
