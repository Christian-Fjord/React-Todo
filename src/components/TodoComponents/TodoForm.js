import React, { Component } from 'react';





export default class TodoForm extends Component {


  render() {
    return (
      <form onSubmit={this.props.addItemHandler}>
        <input
          type="text"
          placeholder="Add Todo Item"
          value={this.props.todo}
          name="todo"
          onChange={this.props.inputHandler}
        />
        <button className="addButton" type="submit">Add Todo Item</button>
      </form>
    );
  }
}
