const express = require("express"); 
const app = express(); 
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require('axios');
require('dotenv').config()


const AuthKey = process.env.TMDBKey;

app.use(cors());
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended:true})); 


app.get('/CatBreeds', (req, res) => {
    axios.get('https://catfact.ninja/breeds')
  .then(response => {
    let Breeding = response.data.data; 
    res.json(Breeding);
    console.log(response.data.data);
  })
  .catch(error => {
    console.log(error);
  });
});

  app.get('/CatBreeds', (req, res) => {
    res.json(Breeding)
  })
//////////////////////////////////////////////////

app.get('/CatFacts', (req, res) => {
    axios.get('https://catfact.ninja/fact')
  .then(response => {
    let CatFact = response.data.fact; 
    res.json(CatFact);
    console.log(response.data.fact);
  })
  .catch(error => {
    console.log(error);
  });
});

  app.get('/CatFacts', (req, res) => {
    res.json(CatFact)
  })
/////////////////////////////////////////////////////

/*
app.get('/movies', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${AuthKey}`)
.then(response => {
  let movieType = response.data; 
  res.json(movieType);
  console.log(response.data);
})
.catch(error => {
  console.log(error);
});
});
*/

app.listen(3001, () => { 
    console.log("Running on port 3001")
})