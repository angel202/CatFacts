const express = require("express"); 
const app = express(); 
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require('axios');


app.use(cors());
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended:true})); 


app.get('/CatBreeds', (req, res) => {
    axios.get('https://catfact.ninja/breeds')
  .then(response => {
    let Breeding = response.data.data; 
    res.json(Breeding);
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
  })
  .catch(error => {
    console.log(error);
  });
});

  app.get('/CatFacts', (req, res) => {
    res.json(CatFact)
  })
/////////////////////////////////////////////////////


app.get('/DogFacts', (req, res) => {
    axios.get('https://dogapi.dog/api/v2/breeds')
  .then(response => {
    let DogFact = response.data.data;
    res.json(DogFact);
    console.log(DogFact)
  })
  .catch(error =>{
    console.log(error); 
  });
});

app.get('/DogFacts', (req, res) => {
  res.json(DogFact)
})

app.listen(3001, () => { 
    console.log("Running on port 3001")
})
