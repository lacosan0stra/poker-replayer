import React, { Component } from 'react'
import Board from './Board'
import PlayerRange from './PlayerRange'
import PlayerDecision from './PlayerDecision'
import CommunityCards from './CommunityCards'
import DropDownGameStage from './DropDownGameStage'

import '../App.css';

class App extends Component {

    state = {
        selectedCards : [],
        GameBoardStage: ''
    }

    handleClick = (e) => {
        this.updateSelectedCards(e)
        this.setSelectFieldValue()
    }

    updateSelectedCards = (event) => {
        if (this.state.selectedCards.length <5
            && !this.state.selectedCards.includes(event.target.id)
            && event.target.id !== ("communityCards")
            && event.target.id.length !== 0
        ) {
            this.setState({
                selectedCards : this.state.selectedCards.concat([event.target.id])
            })
        }
    }

    setSelectFieldValue = () => {

        switch (this.state.selectedCards.length ) {
            case 2 :
                this.setState({
                    GameBoardStage: 'flop'
                })
                break;
            case 3 :
                this.setState({
                    GameBoardStage: 'turn'
                })
                break;
            case 4 :
                this.setState({
                    GameBoardStage: 'river'
                })
                break;
        }
    }

    handleSelectField = () => {

    }

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
              <DropDownGameStage
                  value={this.state.GameBoardStage}
                  handleSelectField={this.handleSelectField}
              />
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
