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

  login() {
    this.auth0.authorize()
  }
}
