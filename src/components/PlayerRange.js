import React, {Component} from 'react'

class PlayerRange extends Component {

    render() {
        return(
            <div className={`${this.props.position}-position flex-item`}>
                {this.props.position.toUpperCase()}
                <div>
                    <button> {`Enter ${this.props.position.toUpperCase()} range`} </button>
                </div>
                <div id='player-decision' className='flex-player-decision'>
                    <div className='flex-player-decision-item'>
                        Preflop
                    </div>
                    <div className='flex-player-decision-item'>
                        {this.props.preflop}
                    </div>
                    <div className='flex-player-decision-item'>
                        Flop
                    </div>
                    <div className='flex-player-decision-item'>
                        {this.props.flop}
                    </div>
                    <div className='flex-player-decision-item'>
                        Turn
                    </div>
                    <div className='flex-player-decision-item'>
                        {this.props.turn}
                    </div>
                    <div className='flex-player-decision-item'>
                        River
                    </div>
                    <div className='flex-player-decision-item'>
                        {this.props.river}
                    </div>
                </div>

            </div>
        )
    }

}


export default PlayerRange
