import React, { Component } from 'react'
import Board from './Board'
import PlayerRange from './PlayerRange'
import PlayerDecision from './PlayerDecision'

import '../App.css';
import Card from "./Card";


class App extends Component {

  render() {
    return (
      <div>
        <header >
          <h1>Welcome to Poker Training Buddy </h1>
        </header>
          <p className='explanation'> --> player enters OOP/IP ranges</p>
          <p className='explanation'> --> player enters COMMUNITY CARDS</p>
          <p className='explanation'> --> For the MVP we do not have to enter actual ranges</p>
          <div className='flex-container'>
                <PlayerRange position = "oop" />
              <Board>

              </Board>
              <PlayerRange position = "ip" />
          </div>

          <div className='board-stage'>
              <p className='explanation'> --> player selects BOARD GAME STAGE</p>

          </div>
          <div className='flex-container'>
          <PlayerDecision
              position = "oop"
          />
              <div className='flex-item flex-container'>

                  <select className='flex-item'>
                      <option value="flop">FLOP</option>
                      <option value="turn">TURN</option>
                      <option value="river">RIVER</option>
                  </select>
              </div>

          <PlayerDecision
              position = "ip"
          />


          </div>
      </div>
    );
  }
}

export default App;
