import React, { Component } from 'react'

class PlayerDecision extends Component {
    render() {
        return (
            <div>

                <div className='flex-item'>
                    {this.props.position.toUpperCase()}  PLAYER OPTIONS
                    <div className='flex-container' onClick={this.props.handleClick}>
                        <div className='flex-item' id={this.props.call} >
                            CALL
                        </div>
                        <div className='flex-item' id={this.props.check}>
                            CHECK
                        </div>
                        <div className='flex-item' id={this.props.fold}>
                            FOLD
                        </div>
                    </div>
                    <div className='flex-container' onClick={this.props.handleClick}>
                        <div className='flex-item' id={this.props.betFold}>
                            BET-Fold
                        </div>
                        <div className='flex-item' id={this.props.checkFold}>
                            CHECK-Fold
                        </div>
                        <div className='flex-item' id={this.props.raiseFold} >
                            RAISE-Fold
                        </div>
                    </div>
                    <div className='flex-container' onClick={this.props.handleClick}>
                        <div className='flex-item' id={this.props.betCall}>
                            BET-Call
                        </div>
                        <div className='flex-item' id={this.props.checkCall}>
                            CHECK-Call
                        </div>
                        <div className='flex-item' id={this.props.raiseCall} >
                            RAISE-Call
                        </div>
                    </div>
                    <div className='flex-container' onClick={this.props.handleClick}>
                        <div className='flex-item' id={this.props.betRaise}>
                            BET-Raise
                        </div>
                        <div className='flex-item' id={this.props.checkRaise}>
                            CHECK-Raise
                        </div>
                        <div className='flex-item' id={this.props.raiseRaise} >
                            RAISE-Raise
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerDecision
