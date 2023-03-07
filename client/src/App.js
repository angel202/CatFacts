import './App.css';
import axios from "axios"; 
import {useState, useEffect} from 'react'; 

function App() {

  const [catData, setCatData] = useState(""); 

  useEffect(() => {
    axios.get("https://catfact.ninja/fact").then((response) =>{
      setCatData([response.data]);
      console.log(response.data)
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

      {catData && catData.map((val) => {
        return(
          <li key={val}>{val.fact}</li>
        );
      })};


    </div>
  );
}

export default App;
