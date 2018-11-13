import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import uuid from 'uuid/v4';
// import { Form, Label, i, Button } from 'reactstrap';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.dispatch({
      task: 'ADD_TODO',
      id: uuid()
    })
  }

  handleRemove(id) {
    this.props.dispatch({
      type: 'REMOVE_MEME',
      id
    })
  }

  render() {
    return (
      <div>
        <div className="TodoList">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="newTodo">New Todo: </label>
            <input name="newTodo" type="text" value={this.state.task} onChange={this.handleChange} />
          </form>
        </div>
        <div>
          {this.props.todos.map(todo => <Todo {...todo} handleRemove={this.handleRemove} />)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return { todos: reduxState.todos }
}

const connectedComponent = connect(mapStateToProps);
export default connectedComponent(TodoList);