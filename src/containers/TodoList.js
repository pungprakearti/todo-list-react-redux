import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import uuid from 'uuid/v4';
import { addTodo, removeTodo } from '../actions';
import { Form, Label, Button, Input, ListGroupItem, ListGroup } from 'reactstrap';

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
    this.props.addTodo({
      task: this.state.task,
      id: uuid()
    })
    this.setState({
      task: ''
    })
  }

  handleRemove(id) {
    this.props.removeTodo({
      id
    })
  }

  render() {
    return (
      <div className="col-6 text-left ml-auto mr-auto">
        <div className="TodoList mx-auto">
          <Form className="form-inline m-2" onSubmit={this.handleSubmit}>
            <Label className="ml-4" htmlFor="task">New Task: </Label>
            <Input className="col-6 ml-2 mr-2 input-large" name="task" type="text" value={this.state.task} onChange={this.handleChange} />
            <Button>Add Todo</Button>
          </Form>
        </div>
        <ListGroup>
          {this.props.todos.map(todo => <ListGroupItem> <Todo {...todo} key={todo.id} handleRemove={this.handleRemove} /></ListGroupItem>)}
        </ListGroup>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return { todos: reduxState.todos }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addTodo: function (action) {
//       dispatch({
//         // type: "ADD_TODO",
//         // task: action.task,
//         // id: action.id
//         ...action
//       })
//     },
//     removeTodo: function (action) {
//       dispatch({
//         // type: "REMOVE_TODO",
//         // id: action.id
//         ...action
//       })
//     }
//   }
// }


// const connectedComponent = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connect(mapStateToProps, { addTodo, removeTodo });
export default connectedComponent(TodoList);