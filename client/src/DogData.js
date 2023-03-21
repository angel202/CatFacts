import './DogData.css';

const DogData = ({dogData}) => {
    return (
        <div class = "card-deck">
                  <div class="card-body">
                    <div class="d-inline-flex">
                      <div class="card" style={{backgroundColor:'#1F2124'}}>
                          <h3 class="card-title">The dog's breed is {dogData.name}</h3>
                          <p class="card-text"> {dogData.description} </p>
                          <p/>
                      </div>
                    </div> 
                  </div>
        </div>

    )
}; 

export default DogData;