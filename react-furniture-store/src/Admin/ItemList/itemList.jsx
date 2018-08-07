import React from 'react';

const ItemList = (props) => {

    const itemList = props.items.map((item, i) => {
        return (
            <div>
                <li key={item._id}>
                    <span>{item.title}</span>
                    <small>{item.description}</small>
                    <small>{item.price}</small>
                    <button onClick={props.deleteItem.bind(null, item._id)}>Delete</button>
                    <button onClick={props.showModal.bind(null, item._id)}>Edit</button>
                </li>
            </div>
        )
    });

    return (
        <ul>
            {itemList}
        </ul>
    )
};

export default ItemList;