import React, { Component } from 'react';

class CreateItem extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            description: '',
            price: 0,
            photo1URL: '',
            photo2URL: '',
            photo3URL: '',
        }
    }
    updateItem = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }
    createItem = async (item, e) => {
        // e.preventDefault();

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
    render() {
        return (
            <div>
                <h1>Create Item</h1>
                <form onSubmit={this.createItem(this,this.state)}>
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
                    <label>
                        Photo 1 URL:
                        <input type="text" name="photo1URL" onChange={this.updateItem}/>
                    </label>
                    <label>
                        Photo 2 URL:
                        <input type="text" name="photo2URL" onChange={this.updateItem}/>
                    </label>
                    <label>
                        Photo 3 URL:
                        <input type="text" name="photo3URL" onChange={this.updateItem}/>
                    </label>
                    <input type="Submit"/>
                </form>
            </div>
        )
    }
}

export default CreateItem;