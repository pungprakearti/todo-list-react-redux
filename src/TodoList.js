import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import uuid from 'uuid/v4';
import { Form, Label, Input, Button } from 'reactstrap';

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
}

function mapStateToProps(reduxState) {
  return { todos: reduxState.todos }
}

const connectedComponent = connect(mapStateToProps);
export default connectedComponent(TodoList);