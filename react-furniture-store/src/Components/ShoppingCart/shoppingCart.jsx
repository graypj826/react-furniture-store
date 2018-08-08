import React, { Component } from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm.jsx"
import {Elements, StripeProvider} from 'react-stripe-elements';
import ShoppingCartTotal from "../ShoppingCartTotal/shoppingCartTotal"

class ShoppingCart extends Component {
    render(){
        return(
            <div>
                <img src="https://www.materialui.co/materialIcons/action/shopping_cart_black_128x128.png" />
                <h1> Shopping Cart </h1>
                {this.props.item.count}
                <ul>
                    {console.log(this.props.shoppingCart)}
                    {this.props.shoppingCart.map((cartItem, i) => {
                        return (
                            <li key={i}>{cartItem.title} : {cartItem.price}</li>
                        )
                    })}
                </ul>
                <ShoppingCartTotal totalCost={this.props.totalCost} />
                <button
                    onClick = {this.handleReset}
                    className="btn btn-primary btn-sm m-2"
                    > 
                    Reset
                </button>
                <button 
                    onClick={this.props.checkOut.bind(this, this.props.totalCost)}
                    > 
                        checkout
                </button> 
                <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
                <div className="example">
                <h1>React Stripe Elements Example</h1>
                <Elements>
                    <CheckoutForm totalCost={this.props.totalCost}/>
                </Elements>
                </div>
            </StripeProvider>
          </div>
        )
    }
}

export default ShoppingCart; 