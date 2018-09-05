import React from 'react'
import config from './config/config'

import './styles/Login.css'

const Login = () => {
  let loginEndpoint = null;
  if (process.env.NODE_ENV === 'development') {
    loginEndpoint = config.development.loginEndpoint;
  } else {
    loginEndpoint = config.production.loginEndpoint;
  }

  return (
    <div id="login">
      <h1>Staff Only</h1>
      <form action={loginEndpoint} method='post' id="login-form">
        <input type="text" name="username" placeholder="username"/>
        <input type="text" name="password" placeholder="password"/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Login
