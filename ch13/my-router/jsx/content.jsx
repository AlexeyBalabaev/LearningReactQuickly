const React = require('react');
const {Link} = require('react-router');

class Content extends React.Component {
  render() {
    return(
      <div>
        <h1>The main title of this site</h1>
        <div className='navbar navbar-default'>
          <ul className='nav nav-pills navbar-nav'>
            <li className={(this.context.router.isActive('/about')) ? 'active' : ''}>
              <Link to="/about" activeClassName="active">
                Avout
              </Link>
            </li>
            <li className={(this.context.router.isActive('/posts')) ? 'active' : ''}>
              <Link to="/posts" activeClassName="active">
                Blog
              </Link>
            </li>
            <li className={(this.context.router.isActive('/contact')) ? 'active' : ''}>
              <Link to="/contact" activeClassName="active">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/login" activeClassName="active">
                Login
              </Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}

Content.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = Content;