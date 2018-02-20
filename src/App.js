import React from 'react'
import Auth from './utils/Auth'

let auth
class App extends React.Component {
  constructor(props) {
    super(props)
    auth = new Auth()
  }

  render() {
    auth.login()
    return (
      <div>
        <h1>saWelcome to React</h1>
      </div>
    )
  }
}

export default App
