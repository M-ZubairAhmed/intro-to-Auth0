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
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log(authResult)
        this.storeSession(authResult)
      } else if (err) {
        console.log(err)
      }
    })
    props.history.goBack()
  }

  storeSession(authResult) {
    const expiryDateTime = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime(),
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expiry', expiryDateTime)
  }

  isAuthenticated = () => {
    const expiryTime = JSON.parse(localStorage.getItem('expiry'))
    const currentTime = new Date().getTime()
    return currentTime < expiryTime
  }

  logout = returnUrl => {
    this.auth0.logout({
      returnTo: returnUrl,
      clientID: AUTH0_SECRETS.clientId,
    })
  }
}
