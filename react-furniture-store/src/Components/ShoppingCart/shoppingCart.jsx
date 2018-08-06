import React, { Component } from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm.jsx"
import {Elements, StripeProvider} from 'react-stripe-elements';

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
                <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
                <div className="example">
                <h1>React Stripe Elements Example</h1>
                <Elements>
                    <CheckoutForm />
                </Elements>
                </div>
            </StripeProvider>
          </div>
        )
    }
}

export default ShoppingCart; 