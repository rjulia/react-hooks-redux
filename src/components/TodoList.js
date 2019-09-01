import React, { useContext } from 'react'

const TodoList = ({ TodoContext, todos }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} TodoContext={TodoContext} />
    ))}
  </ul>
);
const TodoItem = ({ TodoContext, todo }) => {

  const dispatch = useContext(TodoContext);

  const handleChange = () =>
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleChange}
        />
        {todo.task}
      </label>
    </li>
  );
};

export default TodoList
