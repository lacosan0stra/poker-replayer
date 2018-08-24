import React, { Component } from 'react'
var context = require.context('../1x', true, /\.(png)$/);
var files={};
var selectedClass = {}

context.keys().forEach((filename)=>{
    files[filename] = context(filename);
    selectedClass[filename] = 'flex-item'
});


console.log(files)
console.log(selectedClass)

class Card extends Component {


    render() {

        return (
            <div
                id={this.props.id}
                onClick={this.props.handleClick}
                className={this.props.classCard}

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
