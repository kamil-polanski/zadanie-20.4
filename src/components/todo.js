import React from 'react';

const Todo = props => {
  const tasks = props.data.map(task => {
    return (
      <li key={task.id}>
        {task.text}
        <span> {task.id}</span>
        <span onClick={() => {props.removeTodo(task.id);}}> zrobione</span>
      </li>
    );
  });
  return <ul>{tasks}</ul>;
};

export default Todo;


        