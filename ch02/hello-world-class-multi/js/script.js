let h1 = React.createElement('h1', null, 'Hello world!');
let descr = React.createElement('p', null, 'Typical description...');
let mainLink = React.createElement('a', {href: '#'}, 'Typical link');

class HelloWorld extends React.Component {
  render() {
    return React.createElement('div', null, h1, h1)
  }
};

class HelloWorld2 extends React.Component {
  render() {
    return React.createElement(
      'h1',
      this.props,
      'Hello ' + this.props.frameworkName + ' world!!!'
    )
  }
};

class MainContent extends React.Component {
  render() {
    return React.createElement('div', null, descr, descr, mainLink, descr)
  }
};

ReactDOM.render(
  React.createElement(
    'div', 
    null,
    React.createElement(HelloWorld),
    React.createElement(HelloWorld),
    React.createElement(HelloWorld),
  ),
  document.getElementById('content')
);

ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement(MainContent),
    React.createElement(MainContent),
    React.createElement(MainContent),
    React.createElement(MainContent)
  ),
  document.querySelector('.content_block')
);

ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement(HelloWorld2, {
      id: 'ember',
      frameworkName: 'Ember.js',
      title: 'A framework for creating ambitious web aplications.'
    }),
    React.createElement(HelloWorld2, {
      id: 'backbone',
      frameworkName: 'Backbone.js',
      title: 'Backbone.js gives structure to web application...'
    }),
    React.createElement(HelloWorld2, {
      id: 'angular',
      frameworkName: 'Angular.js',
      title: 'Superheroic JavaScript MVW Framework'
    })
  ),
  document.querySelector('.frameworks_wrap')
)
