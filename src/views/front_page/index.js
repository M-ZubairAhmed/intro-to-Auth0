import React from 'react'

export default class FrontPage extends React.Component {
  login = () => {
    this.props.auth.loginWithGithub()
  }

  render() {
    return (
      <div>
        <h1>Intro to Auth0</h1>
        <button onClick={this.login}>Login with GitHub</button>
      </div>
    )
  }
}
