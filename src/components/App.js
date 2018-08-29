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
        GameBoardStage: 'flop' || '',
        playFlow: {
            flop: [],
            turn: [],
            river: [],
        },
    }


    updateFlopPlayFlow = (value) => {
        if (this.state.GameBoardStage === 'flop') {
            let playerDecision = this.state.playFlow.flop.concat([value])
            this.setState({
                playFlow : {
                    flop: playerDecision,
                    turn: this.state.playFlow.turn,
                    river: this.state.playFlow.river,
                }
            })
        }
    }

    updateTurnPlayFlow = (value) => {
        if (this.state.GameBoardStage === 'turn') {
            let playerDecision = this.state.playFlow.turn.concat([value])
            this.setState({
                playFlow : {
                    flop: this.state.playFlow.flop,
                    turn: playerDecision,
                    river: this.state.playFlow.river,
                }
            })
        }
    }

    updateRiverPlayFlow = (value) => {
        if (this.state.GameBoardStage === 'river') {
            let playerDecision = this.state.playFlow.river.concat([value])
            this.setState({
                playFlow : {
                    flop: this.state.playFlow.flop,
                    turn: this.state.playFlow.turn,
                    river: playerDecision,
                }
            })
        }
    }
    handleClickPlayerDecision = (e) => {
        const targetId = e.target.id
        this.updateFlopPlayFlow(targetId)
        this.updateTurnPlayFlow(targetId)
        this.updateRiverPlayFlow(targetId)
    }

    handleClick = (event) => {
        if (this.state.selectedCards.length <5
            && !this.state.selectedCards.includes(event.target.id)
            && event.target.id !== ("communityCards")
            && event.target.id.length !== 0
        ) {
            this.updateSelectedCards(event)
            this.setSelectFieldValue()
        }
    }

    updateSelectedCards = (e) => {
        e.preventDefault()
            this.setState({
                selectedCards : this.state.selectedCards.concat([e.target.id])
            })
    }

    setSelectFieldValue = () => {

        switch (this.state.selectedCards.length ) {
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
                <PlayerRange
                    position = "oop"
                    flop={this.state.playFlow['flop'][0]}
                    turn={this.state.playFlow['turn'][0]}
                    river={this.state.playFlow['river'][0]}
                />
              <Board
                  handleClick={this.handleClick}
              />
              <PlayerRange
                  position = "ip"
                  flop={this.state.playFlow['flop'][1]}
                  turn={this.state.playFlow['turn'][1]}
                  river={this.state.playFlow['river'][1]}
              />
          </div>

          <div className='board-stage'>
              <p className='explanation'> --> player selects BOARD GAME STAGE</p>
          </div>

          <div className='flex-container'>
          <PlayerDecision
              position = "oop"
              handleClick={this.handleClickPlayerDecision}
              bet='bet_oop'
              check='check_oop'
              call='call_oop'
              fold='fold_oop'
              raise='raise_oop'

          />
              <DropDownGameStage
                  value={this.state.GameBoardStage}
              />

          <PlayerDecision
              position = "ip"
              handleClick={this.handleClickPlayerDecision}
              bet='bet_ip'
              check='check_ip'
              call='call_ip'
              fold='fold_ip'
              raise='raise_ip'
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
