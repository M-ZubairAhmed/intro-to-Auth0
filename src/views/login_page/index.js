import React from 'react'
import { Link } from 'react-router-dom'

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  loginWithEmailPassword = e => {
    e.preventDefault()
    console.log(this.state.email, this.state.password)
    this.props.auth.loginWithEmailPass(this.state.email, this.state.password)
  }

  loginWithGithub = () => {
    console.log('logging with github')
    this.props.auth.loginWithGithub()
  }

  render() {
    return (
      <div>
        <Link to="/">
          <button>Go to home </button>
        </Link>
        <p>social logins</p>
        <button onClick={this.loginWithGithub}>Login with github</button>
        <p>Or</p>
        <p>traditional logins</p>
        <form onSubmit={this.loginWithEmailPassword}>
          <input
            placeholder="Email address"
            type="email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            placeholder="password"
            type="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button>login</button>
        </form>
      </div>
    )
  }
}
