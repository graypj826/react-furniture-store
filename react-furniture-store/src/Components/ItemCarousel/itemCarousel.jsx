import React, { Component } from "react"

class ItemCarousel extends Component {
    render(){
        return(
            <div> 
                <h1> Item Carousel </h1>
                {this.props.item.map((item, i) => {
                    return <img src={item.img} key={item.id}/>
                })
                }
            </div>
        )
    }
}

export default ItemCarousel;