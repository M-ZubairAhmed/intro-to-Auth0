import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Auth from './utils/Auth'
import App from './views/front_page'

const htmlNode = document.getElementById('root')
const auth = new Auth()

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" render={props => <App auth={auth} {...props} />} />
    </div>
  </Router>,
  htmlNode,
)
