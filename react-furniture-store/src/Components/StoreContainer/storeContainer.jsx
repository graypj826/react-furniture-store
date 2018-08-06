import React, { Component } from "react"
import Title from "../Title/title.jsx"
import ShoppingCart from "../ShoppingCart/shoppingCart.jsx"
import ItemCarousel from "../ItemCarousel/itemCarousel.jsx"
import ItemCardContainer from "../ItemCardContainer/itemCardContainer.jsx"

class StoreContainer extends Component {
    constructor () {
        super(),
        this.state = {
            items: [
            ]
        }
    }
    componentDidMount(){
        this.getItems().then((items)=>{
            this.setState({items: items.data})
        }).catch((err) => {
            console.log(err);
        })
    }
    getItems = async () => {
        const items = await fetch('http://localhost:9000/api/v1/items', {
            method: "GET" 
        })
        const itemsJson = await items.json();
        console.log(itemsJson)
        return itemsJson;
    }
    handleIncrement = (item) => {
        console.log("event increment called")
        console.log(item)
        const newItemsArray = [...this.state.items]
        const index = newItemsArray.indexOf(item);
        console.log(index)
        newItemsArray[index] = {...item};
        console.log(newItemsArray[index])
        newItemsArray[index].count++;
        console.log(newItemsArray[index])
        console.log({newItemsArray})
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
    render(){
        return(
            <div>
                <h1> Store Container </h1>
                <Title />
                <ShoppingCart item={this.state.items} onReset = {this.state.handleReset}
                onDelete = {this.state.handleDelete}    
                />
                
                <ItemCarousel 
                    item={this.state.items}
                />

                <ItemCardContainer 
                    item={this.state.items}
                    onIncrement={this.handleIncrement}
                />
                
            </div>
        )   
    }
}

export default StoreContainer;