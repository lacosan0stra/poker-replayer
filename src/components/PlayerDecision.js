import React, { Component } from 'react'

class PlayerDecision extends Component {
    render() {
        return (
            <div>
                <div className='flex-item'>
                    {this.props.position.toUpperCase()}  PLAYER OPTIONS
                    <div className='flex-container' onClick={this.props.handleClick}>
                        <div className='flex-item' id={this.props.bet}>
                            BET
                        </div>
                        <div className='flex-item' id={this.props.check}>
                            CHECK
                        </div>
                        <div className='flex-item' id={this.props.call} >
                            CALL
                        </div>
                        <div className='flex-item' id={this.props.raise} >
                            RAISE
                        </div>
                        <div className='flex-item' id={this.props.fold}>
                            FOLD
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerDecision
