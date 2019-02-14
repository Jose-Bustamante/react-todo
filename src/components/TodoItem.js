import React from 'react'

export function TodoItem(props) {
  const { item, index } = props;

  return (
    <li key={index}>
      {item.text}
    </li>
  )
}

export default TodoItem;