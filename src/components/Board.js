import React, { Component } from 'react'
import Card from "./Card";
var context = require.context('../1x', true, /\.(png)$/);
var classNames = {};
var files={};

const handValues = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'  ]
const objHands = {}

handValues.forEach((item, index)=>{
    objHands[index +1] = handValues[index]
})

context.keys().forEach((filename)=>{
    classNames[filename] = 'flex-item';
    files[filename] = context(filename);
});

class Board extends Component {



    render() {
        const objBroadwayHands ={
            11 : 'jack',
            12 : 'queen',
            13 : 'king'
        }

        const suits = ["_heart.png", "_spade.png", "_club.png", "_diamond.png" ]

        return(
                <div className='flex-container flex-item'>

                    <div className='board flex-item'>
                        <div>

                            <table id="communityCards" onClick={this.props.handleClick}>
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
                                                <td>
                                                    {Object.keys(objHands).map((key,value) => {
                                                        let idKey
                                                        if ( key < 11) {
                                                            idKey = key + suit
                                                        } else {
                                                            idKey = objBroadwayHands[key] + suit
                                                        }
                                                        const cardName = objHands[key]
                                                        return ( <Card id={idKey} textValue={cardName}/>)

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