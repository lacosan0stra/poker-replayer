import React, { Component } from 'react'
import CommunityCards from './CommunityCards'



class HistoryHand extends Component {

    state = {

    }


    render() {
        return (
            <div>
                <CommunityCards
                    flopOne = {this.props.flopOne}
                    flopTwo = {this.props.flopTwo}
                    flopThree = {this.props.flopThree}
                    turn = {this.props.turn}
                    river = {this.props.river}
                    />

            </div>
    )
    }

}

export default HistoryHand;
