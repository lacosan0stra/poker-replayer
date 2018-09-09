import React, { Component } from 'react'
import Board from './Board'
import PlayerRange from './PlayerRange'
import PlayerDecision from './PlayerDecision'
import CommunityCards from './CommunityCards'
import DropDownGameStage from './DropDownGameStage'
import update from 'immutability-helper'

import '../App.css';
import axios from "axios/index";

const DEFAULT_MESSAGE = 'SELECT THREE CARDS FOR THE FLOP'
const SELECT_OOP_PLAYER_DECISION =  'SELECT OOP PLAYER DECISION'
const SELECT_IP_PLAYER_DECISION =  'SELECT IP PLAYER DECISION'
const SELECT_TURN_CARD = 'SELECT TURN CARD'
const SELECT_RIVER_CARD =  'SELECT RIVER CARD'
const HAND_IS_FINISHED = 'THE HAND IS FINISHED'

class Main extends Component {

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
    }

    // PLAYFLOW PLAYER DECISIONS START

    handleClickPlayerDecision = (e) => {
        const targetId = e.target.id
        if (this.state.turnToPlay === 'oop' &&  targetId.includes('oop') && this.state.toggleCount % 2 === 0) {
            this._handleOopPlayerDecision(e)
        }

        if (this.state.turnToPlay === 'ip' &&  targetId.includes('ip') && this.state.toggleCount % 2 !== 0 ) {
            this._handleIpPlayerDecision(e)
        }
    }

    _toggleTurnToPlay = () => {

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


    _updateFlopPlayFlow = (value) => {
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

    _updateTurnPlayFlow = (value) => {
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

    _updateRiverPlayFlow = (value) => {
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

    _handleOopPlayerDecision = (e) => {
        const targetId = e.target.id
        if (this.state.selectedCards.length === 3) {
            if (this.state.playFlow.flop.length < 2) {
                this._toggleTurnToPlay()
                this._updateFlopPlayFlow(targetId)
                this.setState({
                    displayInstruction: SELECT_IP_PLAYER_DECISION
                })
            }

        }
        if (this.state.selectedCards.length === 4) {
            if (this.state.playFlow.turn.length < 2) {
                this._toggleTurnToPlay()
                this._updateTurnPlayFlow(targetId)
            }
            this.setState({
                displayInstruction: SELECT_IP_PLAYER_DECISION
            })

        }
        if (this._isNotEndOfTheHand()) {
            if (this.state.selectedCards.length === 5 ) {
                if (this.state.playFlow.river.length < 2) {
                    this._toggleTurnToPlay()
                    this._updateRiverPlayFlow(targetId)
                }
                this.setState({
                    displayInstruction: SELECT_IP_PLAYER_DECISION
                })
            }
        }
    }

    _handleIpPlayerDecision = (e) => {
        const targetId = e.target.id
        if (this.state.selectedCards.length === 3) {
            if (this.state.playFlow.flop.length < 2) {
                this._toggleTurnToPlay()
                this._updateFlopPlayFlow(targetId)
                this.setState({
                    turnCardYellow : true,
                    displayInstruction: SELECT_TURN_CARD
                })
            }
        }
        if (this.state.selectedCards.length === 4) {
            if (this.state.playFlow.turn.length < 2) {
                this._toggleTurnToPlay()
                this._updateTurnPlayFlow(targetId)
                this.setState({
                    turnCardYellow : true,
                    displayInstruction: SELECT_RIVER_CARD
                })
            }
        }
        if (this.state.selectedCards.length === 5 ) {
            if (this.state.playFlow.river.length < 2) {
                this._toggleTurnToPlay()
                this._updateRiverPlayFlow(targetId)
            }
            this.setState({
                displayInstruction: HAND_IS_FINISHED
            })
        }
    }


    // PLAYFLOW PLAYER DECISIONS END


    // SELECT CARDS ON THE CHART START
    handleClickChart = (event) => {
        if (this._isNotEndOfTheHand()) {
            if (this._isNotIpPlayerDecision()) {
                if ( this._isCorrectId(event)
                    && this._isReadyToSelectBoardCards()
                ) {
                    this._updateSelectedCards(event)
                    this._setSelectFieldValue()
                }
            }
        }
    }

    _isNotEndOfTheHand = () => {
        return this.state.displayInstruction !== HAND_IS_FINISHED
    }

    _isNotIpPlayerDecision = () => {
        return this.state.displayInstruction !== SELECT_IP_PLAYER_DECISION
    }

    _isCorrectId = (event) => {
        return  !this.state.selectedCards.includes(event.target.id)
            && event.target.id !== ("communityCards")
            && event.target.id.length !== 0
    }

    _isReadyToSelectBoardCards = () => {
        return (this._isReadyToSelectFlopCards())
            || (this._isReadyToSelectTurnCard() )
            || (this._isReadyToSelectRiverCard() )
    }

    _isReadyToSelectFlopCards = () => {
        if (this.state.selectedCards.length === 2) {
            this.setState({
                turnCardYellow : false,
                displayInstruction: SELECT_OOP_PLAYER_DECISION
            })
        }
        return this.state.selectedCards.length < 3
    }

    _isReadyToSelectTurnCard = () => {
        this.setState({
            turnCardYellow : false,
            displayInstruction: SELECT_OOP_PLAYER_DECISION
        })
        return this.state.playFlow.flop.length === 2 && this.state.selectedCards.length === 3
    }

    _isReadyToSelectRiverCard = () => {
        this.setState({
            turnCardYellow : false,
        })
        return this.state.playFlow.turn.length === 2 && this.state.selectedCards.length === 4
    }

    _updateSelectedCards = (e) => {
        this.setState({
            selectedCards : this.state.selectedCards.concat([e.target.id]),
        })
    }

    _setSelectFieldValue = () => {
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


    addNewPokerHand = () => {
        axios.post('http://localhost:3001/api/v1/pokerhands', {pokerhand: {
                sc1: this.state.selectedCards[0],
                sc2: this.state.selectedCards[1],
                sc3: this.state.selectedCards[2],
                sc4:this.state.selectedCards[3],
                sc5: this.state.selectedCards[4],
                gamestreet: this.state.GameStreet,
                turntoplay: "oop",
                togglecount: this.state.togglecount,
                turnyellow: false,
                displayinstruction: "THE HAND IS FINISHED",
                flopoop: this.state.playFlow.flop[0],
                flopip: this.state.playFlow.flop[1],
                turnoop: this.state.playFlow.turn[0],
                turnip: this.state.playFlow.turn[1],
                riveroop: this.state.playFlow.river[0],
                rivrerip: this.state.playFlow.river[1]
            }
            })
            .then(res => {
                this.setState({
                    displayInstruction : "The hand has been saved"
                })


            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <header >
                    <h1> Poker Replayer with Hands ranges</h1>
                </header>

                <button onClick={this.addNewPokerHand}> Save Hand </button>

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
                            (this.state.displayInstruction.includes('OOP PLAYER DECISION')) ?
                                <div className='flex-item display-player-decision' > SELECT PLAYER'S DECISION </div>
                                : <div className='flex-item'> &nbsp;  </div>

                        }
                        <PlayerDecision
                            position="oop"
                            handleClick={this.handleClickPlayerDecision}
                            call='call_oop'
                            fold='fold_oop'
                            check='check_oop'
                            betFold='bet_fold_oop'
                            checkFold='check_fold_oop'
                            raiseFold='raise_fold_oop'
                            betCall='bet_call_oop'
                            checkCall='check_call_oop'
                            raiseCall='raise_call_oop'
                            betRaise='bet_raise_oop'
                            checkRaise='check_raise_oop'
                            raiseRaise='raise_raise_oop'
                        />
                    </div>


                    <DropDownGameStage
                        value={this.state.GameStreet}
                    />

                    <div className='flex-column'>
                        {
                            (this.state.displayInstruction.includes('IP PLAYER DECISION')) ?
                                <div className='flex-item display-player-decision' > SELECT PLAYER'S DECISION </div>
                                : <div className='flex-item'> &nbsp;  </div>

                        }
                        <PlayerDecision
                            position = "ip"
                            handleClick={this.handleClickPlayerDecision}
                            call='call_ip'
                            fold='fold_ip'
                            check='check_ip'
                            betFold='bet_fold_ip'
                            checkFold='check_fold_ip'
                            raiseFold='raise_fold_ip'
                            betCall='bet_call_ip'
                            checkCall='check_call_ip'
                            raiseCall='raise_call_ip'
                            betRaise='bet_raise_ip'
                            checkRaise='check_raise_ip'
                            raiseRaise='raise_raise_ip'
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

export default Main;
