const CData = ({catData}) => {
    return (
        <div class = "card-deck">
                  <div class="card-body">
                      <div class="card">
                          <h5 class="card-title">The cat's breed is {catData.breed}</h5>
                          <h6 class="card-text"> Some Facts about the cat: </h6>
                          <li> It's country of origin is: {catData.country}</li>
                          <li> Their hair coat is: {catData.coat}.</li>
                          <li> It's pattern is: {catData.pattern}.</li>
                          <p/>
                      </div>
                  </div>
        </div>

    )
}; 

export default CData;