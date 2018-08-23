import React, { Component } from 'react'
import Card from "./Card";


class Board extends Component {

    render() {

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
                                    <td > <Card id="1_heart.png" textValue='Ace' /></td>
                                    <td > <Card id="1_spade.png" textValue='Ace'/></td>
                                    <td > <Card id="1_club.png" textValue='Ace'/></td>
                                    <td > <Card id="1_diamond.png" textValue='Ace'/></td>
                                </tr>
                                <tr>
                                    <td > <Card id="king_heart.png" textValue='King' /></td>
                                    <td > <Card id="king_spade.png" textValue='King'/></td>
                                    <td > <Card id="king_club.png" textValue='King'/></td>
                                    <td > <Card id="king_diamond.png" textValue='King'/></td>
                                </tr>
                                <tr>
                                    <td > <Card id="queen_heart.png" textValue='Queen' /></td>
                                    <td > <Card id="queen_spade.png" textValue='Queen'/></td>
                                    <td > <Card id="queen_club.png" textValue='Queen'/></td>
                                    <td > <Card id="queen_diamond.png" textValue='Queen'/></td>

                                </tr>
                                <tr>
                                    <td > <Card id="jack_heart.png" textValue='Jack' /></td>
                                    <td > <Card id="jack_spade.png"textValue='Jack'/></td>
                                    <td > <Card id="jack_club.png" textValue='Jack'/></td>
                                    <td > <Card id="jack_diamond.png"textValue='Jack'/></td>

                                </tr>
                                <tr>
                                    <td > <Card id="10_heart.png" textValue='Ten' /></td>
                                    <td > <Card id="10_spade.png" textValue='Ten'/></td>
                                    <td > <Card id="10_club.png" textValue='Ten'/></td>
                                    <td > <Card id="10_diamond.png" textValue='Ten'/></td>

                                </tr>
                                <tr>
                                    <td > <Card id="9_heart.png" textValue='Nine' /></td>
                                    <td > <Card id="9_spade.png" textValue='Nine'/></td>
                                    <td > <Card id="9_club.png" textValue='Nine'/></td>
                                    <td > <Card id="9_diamond.png" textValue='Nine'/></td>

                                </tr>
                                <tr>
                                    <td > <Card id="8_heart.png" textValue='Eight' /></td>
                                    <td > <Card id="8_spade.png" textValue='Eight'/></td>
                                    <td > <Card id="8_club.png"textValue='Eight'/></td>
                                    <td > <Card id="8_diamond.png" textValue='Eight'/></td>

                                </tr>
                                <tr>
                                    <td > <Card id="7_heart.png" textValue='Seven' /></td>
                                    <td > <Card id="7_spade.png" textValue='Seven'/></td>
                                    <td > <Card id="7_club.png" textValue='Seven'/></td>
                                    <td > <Card id="7_diamond.png" textValue='Seven'/></td>

                                </tr>
                                <tr>
                                    <td > <Card id="6_heart.png" textValue='Six' /></td>
                                    <td > <Card id="6_spade.png" textValue='Six'/></td>
                                    <td > <Card id="6_club.png" textValue='Six'/></td>
                                    <td > <Card id="6_diamond.png" textValue='Six'/></td>

                                </tr>
                                <tr>
                                    <td > <Card id="5_heart.png" textValue='Five' /></td>
                                    <td > <Card id="5_spade.png" textValue='Five'/></td>
                                    <td > <Card id="5_club.png" textValue='Five'/></td>
                                    <td > <Card id="5_diamond.png" textValue='Five'/></td>

                                </tr>
                                <tr>
                                    <td > <Card id="4_heart.png" textValue='Four' /></td>
                                    <td > <Card id="4_spade.png" textValue='Four'/></td>
                                    <td > <Card id="4_club.png" textValue='Four'/></td>
                                    <td > <Card id="4_diamond.png" textValue='Four'/></td>

                                </tr>
                                <tr>
                                    <td > <Card id="3_heart.png" textValue='Three' /></td>
                                    <td > <Card id="3_spade.png" textValue='Three'/></td>
                                    <td > <Card id="3_club.png" textValue='Three'/></td>
                                    <td > <Card id="3_diamond.png" textValue='Three'/></td>

                                </tr>
                                <tr>
                                    <td > <Card id="2_heart.png" textValue='Deuce' /></td>
                                    <td > <Card id="2_spade.png" textValue='Deuce'/></td>
                                    <td > <Card id="2_club.png" textValue='Deuce'/></td>
                                    <td > <Card id="2_diamond.png" textValue='Deuce'/></td>

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