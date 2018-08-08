import React, { Component } from "react"
import ItemCard from "../ItemCard/itemCard.jsx"

class ItemCardContainer extends Component {
    render(){
    
        return(
            <div>
                 <h1> ItemCardContainer </h1>
                 {this.props.item.map(item => 
                <ItemCard 
                    key={item._id}
                    item={item}
                    // onIncrement={this.props.onIncrement}
                    // addToCart={this.props.addToCart}
                    handleItemClick={this.props.handleItemClick}
                />  
                )}
               
            </div>
        )
    }
}

export default ItemCardContainer;