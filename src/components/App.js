import React, { Component } from 'react'

import Main from './Main'
import axios from 'axios'
import PreviousHands from './PreviousHands'

const DEFAULT_MESSAGE =  'SELECT THREE FLOP CARDS'

const ButtonRoute = ({label, handleClick}) => {
    return (
        <button onClick={handleClick}> {label} </button>
    )
}

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
        displayInstruction: DEFAULT_MESSAGE,
        showPreviousHands: false
    }

    handleClickPreviousHands = () => {
        this.state.showPreviousHands ?
        this.setState({
            showPreviousHands: false
        })
            :  this.setState({
                showPreviousHands: true
            })
    }




    // SELECT CARDS ON THE CHART END

  render() {

      return (
      <div>
          {
              this.state.showPreviousHands ?
                  <div>
                      <PreviousHands/>
                      <ButtonRoute label='GO BACK TO MAIN PAGE'
                                   handleClick={this.handleClickPreviousHands}
                      />
                  </div>
                  :
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
                  <ButtonRoute
                      label='see previous hands'
                      handleClick={this.handleClickPreviousHands}
                  />
                  </div>

          }






      </div>
    );
  }
}

export default App;
