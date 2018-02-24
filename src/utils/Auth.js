import auth0 from 'auth0-js'
import { AUTH0_SECRETS } from './secrets'

export default class Auth {
 auth0 = new auth0.WebAuth({
  domain: AUTH0_SECRETS.domain,
  clientID: AUTH0_SECRETS.clientId,
  redirectUri: AUTH0_SECRETS.callbackUrl,
  audience: `https://${AUTH0_SECRETS.domain}/userinfo`,
  responseType: 'token id_token',
  scope: 'openid profile',
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

 // This is where you recieve your auth results
 handleCallbackAuthentication = props => {
  this.auth0.parseHash((err, authResult) => {
   if (authResult && authResult.accessToken && authResult.idToken) {
    console.log('Callback from auth0 server result:', authResult)
    // Once recieved store it inside your local storage
    this.storeSession(authResult, props)
   } else if (err) {
    console.log(err)
   }
  })
 }

 // function to store in local cache
 storeSession(authResult, props) {
  let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())
  localStorage.setItem('access_token', authResult.accessToken)
  localStorage.setItem('access_token', authResult.accessToken)
  localStorage.setItem('id_token', authResult.idToken)
  localStorage.setItem('expires_at', expiresAt)
  props.history.goBack()
 }

 // Checking if the tokens are expired by verifying the date
 isAuthenticated = () => {
  let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
  console.log('isAuthenticated', new Date().getTime() < expiresAt)
  console.log()
  return new Date().getTime() < expiresAt
 }

 logout = returnUrl => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('id_token')
  localStorage.removeItem('expires_at')
  this.auth0.logout({
   returnTo: returnUrl,
   clientID: AUTH0_SECRETS.clientId,
  })
 }
}
