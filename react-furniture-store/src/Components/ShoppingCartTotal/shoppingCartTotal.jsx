import React, { Component } from "react"

class ShoppingCartTotal extends Component {
    render(){ 
        return(
            <div>
                 <p> your shopping cart total : </p>
                 {this.props.totalPrice}
               
            </div>
        )
    }
}

export default ShoppingCartTotal;