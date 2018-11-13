import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleRemove() {
    return this.props.handleRemove(this.props.id)
  }

  render() {
    return (
      <div className="Meme-container">
        <h4>{this.props.task}</h4>
        <button onClick={this.handleRemove}>X</button>
      </div>);
  }
}

export default Todo;