import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Auth from './utils/Auth'

import FrontPage from './views/front_page'
import LoginPage from './views/login_page'
import CallbackPage from './views/callback_page'
import SecretPage from './views/secret_page'
import PartialSecretPage from './views/partial_secret_page'

const htmlNode = document.getElementById('root')
const auth = new Auth()

const handleAuthentication = props => {
 auth.handleCallbackAuthentication(props)
}

ReactDOM.render(
 <Router>
  <div>
   <Route path="/" exact render={props => <FrontPage auth={auth} {...props} />} />
   <Route path="/login" render={props => <LoginPage auth={auth} {...props} />} />
   <Route
    path="/secret"
    render={props =>
     auth.isAuthenticated() ? <SecretPage auth={auth} {...props} /> : <Redirect to="/" exact />
    }
   />
   <Route path="/partial-secret" render={props => <PartialSecretPage auth={auth} {...props} />} />
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
