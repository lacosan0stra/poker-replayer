import React, { Component } from 'react';
import Board from './Board'

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
                  <div className='oop-position flex-item'>
                      OUT OF POSITION
                      <div>
                          <button> Enter OOP range </button>
                      </div>
                  </div>
                  <div className='ip-position flex-item'>
                      IN POSITION
                      <div>
                          <button> Enter IP range </button>
                      </div>
                  </div>
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
              <div className='flex-item'>
                  GIVE OOP PLAYER OPTIONS
                  <div className='flex-container'>
                      <div className='flex-item'>
                          BET
                      </div>
                      <div className='flex-item'>
                          CHECK
                      </div>
                  </div>
              </div>
              <div className='flex-item'>
                  GIVE IP PLAYER OPTIONS
                  <div className='flex-container'>
                      <div className='flex-item'>
                          BET
                      </div>
                      <div className='flex-item'>
                          CHECK
                      </div>
                      <div className='flex-item'>
                          CALL
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
