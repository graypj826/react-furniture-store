import React, { Component } from "react"
import ItemCard from "../ItemCard/itemCard.jsx"

class ItemCardContainer extends Component {
    render(){
        return(
            <div> 
                <ItemCard />
                <h1> Hello World! </h1>
            </div>
        )
    }
}

export default ItemCardContainer;