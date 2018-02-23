import React from 'react'
import { Link } from 'react-router-dom'

export default class FrontPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Intro to Auth0</h1>
        {this.props.auth.isAuthenticated() ? (
          <button onClick={() => this.props.auth.logout()}>logout</button>
        ) : (
          <Link to="/login">
            <button>login</button>
          </Link>
        )}
      </div>
    )
  }
}
