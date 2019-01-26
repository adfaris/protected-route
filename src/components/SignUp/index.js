import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
)

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,
    }
  }

  onSubmit = e => {

  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state

    const isInValid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email = '' ||
        username = '';

    return (
      <form onSubmit={this.onSubmit}>
        <input name='username' value={username} onChange={this.onChange} type='text' placeholder='Fullname' />
        <input name='email' value={email} onChange={this.onChange} type='text' placeholder='Email address' />
        <input name='passwordOne' value={passwordOne} onChange={this.onChange} type='password' placeholder='password' />
        <input name='passwordTwo' value={passwordTwo} onChange={this.onChange} type='password' placeholder='confirm password' />
        <button disabled={isInValid} type='submit'>Sign up</button>
        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpLink = () => (
  <p>
    Don't have account? <Link to={ROUTES.SIGN_UP}> Sign Up</Link>
  </p>
)
export default SignUpPage
export { SignUpForm, SignUpLink }