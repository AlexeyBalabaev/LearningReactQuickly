let h1 = React.createElement('h1', null, "Hello World!");

ReactDOM.render(
  h1,
  document.getElementById('content1')
);

ReactDOM.render(
  React.createElement('p', null, 'Typical description.'),
  document.getElementById('content2')
)

ReactDOM.render(
  React.createElement('button', null, 'This is a perfect button!'),
  document.querySelector('.button_wrapper')
)

let link = React.createElement('a',
  {href: '#'},
  'The link with "#"'
)

ReactDOM.render(
  link,
  document.querySelector('.link_wrapper')
);

let h2 = React.createElement('h2', null, 'The second heading');

ReactDOM.render(
  React.createElement('div', null, h2, h2, h2),
  document.querySelector('.wrapper')
)
