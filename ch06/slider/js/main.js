$(function() {
  let handleChange = (e, ui)=>{
    let slideEvent1 = new CustomEvent('slide', {
      detail: {ui: ui, jQueryEvent: e}
    });
    window.dispatchEvent(slideEvent1);
  }

  $('#slider').slider({
    'change': handleChange,
    'slide': handleChange
  });

  let handleMyChange = (e, ui)=>{
    let slideEvent2 = new CustomEvent('slide', {
      detail: {ui: ui, jQueryEvent: e}
    });
    window.dispatchEvent(slideEvent2);
  }

  $('#new-slider').slider({
    'change': handleMyChange,
    'slide': handleMyChange
  });
});