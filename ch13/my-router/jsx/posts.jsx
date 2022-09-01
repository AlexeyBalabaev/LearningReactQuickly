const React = require('react');
const {Link} = require('react-router');

module.exports = function Posts(props) {
  return (
    <div>
      <h4>Posts</h4>
      <ol>
        {props.route.posts.map((post, index) => {
          return <li key={post.slug}><Link to={`/posts/${post.slug}`}>{post.title}</Link></li>
        })}
      </ol>
    </div>
  )
}