import React, { Component } from 'react';



class App extends Component {
  state = {
    text: '',
    todos: [],
    counter: 0,
  }

  onTextChange = (event) => {
    const e = event;
    // console.log(e.target)

    this.setState({ text: e.target.value });
  }

  onClickChange = () => {

    // console.log("click")
    const todos = [
      ...this.state.todos,
      {
        id: this.state.counter,
        text: this.state.text,
        compleated: false,

      }];

    console.log(todos)

    this.setState({
      text: '',
      todos,
      counter: this.state.counter + 1,
    })
  }

  onTodoDelete = (todoId) => () => {
    const todos = this.state.todos
      .filter(todo => todoId !== todo.id);

    this.setState({
      todos,
    })
  }



  render() {
    return (

      <div className='App'>
        <div>
          <button onClick={this.onClickChange}>Add TODO</button>
          <input
            placeholder='text'
            value={this.state.text}
            onChange={this.onTextChange}
          />
        </div>
        {
          this.state.todos.map((todo) => (
            <div key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={this.onTodoDelete(todo.id)}>delete</button>
              <button>compleated</button>
            </div>
          ))
        }
      </div>
    )
  }
}





export default App;
