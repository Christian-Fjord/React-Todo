import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      
      {props.todos.map((todo, index) => (
        <Todo todo={todo}
        key={index}/>
      ))}

    </div>
  )
}

export default TodoList;