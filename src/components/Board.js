import React, { Component } from 'react'


class Board extends Component {

    render() {
        return(
                <div className='flex-container flex-item'>

                    <div className='board flex-item'>
                        BOARD
                        <div>
                            <button> ENTER COMMUNITY CARDS </button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Board