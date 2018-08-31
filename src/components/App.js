import React, { Component } from 'react'
import Board from './Board'
import PlayerRange from './PlayerRange'
import PlayerDecision from './PlayerDecision'
import CommunityCards from './CommunityCards'
import DropDownGameStage from './DropDownGameStage'

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





    // PLAYFLOW PLAYER DECISIONS START

    toggleTurnToPlay = () => {

        if (this.state.turnToPlay === 'oop') {
            const incrementToggleCount = this.state.toggleCount +1
            this.setState({
                turnToPlay: 'ip',
                toggleCount : incrementToggleCount
            })
        } else {
            const incrementToggleCount = this.state.toggleCount +1
            this.setState({
                turnToPlay: 'oop',
                toggleCount : incrementToggleCount
            })
        }
    }


    updateFlopPlayFlow = (value) => {
        if (this.state.GameStreet === 'flop') {
            let playerDecision = this.state.playFlow.flop.concat([value])
            this.setState({
                playFlow : {
                    flop: playerDecision,
                    turn: this.state.playFlow.turn,
                    river: this.state.playFlow.river,
                },
            })
        }
    }

    updateTurnPlayFlow = (value) => {
        if (this.state.GameStreet === 'turn') {
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
        if (this.state.GameStreet === 'river') {
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

    handleOopPlayerDecision = (e) => {
        const targetId = e.target.id
                 if (this.state.selectedCards.length === 3) {
                if (this.state.playFlow.flop.length < 2) {
                    this.toggleTurnToPlay()
                    this.updateFlopPlayFlow(targetId)
                    this.setState({
                        displayInstruction: SELECT_IP_PLAYER_DECISION
                    })
                }

            }
            if (this.state.selectedCards.length === 4) {
                if (this.state.playFlow.turn.length < 2) {
                    this.toggleTurnToPlay()
                    this.updateTurnPlayFlow(targetId)
                }
                this.setState({
                    displayInstruction: SELECT_IP_PLAYER_DECISION
                })

            }
            if (this.state.selectedCards.length === 5 ) {
                if (this.state.playFlow.river.length < 2) {
                    this.toggleTurnToPlay()
                    this.updateRiverPlayFlow(targetId)
                }
                this.setState({
                    displayInstruction: SELECT_IP_PLAYER_DECISION
                })
            }

    }

    handleIpPlayerDecision = (e) => {
        const targetId = e.target.id
        if (this.state.selectedCards.length === 3) {
            if (this.state.playFlow.flop.length < 2) {
                this.toggleTurnToPlay()
                this.updateFlopPlayFlow(targetId)
                this.setState({
                    turnCardYellow : true,
                    displayInstruction: SELECT_TURN_CARD
                })
            }
        }
        if (this.state.selectedCards.length === 4) {
            if (this.state.playFlow.turn.length < 2) {
                this.toggleTurnToPlay()
                this.updateTurnPlayFlow(targetId)
                this.setState({
                    turnCardYellow : true,
                    displayInstruction: SELECT_RIVER_CARD
                })
            }
        }
        if (this.state.selectedCards.length === 5 ) {
            if (this.state.playFlow.river.length < 2) {
                this.toggleTurnToPlay()
                this.updateRiverPlayFlow(targetId)
            }
            this.setState({
                displayInstruction: HAND_IS_FINISHED
            })
        }
    }



    handleClickPlayerDecision = (e) => {
        const targetId = e.target.id
        if (this.state.turnToPlay === 'oop' &&  targetId.includes('oop') && this.state.toggleCount % 2 === 0) {
            this.handleOopPlayerDecision(e)
        }

        if (this.state.turnToPlay === 'ip' &&  targetId.includes('ip') && this.state.toggleCount % 2 !== 0 ) {
            this.handleIpPlayerDecision(e)
        }
    }




    // PLAYFLOW PLAYER DECISIONS END


    // SELECT CARDS ON THE CHART START
    handleClickChart = (event) => {
        if ( this.isCorrectId(event)
            && this.isReadyToSelectBoardCards()
        ) {
                this.updateSelectedCards(event)
                this.setSelectFieldValue()
        }
    }

    isCorrectId = (event) => {
        return  !this.state.selectedCards.includes(event.target.id)
            && event.target.id !== ("communityCards")
            && event.target.id.length !== 0
    }

    isReadyToSelectBoardCards = () => {

            return (this.isReadyToSelectFlopCards())
                || (this.isReadyToSelectTurnCard() )
                || (this.isReadyToSelectRiverCard() )


    }

    isReadyToSelectFlopCards = () => {
        if (this.state.selectedCards.length === 2) {
            this.setState({
                turnCardYellow : false,
                displayInstruction: SELECT_OOP_PLAYER_DECISION
            })
        }
        return this.state.selectedCards.length < 3
    }

    isReadyToSelectTurnCard = () => {
        this.setState({
            turnCardYellow : false,
            displayInstruction: SELECT_OOP_PLAYER_DECISION
        })
        return this.state.playFlow.flop.length === 2 && this.state.selectedCards.length === 3
    }

    isReadyToSelectRiverCard = () => {
        this.setState({
            turnCardYellow : false,
        })
        return this.state.playFlow.turn.length === 2 && this.state.selectedCards.length === 4
    }

    updateSelectedCards = (e) => {
            this.setState({
                selectedCards : this.state.selectedCards.concat([e.target.id]),
            })
    }

    setSelectFieldValue = () => {
        switch (this.state.selectedCards.length ) {
                case 3 :
                    this.setState({
                        GameStreet: 'turn'
                    })
                    break;
                case 4 :
                    this.setState({
                        GameStreet: 'river'
                    })
                    break;
            default :
                break;
            }
    }

    // SELECT CARDS ON THE CHART END

  render() {


      return (
      <div>


        <header >
          <h1> Poker Replayer with Hands ranges</h1>


        </header>


          <p className='explanation'> --> player enters OOP/IP ranges</p>
          <p className='explanation'> --> player enters COMMUNITY CARDS</p>
          <p className='explanation'> --> For the MVP we do not have to enter actual ranges</p>

          <div className='flex-container'>
              <div id='display-message' className='flex-container'>
                  {
                      this.state.displayInstruction
                  }

              </div>

          </div>
          <div className='flex-container'>
                <PlayerRange
                    position = "oop"
                    flop={this.state.playFlow['flop'][0]}
                    turn={this.state.playFlow['turn'][0]}
                    river={this.state.playFlow['river'][0]}
                />

              <Board
                  handleClick={this.handleClickChart}
                  turnCardYellow = {this.state.turnCardYellow}
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
              <div className='flex-column'>
                  {
                      (this.state.turnToPlay === 'oop' && this.state.toggleCount % 2 === 0) ?
                          <div className='flex-item'> SELECT PLAYER'S DECISION </div>
                          : <div className='flex-item'> &nbsp;  </div>

                  }
                  <PlayerDecision
                      position="oop"
                      handleClick={this.handleClickPlayerDecision}
                      bet='bet_oop'
                      check='check_oop'
                      call='call_oop'
                      fold='fold_oop'
                      raise='raise_oop'
                      turnToPlay={this.mustPlayNow}

                  />
              </div>


              <DropDownGameStage
                  value={this.state.GameStreet}
              />

              <div className='flex-column'>
                  {
                      this.state.turnToPlay === 'ip' ?
                          <div className='flex-item'> SELECT PLAYER'S DECISION </div>
                          : <div className='flex-item'> &nbsp;   </div>

                  }
                  <PlayerDecision
                      position = "ip"
                      handleClick={this.handleClickPlayerDecision}
                      bet='bet_ip'
                      check='check_ip'
                      call='call_ip'
                      fold='fold_ip'
                      raise='raise_ip'
                      turnToPlay = {this.mustPlayNow}
                  />
              </div>

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
