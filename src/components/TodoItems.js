import React, { Component } from 'react'
import { TodoItem } from './TodoItem'

class TodoItems extends Component {
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(({ item, index }) => <TodoItem item={item} index={index} />)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems
