import React from 'react'

class App extends React.Component {
  login = () => {
    // auth.loginWithGithub()
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

export default App
