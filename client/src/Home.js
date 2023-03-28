import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import cat from './cat.jpg';
import dog from './dog.jpg';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

function Home() {

  return (
    <div className ="Home">

                <div class="row vh-100">
                    <div class="col-md">
                        <div class="card">
                        <div class="card-body">
                            <img src={cat} class="card-img-top" alt="Cute cat"/> 
                            <h5 class="card-title">Are you a cat person?</h5>
                            <p class="card-text">Maybe this will interest you!</p>
                            <a href="http://localhost:3000/CatPage" class="btn">Take me to the cats!</a>
                        </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card">
                        <div class="card-body">
                            <img src={dog} class="card-img-top" alt="Cute dog"/> 
                            <h5 class="card-title">Are you a dog person?</h5>
                            <p class="card-text">Maybe this will interest you!</p>
                            <a href="http://localhost:3000/DogPage" class="btn">Take me to the dogs!</a>
                        </div>
                        </div>
                    </div>
                </div>
        <footer>
            <div className='Footer_Contain'>
                <p>Powered by Stratonauts Dog AP{<br/>} 
                    & CatFact ninja</p>
            </div>
        </footer>
    </div>

  );
}

export default Home;
