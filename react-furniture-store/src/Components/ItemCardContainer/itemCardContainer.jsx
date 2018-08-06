import React, { Component } from "react"
import ItemCard from "../ItemCard/itemCard.jsx"

class ItemCardContainer extends Component {
    render(){
       console.log("this is the this.props.item", this.props.item )
        return(
            <div>
                 <h1> ItemCardContainer </h1>
                 {this.props.item.map(item => 
                <ItemCard 
                    key={item.id}
                    item={item}
                />  
                )}
               
            </div>
        )
    }
}

export default ItemCardContainer;