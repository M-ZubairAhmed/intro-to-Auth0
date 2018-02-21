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

1.

#### Next Up

* Persistance storage with local session
* isAuthenticated HOC
* and more...
