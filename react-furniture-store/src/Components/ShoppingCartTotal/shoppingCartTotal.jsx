import React, { Component } from "react"
import './style.css';

class ShoppingCartTotal extends Component {
    render(){ 
        return(
            <div className="shopping-cart-total-component">
                 <p> your shopping cart total : </p>
                 {this.props.totalCost}
               
            </div>
        )
    }
}

export default ShoppingCartTotal;