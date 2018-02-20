import React from 'react'
import Auth from './utils/Auth'

let auth
class App extends React.Component {
  constructor(props) {
    super(props)
    auth = new Auth()
  }

  login=()=>{
    auth.login()
  }

  render() {
    return (
      <div>
        <h1>saWelcome to React</h1>
        <button onClick={this.login}>login</button>
      </div>
    )
  }
}

export default App
