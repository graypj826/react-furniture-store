import React, { Component } from "react"

class ItemCard extends Component {

    render(){
        return(
            <div>
                <h1> Item Card </h1>
                <p> Quantity? </p>
                {this.props.item.count}
                <img src={this.props.item.img}/>
                {this.props.item.id}
                {this.props.item.value}
                <button onClick={this.props.onIncrement.bind(null,this.props.item)}> + </button>
            {/* .bind */}
            </div>
        )
    }
}

export default ItemCard;