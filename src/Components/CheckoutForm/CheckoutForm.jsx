import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import './style.css';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.charge = this.charge.bind(this)
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
  async charge() {
    console.log("charge amount submitted")
    let amount = this.props.totalCost
    try{
      let response = await fetch("https://furnitureapi.herokuapp.com/charge/total", {
        method: "POST",
        headers: {"Access-Control-Allow-Origin":" https://reactfurniturestore.herokuapp.com"
          "Content-Type": "application/json"},
        body: JSON.stringify(amount)
      });
      const content = await response.json()
      console.log(content)
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
        <button onClick={this.charge}>Pay : {this.props.totalCost}</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);