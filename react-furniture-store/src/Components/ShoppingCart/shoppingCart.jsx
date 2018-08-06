import React, { Component } from "react"

class ShoppingCart extends Component {
    render(){
        return(
            <div>
                {this.props.item.count}
                <img src="https://www.materialui.co/materialIcons/action/shopping_cart_black_128x128.png" />
                <button
                    // onClick = {this.handleReset}
                    // className="btn btn-primary btn-sm m-2"
                    > 
                    Reset
                </button>
                <button> 
                    checkout
                </button>
            </div>
            //stripe will go here
        )
    }
}

export default ShoppingCart 