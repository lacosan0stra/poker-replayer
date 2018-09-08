import React, { Component } from 'react'

import Main from './Main'
import axios from 'axios'
import PreviousHands from './PreviousHands'

const DEFAULT_MESSAGE =  'SELECT THREE FLOP CARDS'

class App extends Component {

    state = {
        selectedCards : [],
        GameStreet: 'flop' || '',
        playFlow: {
            flop: [],
            turn: [],
            river: [],
        },
        turnToPlay : 'oop',
        toggleCount : 0,
        turnCardYellow : true,
        displayInstruction: DEFAULT_MESSAGE
    }




    // SELECT CARDS ON THE CHART END

  render() {
      return (
      <div>

       <Main
           selectedCards={this.state.selectedCards}
           GameStreet={this.state.GameStreet}
           playFlow = {this.state.playFlow}
           turnToPlay = {this.state.turnToPlay }
           toggleCount = {this.state.toggleCount}
           turnCardYellow = {this.state.turnCardYellow }
           displayInstruction = {this.state.displayInstruction}
       />
          <PreviousHands/>


      </div>
    );
  }
}

export default App;
