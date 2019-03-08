import React from 'react';

import TodoList from './components/TodoComponents/TodoList.js';

import TodoForm from './components/TodoComponents/TodoForm.js';




const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }

];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      todo: ""
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addItemHandler = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos,
          {
            task: prevState.todo ,
            id: Date.now(),
            completed: false
          }
        ],
        todo: ""
      };
    });
  };

  toggleItem = itemId => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todoItem => {
          if (todoItem.id === itemId) {
            return {
              name: todoItem.name,
              id: todoItem.id,
              completed: !todoItem.completed
            };
          } else {
            return todoItem;
          }
        })
      };
    });
  };

  clearCompleted = () => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todoItem => {
          return !todoItem.completed;
        })
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
        </div>

        <TodoForm
          item={this.state.todo}
          inputHandler={this.inputHandler}
          addItemHandler={this.addItemHandler}
        />

        <button className="clearButton" onClick={this.clearCompleted}>Clear Completed</button>

        <TodoList
          todos={this.state.todos}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}




export default App;
