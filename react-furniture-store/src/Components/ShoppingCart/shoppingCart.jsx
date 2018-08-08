import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from "../CheckoutForm/CheckoutForm.jsx"

import ShoppingCartTotal from "../ShoppingCartTotal/shoppingCartTotal"

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          backdrop: true
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }    
    render(){
            return (
              <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
                    
                    
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
                            <div className="stripProvider">
                                <h1>React Stripe Elements</h1>
                                <Elements>
                                    <CheckoutForm 
                                    totalCost={this.props.totalCost}
                                    submit = {this.props.submit}    
                                    />
                                </Elements>
                            </div>
                        </StripeProvider>
                    </div>
                  
                  
                  
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
            );
          }
    }

export default ShoppingCart; 