import './CData.css';

const CData = ({catData}) => {
    return (
        <div class = "card-deck">
                  <div class="card-body">
                    <div class="d-inline-flex">
                      <div class="card" style={{backgroundColor:'black'}}>
                          <h3 class="card-title">The cat's breed is {catData.breed}</h3>
                          <h4 class="card-text"> Some Facts about the cat: </h4>
                          <ul>
                          <li> It's country of origin is: {catData.country}</li>
                          <li> Their hair coat is: {catData.coat}.</li>
                          <li> It's pattern is: {catData.pattern}.</li>
                          </ul>
                          <p/>
                      </div>
                    </div> 
                  </div>
        </div>

    )
}; 

export default CData;