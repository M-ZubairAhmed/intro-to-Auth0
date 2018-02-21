import auth0 from 'auth0-js'
import { AUTH0_SECRETS } from './secrets'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH0_SECRETS.domain,
    clientID: AUTH0_SECRETS.clientId,
    redirectUri: AUTH0_SECRETS.callbackUrl,
    audience: `https://${AUTH0_SECRETS.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid',
  })

  loginWithGithub = () => {
    this.auth0.authorize({ connection: 'github' })
  }

  loginWithEmailPass = (username, password) => {
    this.auth0.login({
      realm: AUTH0_SECRETS.database,
      username: username,
      password: password,
    })
  }

  handleCallbackAuthentication = props => {
    this.auth0.parseHash((err, authResult) => {
      console.log(authResult)
    })
    props.history.goBack()
  }

  logout = returnUrl => {
    this.auth0.logout({
      returnTo: returnUrl,
      clientID: AUTH0_SECRETS.clientId,
    })
  }
}
