import React,{ Component } from 'react';
import { useState,useRef,useEffect } from 'react';
import TodoList from "./component/todoList"
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
    const [todos, setTodos] = useState([{
    }])
    const todoNameRef=useRef()
    const LOCAL_STORAGE_KEY = 'todoApp.todos'
    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])
    function toggleTodo(id) {
      const newTodos = [...todos]
      const todo = newTodos.find(todo => todo.id === id)
      todo.complete = !todo.complete
      setTodos(newTodos)
    }
  function handletodo(e)
  {
    const name=todoNameRef.current.value
    if(name==='') return 
    setTodos(prevTodos =>{
      return[...prevTodos,{id:uuidv4(),name:name,complete:false}]
    })
    console.log(name)
  }
  function handleClearTodos() {
    const newTodos=[]
    //  const newTodos = todos.filter(todo=>!todo.complete)
    setTodos(newTodos)
  }
  function handleReset()
  {
      const newTodos = todos.filter(todo=>!todo.complete)
     setTodos(newTodos)

  }
  return (
      <div className='Start'>
       <h1>ToDomatic</h1>
      <input data-cy="Text_Box"   type="text" ref={todoNameRef}></input>
    <br></br>
    <br></br>
    <div className='flexbox'>
    <button  className='btn btn-primary' data-cy="Add" onClick={handletodo}>Add Todo</button>
    &nbsp;
    &nbsp;
    &nbsp;
    <button  className='btn btn-danger'  data-cy="Reset" onClick={handleClearTodos}>Reset 🗑️</button>
    &nbsp;
    &nbsp;
    &nbsp;
    <button  className='btn btn-danger' data-cy="Clear" onClick={handleReset}>Clear</button>
    </div>
    <div >{todos.filter(todo => !todo.complete).length} left to do</div>
    <div className='Task' data-cy="Space">
    <TodoList className='ToDo' todos={todos} toggleTodo={toggleTodo}/>
    </div>
    </div>
  )
}

export default App