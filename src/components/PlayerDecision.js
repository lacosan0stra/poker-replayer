import React, { Component } from 'react'

class PlayerDecision extends Component {
    render() {
        return (
            <div>
                <div className='flex-item'>
                    {this.props.position.toUpperCase()}  PLAYER OPTIONS
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
                        <div className='flex-item'>
                            RAISE
                        </div>
                        <div className='flex-item'>
                            FOLD
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerDecision
