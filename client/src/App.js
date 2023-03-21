import './App.css';
import CatPage from './CatPage';
import DogPage from './DogPage';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(){
  return (
    <div className="wrapper"> 
        <BrowserRouter>
          <Routes>
            <Route exact path = "/" element={<Home/>}>
            </Route>
            <Route exact path="/CatPage" element={<CatPage/>}>
            </Route>
            <Route exact path="/DogPage" element={<DogPage/>}>
            </Route>
          </Routes> 
        </BrowserRouter>
      </div>
  );
}

export default App;
