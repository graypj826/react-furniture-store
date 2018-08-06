import React, { Component } from "react"

class ItemCard extends Component {
    
    render(){
        return(
            <div>
                <h1> Item Card </h1>
                <img src={this.props.item.img}/>
                {this.props.item.id}
                {this.props.item.value}
                <button> + </button>
            </div>
        )
    }
}

export default ItemCard;