import axios from "axios"; 
import {useState, useEffect} from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function DogPage() {

  const [dogData, setDogData] = useState(""); 
  //const [fact, setFact] = useState(""); 

 
  useEffect(() => {
    axios.get("http://localhost:3001/DogFacts").then((response) =>{
      setDogData(response?.data);
      console.log(response?.data);
    });
  }, []);  

  return (
    <div className="App">
        <p>Hello</p>
    {dogData && dogData.map((val, i)=>{
        return(
           <div key = {i}> {val.attributes.description} </div>
        ); 
    })}

    </div>
  );
}

export default DogPage;
