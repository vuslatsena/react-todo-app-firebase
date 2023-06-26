import React from 'react';

const DayTodoList = ({ todos }) => {
  return (
    <div>
      <h3>Todo List for Selected Day</h3>
      {todos.length === 0 ? (
        <p>No todos for this day.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DayTodoList;
