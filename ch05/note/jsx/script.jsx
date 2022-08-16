let secondsLeft = 5;
let secondsCounter = 8;

let interval = setInterval(()=>{
  if (secondsLeft == 0) {
    ReactDOM.render(
      <div>
        Note was removed after {secondsLeft} seconds.
      </div>,
      document.getElementById('content1')
    )
    clearInterval(interval)
  } else {
    ReactDOM.render(
      <div>
        <Note secondsLeft={secondsLeft}/>
      </div>,
      document.getElementById('content1')
    )
  }
  secondsLeft--
}, 1000);

let secondInterval = setInterval(() => {
  let startingPosition = secondsCounter;

  if (secondsCounter == 0) {
    ReactDOM.render(
      <div>
        Note was removed after {startingPosition} seconds.
      </div>,
      document.getElementById('content2')
    );
    clearInterval(secondInterval)
  } else {
    ReactDOM.render(
      <div>
        <NewNote secondsCounter={secondsCounter} />
      </div>,
      document.getElementById('content2')
    )
  };

  secondsCounter--
}, 1000);

