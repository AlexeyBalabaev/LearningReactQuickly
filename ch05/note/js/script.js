let secondsLeft = 5;
let secondsCounter = 8;

let interval = setInterval(() => {
  if (secondsLeft == 0) {
    ReactDOM.render(React.createElement(
      'div',
      null,
      'Note was removed after ',
      secondsLeft,
      ' seconds.'
    ), document.getElementById('content1'));
    clearInterval(interval);
  } else {
    ReactDOM.render(React.createElement(
      'div',
      null,
      React.createElement(Note, { secondsLeft: secondsLeft })
    ), document.getElementById('content1'));
  }
  secondsLeft--;
}, 1000);

let secondInterval = setInterval(() => {
  let startingPosition = secondsCounter;

  if (secondsCounter == 0) {
    ReactDOM.render(React.createElement(
      'div',
      null,
      'Note was removed after ',
      startingPosition,
      ' seconds.'
    ), document.getElementById('content2'));
    clearInterval(secondInterval);
  } else {
    ReactDOM.render(React.createElement(
      'div',
      null,
      React.createElement(NewNote, { secondsCounter: secondsCounter })
    ), document.getElementById('content2'));
  };

  secondsCounter--;
}, 1000);