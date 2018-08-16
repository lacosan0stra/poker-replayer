import React, {Component} from 'react'

class PlayerRange extends Component {

    render() {
        return(
            <div className={`${this.props.position}-position flex-item`}
            >
                {this.props.position.toUpperCase()}
                <div>
                    <button> {`Enter ${this.props.position.toUpperCase()} range`} </button>
                </div>
            </div>
        )
    }

}


export default PlayerRange
