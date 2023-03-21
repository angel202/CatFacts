import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

function Home() {

  return (
       
    <div style={{ float:`left` }} class="button">
        <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown">Test your luck</button>
            <div class="dropdown-menu dropdown-menu-end">
                <a href="http://localhost:3000/" class="dropdown-item">Home</a>
                <a href="http://localhost:3000/CatPage" class="dropdown-item">Cat Page </a>
            </div>
    </div>

  );
}

export default Home;
