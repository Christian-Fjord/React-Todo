import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input type="text" 
      name='todo'
      value= {props.todo}
      onChange={props.inputChangeHandler}
      />

      <button onClick={props.addTask}> 
      Add Todo
      </button>

      <button> 
      Clear Completed 
      </button>
    </form>
  )
}


export default TodoForm;