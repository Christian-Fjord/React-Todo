import React from 'react';
import Todo from './Todo';


export default function TodoList(props) {
  return (
    <div className="todoList">
      {props.todos.map(todoItem => {
        return <Todo todo={todoItem} toggleItem={props.toggleItem} 
        key={todoItem.id}/>;
      })}
    </div>
  );
}