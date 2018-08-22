import React, { Component } from 'react'


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
                                    <td id="1_heart.png">Ace</td>
                                    <td id="1_spade.png">Ace</td>
                                    <td id="1_club.png">Ace</td>
                                    <td id="1_diamond.png">Ace</td>
                                </tr>
                                <tr>
                                    <td id="king_heart.png">King</td>
                                    <td id="king_spade.png">King</td>
                                    <td id="king_club.png">King</td>
                                    <td id="king_diamond.png">King</td>
                                </tr>
                                <tr>
                                    <td id="queen_heart.png">Queen</td>
                                    <td id="queen_spade.png">Queen</td>
                                    <td id="queen_club.png">Queen</td>
                                    <td id="queen_diamond.png">Queen</td>
                                </tr>
                                <tr>
                                    <td id="jack_heart.png">Jack</td>
                                    <td id="jack_spade.png">Jack</td>
                                    <td id="jack_club.png">Jack</td>
                                    <td id="jack_diamond.png">Jack</td>
                                </tr>
                                <tr>
                                    <td id="10_heart.png">Ten</td>
                                    <td id="10_spade.png">Ten</td>
                                    <td id="10_club.png">Ten</td>
                                    <td id="10_diamond.png">Ten</td>
                                </tr>
                                <tr>
                                    <td id="9_heart.png">Nine</td>
                                    <td id="9_spade.png">Nine</td>
                                    <td id="9_club.png">Nine</td>
                                    <td id="9_diamond.png">Nine</td>
                                </tr>
                                <tr>
                                    <td id="8_heart.png">Eight</td>
                                    <td id="8_spade.png">Eight</td>
                                    <td id="8_club.png">Eight</td>
                                    <td id="8_diamond.png">Eight</td>
                                </tr>
                                <tr>
                                    <td id="7_heart.png">Seven</td>
                                    <td id="7_spade.png">Seven</td>
                                    <td id="7_club.png">Seven</td>
                                    <td id="7_diamond.png">Seven</td>
                                </tr>
                                <tr>
                                    <td id="6_heart.png">Six</td>
                                    <td id="6_spade.png">Six</td>
                                    <td id="6_club.png">Six</td>
                                    <td id="6_diamond.png">Six</td>
                                </tr>
                                <tr>
                                    <td id="5_heart.png">Five</td>
                                    <td id="5_spade.png">Five</td>
                                    <td id="5_club.png">Five</td>
                                    <td id="5_diamond.png">Five</td>
                                </tr>
                                <tr>
                                    <td id="4_heart.png">Four</td>
                                    <td id="4_spade.png">Four</td>
                                    <td id="4_club.png">Four</td>
                                    <td id="4_diamond.png">Four</td>
                                </tr>
                                <tr>
                                    <td id="3_heart.png">Three</td>
                                    <td id="3_spade.png">Three</td>
                                    <td id="3_club.png">Three</td>
                                    <td id="3_diamond.png">Three</td>
                                </tr>
                                <tr>
                                    <td id="2_heart.png">Deuce</td>
                                    <td id="2_spade.png">Deuce</td>
                                    <td id="2_club.png">Deuce</td>
                                    <td id="2_diamond.png">Deuce</td>
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