import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Auth from './utils/Auth'
import CallbackPage from './views/callback_page'
import FrontPage from './views/front_page'
import SecretPage from './views/secret_page'

const htmlNode = document.getElementById('root')
const auth = new Auth()

const handleAuthentication = props => {
  auth.handleCallbackAuthentication(props)
}

ReactDOM.render(
  <Router>
    <div>
      <Route
        path="/"
        exact
        render={props => <FrontPage auth={auth} {...props} />}
      />
      <Route path="/secret" render={props => <SecretPage auth={auth} />} />
      <Route
        path="/callback"
        render={props => {
          handleAuthentication(props)
          return <CallbackPage {...props} />
        }}
      />
    </div>
  </Router>,
  htmlNode,
)
