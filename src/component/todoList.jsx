import React, { Component } from 'react'
import Todo from './todo'


function todoList({todos,toggleTodo}) {
  return (
   
    todos.map(todo =>{
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo}/>
    })
  )
}

export default todoList