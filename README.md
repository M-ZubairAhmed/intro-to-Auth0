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
