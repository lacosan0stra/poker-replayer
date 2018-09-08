import React, { Component } from 'react'
import Board from './Board'
import PlayerRange from './PlayerRange'
import PlayerDecision from './PlayerDecision'
import CommunityCards from './CommunityCards'
import DropDownGameStage from './DropDownGameStage'
import Main from './Main'

import '../App.css';

const DEFAULT_MESSAGE =  'SELECT THREE FLOP CARDS'
const SELECT_OOP_PLAYER_DECISION =  'SELECT OOP PLAYER DECISION'
const SELECT_IP_PLAYER_DECISION =  'SELECT IP PLAYER DECISION'
const SELECT_TURN_CARD = 'SELECT TURN CARD'
const SELECT_RIVER_CARD =  'SELECT RIVER CARD'
const HAND_IS_FINISHED = 'THE HAND IS FINISHED'

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
       <Main/>
      </div>
    );
  }
}

export default App;
