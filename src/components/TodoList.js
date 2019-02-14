import React, { Component } from 'react'

class TodoListForm extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <input
            placeholder="Task"
            ref={this.props.inputElement}
            onChange={this.props.handleInput}
          />
          <button onClick={this.props.addItem}> Add Task </button>
        </div>
      </div>
    )
  }
}

export default TodoListForm
