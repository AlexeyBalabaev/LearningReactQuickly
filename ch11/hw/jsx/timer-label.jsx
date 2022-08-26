const Timer = (props) => {
  const min = Math.ceil(props.timeLeft / 60) - 1;
  const sec = (props.timeLeft - min * 60) - 1;

  if (props.timeLeft == 0) {
    const timerEndedEvent = new CustomEvent('timerEnded', {});
    dispatchEvent(timerEndedEvent);
  }

  if (props.timeLeft == null || props.timeLeft == 0) {
    return <div />
  }

  return <div><h1>Countdown: {min}:{(sec < 10) ? '0': ''}{sec}</h1></div>
}