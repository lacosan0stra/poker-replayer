import React, { Component } from 'react'

var context = require.context('../1x', true, /\.(png)$/);
var files={};
context.keys().forEach((filename)=>{
    files[filename] = context(filename);
});

class Card extends Component {

    render() {

        return (
            <div
                id={this.props.id}
                className='flex-item'
            >
                <img
                    src={files["./"+this.props.srcUrl]}
                    alt= "playing card"
                    width={this.props.widthImg}
                    height={this.props.heightImg}
                />
            </div>
        )
    }
}

export default Card
