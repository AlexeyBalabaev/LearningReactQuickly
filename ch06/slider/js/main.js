$(function() {
  let handleChange = (e, ui)=>{
    let slideEvent = new CustomEvent('slide', {
      detail: {ui1: ui, jQueryEvent: e}
    });
    window.dispatchEvent(slideEvent);
  }

  $('#slider').slider({
    'change': handleChange,
    'slide': handleChange
  });

  let handleMyChange = (e, ui)=>{
    let slideEvent = new CustomEvent('slide', {
      detail: {ui2: ui, jQueryEvent: e}
    });
    window.dispatchEvent(slideEvent);
  }

  $('#new-slider').slider({
    'change': handleMyChange,
    'slide': handleMyChange
  });
});