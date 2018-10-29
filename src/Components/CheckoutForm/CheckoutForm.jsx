import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import './style.css';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  async submit(ev) {
    console.log("checkout form submitted")
    try{
      // await this.charge(this.props.totalCost);
      let {token} = await this.props.stripe.createToken({name: "Name", amount:this.props.totalCost});
      console.log(token);
      let response = await fetch("https://furnitureapi.herokuapp.com/charge", {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: token.id
    });

    if (response.ok) console.log("Purchase Complete!")
    this.props.clearCart()
    this.props.toggle()
    } catch(err){
      console.log(err)
    }
  }
  async charge(amount) {
    console.log("charge amount submitted")
    try{
      let response = await fetch("https://furnitureapi.herokuapp.com/charge/total", {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: amount
      });
    } catch(err){
      console.log(err)

    }
  }
  render() {
    if (this.props.purchaseComplete) return <h1>Purchase Complete</h1>;
  
    return (
      <div className="checkout checkout-form-component">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.charge(this.props.totalCost)}>Pay : {this.props.totalCost}</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);