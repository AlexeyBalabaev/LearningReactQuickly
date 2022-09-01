const React = require('react');

module.exports = function Post(props) {
  console.log(props);

  let post = props.route.posts.find(element => {element.slug === props.params.ig});

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
      <p><a href={post.link}>Contingue reading...</a></p>
    </div>
  )
}