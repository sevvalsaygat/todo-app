import React from 'react'

function List({todos}) {
  return (
    <div>
      {
        todos.map((todo, index) => {
          return <div key={index}>{todo}</div>
        })
      }
    </div>
  )
}

export default List
