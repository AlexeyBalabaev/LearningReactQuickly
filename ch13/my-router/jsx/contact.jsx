const React = require('react');

module.exports = function Contact(props) {
  // setTimeout(() => {props.router.push('about')}, 1000);

  return (
    <div>
      <h2>Contact Us</h2>
      <input type="text" placeholder="your email" className="form-control"></input>
      <textarea type="text" placeholder="your message" className="form-control"></textarea>
      <button className="btn btn-primary">Send</button>
    </div>
  )
}
