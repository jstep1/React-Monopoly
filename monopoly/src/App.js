import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
        <h1>React Monopoly</h1>
        <hr />
      <div className="row">

      {/* Game board column */}
        

      {/* Player 1 */}

      <div className="col-md-3">
      <div className="row">
      <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a className="nav-link active" id="v-pills-player1-tab" data-toggle="pill" href="#v-pills-player1" role="tab" aria-controls="v-pills-player1" aria-selected="true">Player 1</a>
      <a className="nav-link" id="v-pills-player1-tab" data-toggle="pill" href="#v-player1" role="tab" aria-controls="v-player1" aria-selected="false">Assets</a>
      </div>
      <div className="tab-content" id="v-pills-tabContent">
      <div className="tab-pane fade show active" id="v-pills-player1" role="tabpanel" aria-labelledby="v-pills-player1-tab"><p class="balance"><b>$1500</b></p></div>
      <div className="tab-pane fade" id="v-player1" role="tabpanel" aria-labelledby="v-player1-tab">...</div>
      </div>
      </div>

      <hr /><br />

      {/* Player 2 */}

      <div className="row">
      <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a className="nav-link active" id="v-pills-player2-tab" data-toggle="pill" href="#v-pills-player2" role="tab" aria-controls="v-pills-player2" aria-selected="true">Player 2</a>
      <a className="nav-link" id="v-pills-player2-tab" data-toggle="pill" href="#v-player2" role="tab" aria-controls="v-player2" aria-selected="false">Assets</a>
      </div>
      <div className="tab-content" id="v-pills-tabContent">
      <div className="tab-pane fade show active" id="v-pills-player2" role="tabpanel" aria-labelledby="v-pills-player2-tab"><p class="balance"><b>$1500</b></p></div>
      <div className="tab-pane fade" id="v-player2" role="tabpanel" aria-labelledby="v-player2-tab">...</div>
      </div>
      </div>

      <hr /><br />

      {/* Player 3 */}

      <div className="row">
      <div className="nav flex-column nav-pills green" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a className="nav-link active" id="v-pills-player3-tab" data-toggle="pill" href="#v-pills-player3" role="tab" aria-controls="v-pills-player3" aria-selected="true">Player 3</a>
      <a className="nav-link" id="v-pills-player3-tab" data-toggle="pill" href="#v-player3" role="tab" aria-controls="v-player3" aria-selected="false">Assets</a>
      </div>
      <div className="tab-content" id="v-pills-tabContent">
      <div className="tab-pane fade show active" id="v-pills-player3" role="tabpanel" aria-labelledby="v-pills-player3-tab"><p class="balance"><b>$1500</b></p></div>
      <div className="tab-pane fade" id="v-player3" role="tabpanel" aria-labelledby="v-player3-tab">...</div>
      </div>
      </div>

      <hr /><br />

      {/* Player 4 */}

      <div className="row">
      <div className="nav flex-column nav-pills yellow" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a className="nav-link active" id="v-pills-player4-tab" data-toggle="pill" href="#v-pills-player4" role="tab" aria-controls="v-pills-player4" aria-selected="true">Player 4</a>
      <a className="nav-link" id="v-pills-player4-tab" data-toggle="pill" href="#v-player4" role="tab" aria-controls="v-player4" aria-selected="false">Assets</a>
      </div>
      <div className="tab-content" id="v-pills-tabContent">
      <div className="tab-pane fade show active" id="v-pills-player4" role="tabpanel" aria-labelledby="v-pills-player4-tab"><p class="balance"><b>$1500</b></p></div>
      <div className="tab-pane fade" id="v-player4 chat" role="tabpanel" aria-labelledby="v-player4-tab">...</div>
      </div>
      </div>

      
      </div>

      <div className="col-md-6">
          <img alt="gameboard" src="assets/images/monopoly.png"/>
      </div>

      <div className="col-md-3">
      <div className="card border-light mb-3">
        <div className="card-body">
        <h5 className="card-title">Card selection screen</h5>
        <p className="card-text">(insert card view here)</p>
        </div>
        </div><br /><br /><br /><br />

        <div className="card border-light mb-3">
        <div className="card-header"><p className="card-text" id="chat">Chat Room</p></div>
        <div className="card-body">
        <p className="card-text" id="chat">Player 1: "HELLO"</p><br />
        <p className="card-text" id="chat">Player 2: "HERRO"</p><br />
        <p className="card-text" id="chat">Player 3: "HEY"</p><br />
        <textarea id="chat"></textarea>
        <button id="sbmt">Submit</button>
        </div>
        </div>



      </div>

      

       </div>

       <div className="row">

       <div className="col-md-2">
       <br />
      <h3>Up Next: Player 2</h3>
       </div>

       <div className="col-md-8">
        <br />
       <h2><button>Roll</button> (INSERT DICE HERE)</h2>
       </div>

       <div className="col-md-2">
       <br />
      <h3>Timer: 0</h3>
       </div>

       </div>

       </div>
       </div>
      
    );
  }
}

export default App;
