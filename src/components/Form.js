import React, { useState } from 'react'

function Form({ todos, setTodos }) {

  const [todo, setTodo] = useState('')

  return (
    <div>
      <input placeholder='buraya todo girin' value={todo} onChange={
        (e) => {
          setTodo(e.target.value)
        }
      } />
      <button onClick={
        () => {
          setTodos([...todos, todo])
          setTodo('')
        }
      }>EKLE</button>
    </div>
  )
}

export default Form
