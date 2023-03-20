import axios from "axios"; 
import {useState, useEffect} from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

function CatPage() {

  const [catData, setCatData] = useState(""); 
  const [fact, setFact] = useState(""); 

  useEffect(() => {
    axios.get("http://localhost:3001/CatBreeds").then((response) =>{
      setCatData(response.data);
      console.log(response.data);
    });
  }, []);  
 
  useEffect(() => {
    axios.get("http://localhost:3001/CatFacts").then((response) =>{
      setFact(response.data);
      console.log(response.data);
    });
  }, []);  

  return (
    <div class="App">
    <h1> Random Fact of the day: </h1>
    <p1>{fact}</p1>
      {catData && catData.map((val, index) => {
        return(
          <div class="row row-cols">
              <div class="col">
                  <div class="card">
                      <div class="card-body">
                          <h5 class="card-title">The cat's breed is {val.breed}</h5>
                          <h6 class="card-text"> Some Facts about the cat: </h6>
                          <li> It's country of origin is: {val.country}</li>
                          <li> Their hair coat is: {val.coat}.</li>
                          <li> It's pattern is: {val.pattern}.</li>
                          <p/>
                      </div>
                  </div>
              </div>
          </div> 
        ); 
      })}

    </div>
  );
}

export default CatPage;
