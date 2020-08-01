# Weather-Journal App Project

## Overview
This project is to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

## Topics Covered 
This project covered below major topics from *Web APIs and Asynchronous Applications* course from Udacity
* Setup a Node environment with Express and the necessary project dependencies
* Setup a server with GET and POST routes
* Create developer credentials for a Web API
* Use the Fetch API with my credentials and user input to get dynamic data into my app routes
* Access a GET route on the server side, from a function called on the client side
* Chain Promises together
* Access HTML elements with JavaScript and set their properties dynamically

## Prerequisites Summary
* Webserver - Node
* Web application framework for routing - Express

## Install Prerequisites
1. Install NPM or upgrade NPM if you already have it installed 
        
        npm install  
        npm install -g npm@latest

2. Install Node package

        npm install express
        npm install body-parser
        npm install cors

3.

## Run the code
* First time running the code

        node server.js

* Next time you only have to input below command

        npm start

* Check the website running at http://localhost:3000/



## Other tools installed during development
* dotenv package - it allows us to use environment variables set in a new file

        npm install dotenv 

After installing dotenv, a `.env` file was created in the root of the project but added to .gitignore, in which I saved my develper ID/Key from Aylien as:

        API_ID=********
        API_KEY=********************************

* Aylien library

Install 4.0.0 version - this is an older version as the newest one has bug

        npm install aylien-news-api@4.0.0 




## List of third-party resources
* [Webpack courses](www.udacity.com) from Udacity

## Addtional Notes
* Install 4.0.0 version - this is an older version as the newest one has bug
* `aylien_textapi` was disabled, I used `aylien-news-api` instead
