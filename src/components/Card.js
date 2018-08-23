import React, { Component } from 'react'



class Card extends Component {

    state = {
       isClicked: false
    }

    handleCardClick = () => {
       this.setState({
           isClicked: true
       })
    }

    render() {
        var context = require.context('../1x', true, /\.(png)$/);
        var files={};
        context.keys().forEach((filename)=>{
            files[filename] = context(filename);
        });


        return (
            <div
                id={this.props.id}
                onClick={this.handleCardClick}
                className= {this.state.isClicked? 'selected flex-item'  : 'flex-item'}
            >
                {this.props.textValue ?
                    this.props.textValue
                    :
                    <img
                        src={this.props.srcUrl ? files["./"+this.props.srcUrl] : files["./unknown.png"]}
                        alt= "playing card"
                        width={this.props.widthImg}
                        height={this.props.heightImg}
                    />
                }
            </div>
        )
    }
}

export default Card
