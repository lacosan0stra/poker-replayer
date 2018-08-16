import React, { Component } from 'react'
import Board from './Board'
import PlayerRange from './PlayerRange'
import PlayerDecision from './PlayerDecision'

import '../App.css';

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
              <div className='flex-container flex-item'>
                <PlayerRange
                    position = "oop"
                />
                  <PlayerRange
                      position = "ip"
                  />
              </div>
          <Board/>
          </div>

          <div className='board-stage'>
              <p className='explanation'> --> player selects BOARD GAME STAGE</p>

              BOARD SITUATION
              <select>
                  <option value="flop">FLOP</option>
                  <option value="turn">TURN</option>
                  <option value="river">RIVER</option>
              </select>
          </div>
          <div className='flex-container'>
          <PlayerDecision
              position = "oop"
          />
          <PlayerDecision
              position = "ip"

          />

          </div>
      </div>
    );
  }
}

export default App;
