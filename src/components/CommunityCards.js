import React, {Component} from 'react'
import Card from './Card'


class CommunityCards extends Component {

    state = {
        selectedCards : []
    }


    render() {
        return (

            <div>
                <button> ENTER COMMUNITY CARDS </button>
                <div className='flex-container'>
                    <Card
                        srcUrl = {this.props.flopOne}
                        widthImg = "85"
                        heightImg = "126"
                    />
                    <Card
                        srcUrl = {this.props.flopTwo}
                        widthImg = "85"
                        heightImg = "126"

                    />
                    <Card
                        srcUrl = {this.props.flopThree}
                        widthImg = "85"
                        heightImg = "126"
                    />
                    <Card
                        srcUrl = {this.props.turn}
                        widthImg = "85"
                        heightImg = "126"
                    />
                    <Card
                        srcUrl = {this.props.river}
                        widthImg = "85"
                        heightImg = "126"
                    />
                </div>
            </div>

        )
    }

}


export default CommunityCards