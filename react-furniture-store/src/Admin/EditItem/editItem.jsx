import React, { Component } from 'react';

const EditItem = (props) =>  {

  return (
    <div>
      <h4> Edit Item</h4>
      <form onSubmit={props.closeAndEdit}>
        <label>
          Edit Title:
          <input type="text" name="title" onChange={props.handleFormChange} value={props.itemToEdit.title}/>
        </label>
        <label>
          Edit Description:
          <input type="text" name="description" onChange={props.handleFormChange} value={props.itemToEdit.description}/>
        </label>
        <label>
          Edit Price:
          <input type="text" name="price" onChange={props.handleFormChange} value={props.itemToEdit.price}/>
        </label>
        <input type='Submit'/>
      </form>
    </div>

    )
  }

export default EditItem;