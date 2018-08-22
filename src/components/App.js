import React, { Component } from 'react'
import Board from './Board'
import PlayerRange from './PlayerRange'
import PlayerDecision from './PlayerDecision'
import CommunityCards from './CommunityCards'

import '../App.css';
import Card from "./Card";


class App extends Component {

    state = {
        selectedCards : [],
    }

    handleClick = (e) => {

        if (this.state.selectedCards.length <5 && !this.state.selectedCards.includes(e.target.id)) {
            this.setState({
                selectedCards : this.state.selectedCards.concat([e.target.id])
            })
        }
    }

  render() {
        console.log(this.state.selectedCards)
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
              <Board
                  handleClick={this.handleClick}
              />


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

          <CommunityCards
              flopOne={this.state.selectedCards[0]}
              flopTwo={this.state.selectedCards[1]}
              flopThree={this.state.selectedCards[2]}
              turn={this.state.selectedCards[3]}
              river={this.state.selectedCards[4]}
          />
      </div>
    );
  }
}

export default App;
