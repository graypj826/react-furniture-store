import React, { Component } from 'react';

class CreateItem extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            description: '',
            price: 0,
        }
    }
    updateItem = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }
    render() {
        console.log(this.props, ' this is props');
        return (
            <form onSubmit={this.props.addItem.bind(this, this.state)}>
                <label>
                    Item Title:
                    <input type="text" name="title" onChange={this.updateItem}/>
                </label>
                <label>
                    Item Description:
                    <input type="text" name="description" onChange={this.updateItem}/>
                </label>
                <label>
                    Item Price:
                    <input type="text" name="price" onChange={this.updateItem}/>
                </label>
                <input type="Submit"/>
            </form>
        )
    }
}

export default CreateItem;