import axios from "axios"; 
import {useState, useEffect} from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import DogData from './DogData.js'; 
import './DogPage.css';



function DogPage() {

  const [dogData, setDogData] = useState(""); 
  const [dogfact, setDogFact] = useState(""); 

 
  useEffect(() => {
    axios.get("http://localhost:3001/DogBreeds").then((response) =>{
      setDogData(response?.data);
      console.log(response?.data);
    });
  }, []);  

  useEffect(() => {
    axios.get("http://localhost:3001/DogFacts").then((response) =>{
      setDogFact(response.data);
      console.log(response.data);
    });
  }, []); 

  return (
    <div className="DogPage">
    <div style={{ float:`left` }} class="button">
        <button type="button" class="btn dropdown-toggle btn-sm" data-bs-toggle="dropdown">Test your luck</button>
            <div class="dropdown-menu dropdown-menu-end">
                <a href="http://localhost:3000/" class="dropdown-item">Home</a>
                <a href="http://localhost:3000/CatPage" class="dropdown-item">Cat Page </a>
                <a href="http://localhost:3000/DogPage" class="dropdown-item">Dog Page </a>
            </div>
    </div>

    <br/>
    <br/>
        <div className="HeaderFact" >
            <h1>Fact of the day:</h1>
        </div>
        <div className="Dogfact">
            {dogfact && dogfact.map((val)=>{
                return(
                <p>{val.attributes.body}</p>
                ); 
            })}
        </div>

        <div class = "card-deck">
            {dogData && dogData.map((val, index) => (
                <DogData key={index} dogData={val.attributes} />
                ))}
        </div>
        <div className='Footer'>
            <p>Powered by Stratonauts Dog AP</p>
        </div>
    </div>
  );
}

export default DogPage;
