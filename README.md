### Starting the app

1. Rename `src/utils/secrets.example.js` file to `src/utils/secrets.js`
2. Add the configuration from the Auth0 dashboard.

### Notes

#### Hosted solution

1. Auth is a class containing important methods of `auth0-Js`.
2. create instance of `WebAuth` Object and pass the required object with keys
3. Make a new method inside the class, lets call this `login()`.
4. Inside the method call internal method of the `auth` object you initialised in _step-2_.
5. Lets place call method `authorize()` from the within the `login()` created method.
6. In you app try calling this method by making an instance of the class you created, you should be able to see the _Auth0_ login screen.

#### Custom login with Auth0 API

If predefined UI of auth0 puts the user of our UI flow, then implementing custom UI makes sense

1. Instead of calling method `authorize` without parameters, once can pass the user detail object.
2. If default Auth0 database is set in the dashboard, copy its name
3. For login with password call `login` with objects filled with database name and user details.
4. For social logins same `authorize` method can be used but to differenciate between the providers pass an object containing the social providers name.

##### Grabbing tokens from the callback url

1. Its now time to add in the router to restrict and allow parts of your app.
2. I prefer keeping all my views in a seperate folder, lets start by seperating app, since thats the front page
3. Add the route for font page `/` in `index.js`.
4. Lets also throw in to mix a secret page.
5. If you have followed above, you must have noticed that the url contains the hashes after we authenticated. Those have come in from **Auth0** servers.
6. Our task would be catching and caching them for future purposes. Parsing the url is another do away, Auth0 helps us with a method called `parseHash(cb)`.
7. Create another method in you `Auth.js` to parse those hashes. Lets log it for now to see what it parses.
8. Lets resume back to our routes adding in `index.js`. This time lets add a route for callback `/callback`.
9. It could just be a loading screen to start with. But in this route we would also like to parse the hashes we recieved in the url.
10. So to be able to refernce the methods we wrote in AuthJS lets have an instance of it in our `index.js`, and this could be only place where we could instantiate it, as we could pass the reference to all other routes from here. Its convienient that way.
11. So by making a custom method `handleAuthentication` which calls the `handleAuthentication` method of `Auth.js` we pass in before we return the Callback Page.
12. Take a look at the object, once we done what we are suppose to we can go back to the page we came from by Historys `goBack()` api.

##### Storing tokens locally

1. I am omiting obvious if and else from here, those could be seen from source code
2. The authentication object recieved from **Auth0** is pretty sleek, contains enough information to make any subsiquent request either to our backend server or by single click signon with out redirect to Auth0 servers.
3. Calculate when exactly the key is going to expire, this will help us to reautherize the user and store is along with access token and id.
4. Tokens stored away in our local storage helps us to contruct a simple boolean `isAuthenticated` function which will just check if our token are expired or not. A complete roundtrip to Auth0 server is thus saved.
5. For logout we clear tokens instead.

##### Private pages

1. Usually even if user is not logged in, some part of the truncated page is still visible, lets throw this into the mix.
2. Create a partial secret page, with its some content rendered only in logged in mode.
3. We do this my calling, if you remeber `isAuthenticatd()` function from `Authjs` class.
4. Complete private page however is a little different, we do not ever want any part of the page to be visible to not logged in user.
5. We do that by not mounting the page at all in our routes. For this **react-router** gives a declarative way to naviagate away from the page via `<redirect>` api.

#### What all you can do differently

1. May be you could make a `isAuthenticated` HOC, this way you dont need to write boolean logic again and again for all private components
2. May be you would like to store in a cookie.
3. And whatever suits you and your application

#### Up next

* Making a network call to your own server with Auth0 authentication
* Attaching react redux
* and more!!
