import React from 'react'

export function TodoItem(props) {
  const { item } = props;

  return (
    <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
      {item.text}
    </li>
  )
}

export default TodoItem;