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

#### Next Up

* Persistance storage with local session
* isAuthenticated HOC
* and more...
