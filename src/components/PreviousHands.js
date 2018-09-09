import React, { Component } from 'react'
import axios from 'axios'
import CommunityCards from './CommunityCards'
import HistoryHand from "./HistoryHand";
import PlayerRange from './PlayerRange'



class PreviousHands extends Component {

        state = {
            pokerhands : []
                }


    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/pokerhands')
            .then(res => {
                console.log(res.data)
                this.setState({
                    pokerhands: [res.data]
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                { this.state.pokerhands.map(pokerhand => {
                    return (
                        pokerhand.map(hand => {
                            return(
                                <div key={hand.id}>
                                    {/*{JSON.stringify(hand)}*/}
                                    <div className='flex-container'>

                                        <HistoryHand
                                            flopOne = {hand.sc1}
                                            flopTwo = {hand.sc2}
                                            flopThree = {hand.sc3}
                                            turn = {hand.sc4}
                                            river = {hand.sc5}
                                        />
                                        <PlayerRange
                                            position='oop'
                                            flop={[hand.flopoop]}
                                            turn={hand.turnoop}
                                            river={hand.riveroop}
                                        />
                                        <PlayerRange
                                            position='ip'
                                            flop={[hand.flopip]}
                                            turn={hand.turnip}
                                            river={hand.rivrerip}
                                        />
                                    </div>
                                </div>



                            )
                        })
                    )
                })}

            </div>

        )
    }
}

export default PreviousHands
