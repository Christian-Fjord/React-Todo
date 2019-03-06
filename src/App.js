import React from 'react';

import TodoList from './components/TodoComponents/TodoList.js';

import TodoForm from './components/TodoComponents/TodoForm.js';




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        } ,
      
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ] ,

      todo: ''
      
    }
  }

  addTask = event => {
    event.preventDefault();
    let newTodo = {
      task: this.state.todo ,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo] ,
      todo: ''
    })
  }

  toggleCompleted = event => {

  }

  removeSelected = event => {

  }

  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value});
  };

  render() {
    return (
      <div>
       <TodoList todos={this.state.todos}/>
       <TodoForm addTask={this.addTask} 
       todos={this.state.todos} inputChangeHandler={this.inputChangeHandler}
       valueThing={this.state.todo}/>
      
      </div>
    );
  }
}

export default App;
