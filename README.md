<p align="center">
  <img src="https://user-images.githubusercontent.com/17708702/40399612-ee523c98-5e5b-11e8-8829-27b697107f9e.png" alt="repo image" width="400" height="300" />
  <h3 align="center">Intro to Auth0 ReactJs</h3>
  <h5 align="center"><i>Step by step guide to add Auth0 into React App</i></h5>
</p>

![blue-line](https://i.imgur.com/cETzBqq.png)

### Prereq

1.  [Nodejs](https://nodejs.org/en/download/current/) v9.5.0
2.  [Yarn](https://yarnpkg.com/en/docs/install) 1.3.2

### Starting the app

1.  Rename `src/utils/secrets.example.js` file to `src/utils/secrets.js`
2.  Add the configuration from the [Auth0 dashboard.](https://auth0.com/docs/quickstart/spa/react)
3.  Install dependencies

```bash
yarn
```

4.  Start the frontend server

```bash
yarn start
```

### Step by step guide

<details>
    <summary>Hosted solution</summary>
        <ol>
            <li>Auth is a class containing important methods of `auth0-Js`</li>
            <li>create instance of `WebAuth` Object and pass the required object with keys</li>
            <li>Make a new method inside the class, lets call this `login()`</li>
            <li>Inside the method call internal method of the `auth` object you initialised in _step-2_</li>
            <li>Lets place call method `authorize()` from the within the `login()` created method</li>
            <li>In you app try calling this method by making an instance of the class you created, you should be able to see the _Auth0_ login screen</li>
    </ol>
</details>
<details>
    <summary>Custom login with Auth0 API</summary>
        <p>If predefined UI of auth0 puts the user of our UI flow, then implementing custom UI makes sense
        </p>
        <ol>
            <li>Instead of calling method `authorize` without parameters, once can pass the user detail object</li>
            <li>If default Auth0 database is set in the dashboard, copy its name</li>
            <li>For login with password call `login` with objects filled with database name and user details</li>
            <li>For social logins same `authorize` method can be used but to differenciate between the providers pass an object containing the social providers name</li>
        </ol>
</details>
<details>
    <summary>Grabbing tokens from the callback url</summary>
        <ol>
            <li>Its now time to add in the router to restrict and allow parts of your app</li>
            <li>I prefer keeping all my views in a seperate folder, lets start by seperating app, since thats the front page</li>
            <li>Add the route for font page `/` in `index.js`</li>
            <li>Lets also throw in to mix a secret page</li>
            <li>If you have followed above, you must have noticed that the url contains the hashes after we authenticated. Those have come in from **Auth0** servers</li>
            <li>Our task would be catching and caching them for future purposes. Parsing the url is another do away, Auth0 helps us with a method called `parseHash(cb)`</li>
            <li>Create another method in you `Auth.js` to parse those hashes. Lets log it for now to see what it parses</li>
            <li>Lets resume back to our routes adding in `index.js`. This time lets add a route for callback `/callback`</li>
            <li>It could just be a loading screen to start with. But in this route we would also like to parse the hashes we recieved in the url</li>
            <li>So to be able to refernce the methods we wrote in AuthJS lets have an instance of it in our `index.js`, and this could be only place where we could instantiate it, as we could pass the reference to all other routes from here. Its convienient that way</li>
            <li>So by making a custom method `handleAuthentication` which calls the `handleAuthentication` method of `Auth.js` we pass in before we return the Callback Page</li>
            <li>Take a look at the object, once we done what we are suppose to we can go back to the page we came from by Historys `goBack()` api</li>
        </ol>
</details>
<details>
    <summary>Storing tokens locally</summary>
        <ol>
            <li>I am omiting obvious if and else from here, those could be seen from source code</li>
            <li>The authentication object recieved from **Auth0** is pretty sleek, contains enough information to make any subsiquent request either to our backend server or by single click signon with out redirect to Auth0 servers</li>
            <li>Calculate when exactly the key is going to expire, this will help us to reautherize the user and store is along with access token and id</li>
            <li>Tokens stored away in our local storage helps us to contruct a simple boolean `isAuthenticated` function which will just check if our token are expired or not. A complete roundtrip to Auth0 server is thus saved</li>
            <li>For logout we clear tokens instead</li>
        </ol>
</details>
<details>
    <summary>Private pages</summary>
        <ol>
            <li> Usually even if user is not logged in, some part of the truncated page is still visible, lets throw this into the mix</li>
            <li> Create a partial secret page, with its some content rendered only in logged in mode</li>
            <li> We do this my calling, if you remeber `isAuthenticatd()` function from `Authjs` class</li>
            <li> Complete private page however is a little different, we do not ever want any part of the page to be visible to not logged in user</li>
            <li> We do that by not mounting the page at all in our routes, For this **react-router** gives a declarative way to naviagate away from the page via `<redirect>` api</li>
    </ol>
</details>
<details>
    <summary>What all you can do differently</summary>
        <ol>
            <li>May be you could make a `isAuthenticated` HOC, this way you dont need to write boolean logic again and again for all private components</li>
            <li>May be you would like to store in a cookie</li>
            <li>And whatever suits you and your application</li>
    </ol>
</details>
