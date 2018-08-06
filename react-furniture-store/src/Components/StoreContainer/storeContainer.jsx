import React, { Component } from "react"
import Title from "../Title/title.jsx"
import ShoppingCart from "../ShoppingCart/shoppingCart.jsx"
import ItemCarousel from "../ItemCarousel/itemCarousel.jsx"
import ItemCardContainer from "../ItemCardContainer/itemCardContainer.jsx"

class StoreContainer extends Component {
    constructor () {
        super(),
        this.state = {
            item: [
                {id: 1, value: 0, img: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg"},
                {id: 2, value: 0, img: "https://i5.walmartimages.com/dfw/4ff9c6c9-b395/k2-_38379e60-692d-4690-8ff6-215f858fec0b.v1.jpg?odnWidth=912&odnHeight=500&odnBg=ffffff"},
                {id: 3, value: 0, img: "https://images.furniture.com/living-rooms/sofas/bart-espresso-klik-klak-10952807.jpg"},
                {id: 4, value: 0, img: "https://target.scene7.com/is/image/Target/50085279?wid=328&hei=328&qlt=80&fmt=pjpeg"},
            ]
        }
    }
    
    render(){
        return(
            <div>
                <Title />
                <ShoppingCart />
                <h1> Hello World! </h1>
                <ItemCarousel />
                <ItemCardContainer />
                
            </div>
        )   
    }
}

export default StoreContainer;