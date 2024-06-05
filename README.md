Deploying a client and server on render.com
Create a render.com account
- [ ] ⛳️ Go to Render.com and sign up for a new account. It might be easiest to log in with your Github account sign in with your github account 

Deploy the server as a Node.js app
- [ ] ⛳️ Create a new "Web service", and connect your Github repo containing 'client' and 'server' directories choose  repo from last time for this or one that you do over the next couple of days 
- [ ] ⛳️ Set the "Root directory" to be server, where your server code lives 
- [ ] ⛳️ Set the "Build Command" to be npm install so it will install our NPM dependencies 
- [ ] ⛳️ Set the "Start Command" to be node server.js so it will run the node server, the same as on our local machine 
- [ ] ⛳️ Save the changes, and wait for the deployment and build to run. You can watch the logs to see what's happening 
- [ ] ⛳️ Once it finishes, note the URL you're given. It will be something like https://<your-app-name>.onrender.com/ 
- [ ] ⛳️ Visit that URL in your browser, and you should be able to visit the routes defined in your server code

Deploy the client as a static site
- [ ] ⛳️ Create a new "Static site", and connect your Github repo containing 'client' and 'server' directories 
- [ ] ⛳️ Set the "Root directory" to be client, where your client code lives 
- [ ] ⛳️ Set the "Build Command" to be npm install && npm run build so it will install our NPM dependencies and build our React app (assuming we have configured the build script in our package.json) 
- [ ] Add ./dist to publish directory  
- [ ] ⛳️ Save the changes, and wait for the deployment and build to run. You can watch the logs to see what's happening 
- [ ] ⛳️ Once it finishes, note the URL you're given. It will be something like https://<your-app-name>.onrender.com/ 
- [ ] ⛳️ Visit that URL in your browser, and you should be able to see your website.

Confirm the client and server are connected
- [ ] ⛳️ Visit the URL of your client app, and open the developer tools. You should see the client is making requests to the server, and getting responses 
- [ ] 💭 If not, make sure you update your client code to point to the URL from the Render app. You can either use an environment variable that you set on Render and locally, then read in your code, or you can check in the code for the NODE_ENV value, and if it's production, use the Render.com URL. If it's not, use localhost
