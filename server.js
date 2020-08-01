// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

//Dummy API Endpoint
const fakeData = {
    // animal: 'lion',
    temp: '87 F'

  }
  
  app.get('/fakeWeatherData', getFakeData)
  
  function getFakeData(req, res){
   res.send(fakeData)
  }
  
  // GET route
  const weatherData=[];
  
  app.get('/all',getData)
  
  function getData(req,res){
    res.send(weatherData)
    console.log(weatherData)
  }
  
  //POST route
  app.post('/addWeather', addWeather);
  
  function addWeather(req,res){
    //console.log(req.body)
    newEntry = {
      temp: req.body.temp,
      date: req.body.date,
      feelings: req.body.feelings
    }
  
    weatherData.push(newEntry)
    console.log(weatherData)
  }