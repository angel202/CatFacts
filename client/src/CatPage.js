import axios from "axios"; 
import './CatPage.css';
import CData from './CData';
import {useState, useEffect} from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';


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

    <div style={{ float:`left` }} class="button">
        <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown">Test your luck</button>
            <div class="dropdown-menu dropdown-menu-end">
                <a href="http://localhost:3000/" class="dropdown-item">Home</a>
                <a href="http://localhost:3000/CatPage" class="dropdown-item">Cat Page </a>
            </div>
    </div>
    
    <br/>
    <br/>

        <h1> Random Fact of the day: </h1>
        <p1>{fact}</p1>
        <br/>
        <div class = "card-deck">
            {catData && catData.map((val, index) => (
                <CData key={index} catData={val} />
                ))}
        </div>
    </div>
  );
}

export default CatPage;
