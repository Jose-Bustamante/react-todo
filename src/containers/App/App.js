import React, { Component } from 'react'
import TodoListForm from '../../components/TodoList'
import TodoItems from '../../components/TodoItems'

class App extends Component { // same as class App extends React.Component
  // inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      items: [],
      inputValue: '',
    }
    // this.removeLastItem = this.removeLastItem.bind(this);
  }
  deleteItem = key => {

  }

  handleInput = e => {

  }
  addItem = e => {
    console.log('SUBMIT!');
  }

  removeLastItem() { // This one you need to bind() to use 'this'

  }

  render() {
    return (
      <div className="App">
        <TodoListForm
          addItem={this.addItem}
          handleInput={this.handleInput}
        />
        <TodoItems entries={this.state.items} />
      </div>
    )
  }
}

export default App
