import React, { Component } from 'react'
import Card from "./Card";
var context = require.context('../1x', true, /\.(png)$/);
var classNames = {};
var files={};


context.keys().forEach((filename)=>{
    classNames[filename] = 'flex-item';
    files[filename] = context(filename);
});

class Board extends Component {

    state = {
        classCardObject: classNames,
        clickCount : 0
    }

    handleClick = (e) => {

        const newClickCount = this.state.clickCount +1

        if (this.state.clickCount < 5) {
            const newClassObject = this.state.classCardObject
            newClassObject["./" + e.target.id] = "flex-item selected"
            this.setState({
                classCardObject: newClassObject,
                clickCount: newClickCount
            })
        }

    }

    render() {
        const objMatchOrder ={
            1: '1',
            2:'king',
            3: 'queen',
            4: 'jack',
            5: '10',
            6: '9',
            7: '8',
            8: '7',
            9: '6',
            10: '5',
            11: '4',
            12: '3',
            13: '2'
        }

        const suits = ["_heart.png", "_spade.png", "_club.png", "_diamond.png" ]

        const ArrayCardValues = [ "Ace", "King", "Queen", "Jack", "Ten", "Nine",
            "Eight", "Seven" , "Six", "Five", "Four", "Three", "Two" ]

        return(
                <div className='flex-container flex-item'>

                    <div className='board flex-item'>
                        <div>

                            <table id="communityCards" onClick={this.props.handleClick} >
                                <tbody>
                                <tr>
                                    <th className="suit redSuit" align="center">HEARTS</th>
                                    <th className="suit blackSuit" align="center">SPADES</th>
                                    <th className="suit blackSuit" align="center">CLUBS</th>
                                    <th className="suit redSuit" align="center">DIAM'S</th>
                                </tr>
                                <tr>
                                    {
                                        suits.map((suit)=> {
                                            return (
                                                <td key={suit}>
                                                    {ArrayCardValues.map((value, index) => {

                                                        let idKey = objMatchOrder[index+1] + suit
                                                        let cardName = value
                                                        return ( <Card key={index}
                                                                       id={idKey}
                                                                       textValue={cardName}
                                                                       classCard =  {`${this.state.classCardObject[`./${idKey}`]}`}
                                                                       handleClick={this.handleClick}
                                                        />)
                                                    })
                                                    }
                                                </td>
                                            )
                                        } )
                                    }

                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
        )
    }
}

export default Board

