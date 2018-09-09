import React, {Component} from 'react'


class PlayerRange extends Component {


    displayDecision = ( decisionId) => {
        if (decisionId.includes('oop')) {
            const res = decisionId.slice(0,-4);
            return res.toUpperCase()
        }
        if (decisionId.includes('ip')) {
            const res = decisionId.slice(0,-3);
            return res.toUpperCase()
        }
    }

    render() {
        return(
            <div className={`${this.props.position}-position flex-item`}>
                {this.props.position.toUpperCase()}
                <div>

                </div>
                <div id='player-decision' className='flex-player-decision'>
                    <div className='flex-player-decision-item header-title-streets'>
                        FLOP
                    </div>
                    <div className='flex-player-decision-item display-player-decision'>
                        {this.displayDecision(`${this.props.flop}`)}
                    </div>
                    <div className='flex-player-decision-item header-title-streets '>
                        TURN
                    </div>
                    <div className='flex-player-decision-item display-player-decision'>
                        {this.displayDecision(`${this.props.turn}`)}
                    </div>
                    <div className='flex-player-decision-item header-title-streets '>
                        RIVER
                    </div>
                    <div className='flex-player-decision-item display-player-decision'>
                        {this.displayDecision(`${this.props.river}`)}
                    </div>
                </div>

            </div>
        )
    }

}


export default PlayerRange
