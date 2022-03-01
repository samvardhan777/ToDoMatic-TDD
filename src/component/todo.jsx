import React from 'react'

function todo({todo,toggleTodo}) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  return (
    <div>
    {todo.name}
    <label>
    <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}></input>
  </label>
  </div>
  )
}

export default todo