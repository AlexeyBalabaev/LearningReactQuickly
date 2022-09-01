const React = require('react');

module.exports = function Login() {
  return (
    <div>
      <h3>Log In</h3>
      <input type="text" placeholder='email' className='form-control'></input>
      <input type="text" placeholder='password' className='form-control'></input>
      <button className='btn btn-primary'>LogIn</button>
    </div>
  )
}