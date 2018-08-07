import React, { Component } from "react"
import Title from "../Title/title.jsx"
import ShoppingCart from "../ShoppingCart/shoppingCart.jsx"
import ItemCarousel from "../ItemCarousel/itemCarousel.jsx"
import ItemCardContainer from "../ItemCardContainer/itemCardContainer.jsx"

class StoreContainer extends Component {
    constructor () {
        super(),
        this.state = {
            items: [],
            shoppingCart: [],
            totalPrice: 0
        }
    };
    componentDidMount(){
        this.getItems().then((items) => {
            this.setState({
                items: items.data
            })
        }).catch((err) => {
            console.log(err);
        });
    };
    getItems = async () => {
        const items = await fetch('http://localhost:9000/api/v1/items', {
            method: "GET" 
        });
        const itemsJson = await items.json();
        console.log(itemsJson);
        return itemsJson;
    };
    addItem = async (item, e) => {
        e.preventDefault();

        try {
            const createItem = await fetch('http://localhost:9000/api/v1/items', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const parsedResponse = await createItem.json();

            this.setState({items: [...this.state.items, parsedResponse.data]});
        } catch (err) {
            console.log(err);
        }
    };
    handleIncrement = (item) => {
        const newItemsArray = [...this.state.items]
        const index = newItemsArray.indexOf(item);
        newItemsArray[index] = {...item};
        newItemsArray[index].count++;
        this.setState({items : newItemsArray});  
    };
    handleReset = () =>{
        console.log("event reset called")
        const items = this.state.items.map(item => {
            item.value =0;
            return item;
        })
        this.setState({items})
    };
    handleDelete =(counterId)=> {
        console.log("event delete called", counterId)
        const counters = this.state.counters.filter(counter => counter.id !== counterId)
        this.setState({counters})
    };
     //Patrick ADD here--------------------------------
     addToCart = (item) => {
        console.log("event added item to cart")
        console.log(item)
        const newCartArray = [...this.state.shoppingCart]
        const newCartItem = {...item};
        console.log(newCartItem)
        newCartArray.push(newCartItem)
        console.log({newCartArray})
        this.setState({shoppingCart : newCartArray});  
    };
    handleItemClick = (item) => {
        // this.handleIncrement(item);
        this.addToCart(item);
        this.calculateTotal();
    }
    calculateTotal = () => {
        console.log("calculate total")
        let total = 0
        this.state.shoppingCart.map(item => {
            total += item.price
            return total
        })
        this.setState({totalPrice : total})
        console.log(total)
        console.log(this.state.totalPrice)
    }
    render(){
        return(
            <div>
                <h1> Store Container </h1>
                <Title />
                <ShoppingCart item={this.state.items} shoppingCart={this.state.shoppingCart} totalPrice={this.state.totalPrice} onReset = {this.state.handleReset}
                onDelete = {this.state.handleDelete}     
                />
                
                <ItemCarousel 
                    item={this.state.items}
                />

                <ItemCardContainer 
                    item={this.state.items}
                    // onIncrement={this.handleIncrement}
                    // addToCart={this.addToCart}
                    // calculateTotal={this.calculateTotal}
                    handleItemClick={this.handleItemClick}
                />

                
            </div>
        )   
    }
}

export default StoreContainer;