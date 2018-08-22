import React, { Component } from 'react'

class Card extends Component {

    render() {
        var context = require.context('../1x', true, /\.(png)$/);
        var files={};
        context.keys().forEach((filename)=>{
            files[filename] = context(filename);
        });

        return (
            <div
                id={this.props.id}
                className='flex-item'
            >
                <img
                    src={files["./"+this.props.srcUrl]}
                    alt= {this.props.srcUrl}
                    width={this.props.widthImg}
                    height={this.props.heightImg}
                />
            </div>
        )
    }
}

export default Card
