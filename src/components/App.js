import React, { Component } from 'react'

import Main from './Main'
import axios from 'axios'
import PreviousHands from './PreviousHands'

const DEFAULT_MESSAGE =  'SELECT THREE FLOP CARDS'

const ButtonRoute = ({label, handleClick}) => {
    return (
        <button onClick={handleClick}> {label} </button>
    )
}

class App extends Component {

    state = {
       showPreviousHands: false
    }

    handleClickPreviousHands = () => {
        this.state.showPreviousHands ?
        this.setState({
            showPreviousHands: false
        })
            :  this.setState({
                showPreviousHands: true
            })
    }
    // SELECT CARDS ON THE CHART END

  render() {

      return (
      <div>
          {
              this.state.showPreviousHands ?
                  <div>
                      <ButtonRoute label='GO BACK TO MAIN PAGE'
                                   handleClick={this.handleClickPreviousHands}
                      />
                      <PreviousHands/>
                  </div>
                  :
                  <div>
                      <Main/>
                  <ButtonRoute
                      label='SEE PREVIOUS HANDS'
                      handleClick={this.handleClickPreviousHands}
                  />
                  </div>
          }
      </div>
    );
  }
}

export default App;
