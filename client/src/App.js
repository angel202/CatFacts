import './App.css';
import axios from "axios"; 
import {useState, useEffect} from 'react'; 

function App() {

  const [catData, setCatData] = useState(""); 

  useEffect(() => {
    axios.get("https://catfact.ninja/breeds").then((response) =>{
      setCatData(response.data.data);
      console.log(response.data);
    });
  }, []);  
 
  /*
  const fetchData = async () => { 
    try { 
      const data = await axios.get("https://cat-fact.herokuapp.com/facts");
      console.log(data); 
      setCatData(data);
    } catch (err){ 
      console.log(err); 
    }
  }; */


  return (
    <div className="App">

      {catData && catData.map((val, index) => {
        return(
          <li key ={index}>{val.breed}</li>
        ); 
      })}

    </div>
  );
}

export default App;
