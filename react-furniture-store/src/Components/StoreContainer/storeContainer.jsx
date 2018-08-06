import React, { Component } from "react"
import Title from "../Title/title.jsx"
import ShoppingCart from "../ShoppingCart/shoppingCart.jsx"
import ItemCarousel from "../ItemCarousel/itemCarousel.jsx"
import ItemCardContainer from "../ItemCardContainer/itemCardContainer.jsx"
import CreateItem from "../CreateItem/CreateItem";

class StoreContainer extends Component {
    constructor () {
        super(),
        this.state = {
            items: [
                {id: 1, value: 0, count:0, img: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg"},
                {id: 2, value: 0, count:0, img: "https://i5.walmartimages.com/dfw/4ff9c6c9-b395/k2-_38379e60-692d-4690-8ff6-215f858fec0b.v1.jpg?odnWidth=912&odnHeight=500&odnBg=ffffff"},
                {id: 3, value: 0, count:0, img: "https://images.furniture.com/living-rooms/sofas/bart-espresso-klik-klak-10952807.jpg"},
                {id: 4, value: 0, count:0, img: "https://target.scene7.com/is/image/Target/50085279?wid=328&hei=328&qlt=80&fmt=pjpeg"},
            ]
        }
    }
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

            const parsedResponse = await createMovie.json();

            this.setState({items: [...this.state.items, parsedResponse.data]});
        } catch (err) {
            console.log(err);
        }
    }
    handleIncrement = (item) => {
        console.log("event increment called")
        console.log(item)
        const newItemsArray = [...this.state.item]
        const index = newItemsArray.indexOf(item);
        newItemsArray[index] = {...item};
        newItemsArray[index].count++;
        this.setState({newItemsArray});  
    };
    handleReset = () =>{
        console.log("event reset called")
        const items = this.state.items.map(counter => {
            counter.value =0;
            return counter;
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
                    onhandleIncrement={this.state.handleIncrement}
                />

                <CreateItem addItem={this.addItem}/>
                
            </div>
        )   
    }
}

export default StoreContainer;