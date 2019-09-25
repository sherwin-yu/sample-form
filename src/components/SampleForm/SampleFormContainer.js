import React, { Component } from 'react';
import SampleForm from './SampleForm';
import Users from './Users';

class FormContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.state = {
      users: [],
      newUser: {},
      deleteModalState: false,
      deletedUser: {}
    };
  }

  async componentDidMount() {
    const response = await fetch('/api/users', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const users = await response.json();
    const formattedUsers = users.map(user => ({ id: user._id, ...user }));
    this.setState({ users: formattedUsers });
  }

  handleChange(event) {
    event.preventDefault();
    const { newUser } = this.state;
    const { name, value } = event.target;
    this.setState({ newUser: { ...newUser, [name]: value } }); // eslint-disable-line react/no-unused-state
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { newUser, users } = this.state;
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    });
    const data = await response.json();
    this.setState({ users: [{ id: data._id, ...data }, ...users] });
  }

  async handleDelete() {
    const { deletedUser, users } = this.state;
    const response = await fetch(`/api/users/${deletedUser.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    await response.json();
    this.setState({ deleteModalState: false, users: users.filter(user => user.id !== deletedUser.id) });
  }

  toggleDeleteModal(bool, deletedUser) {
    this.setState({ deleteModalState: bool, deletedUser });
  }

  render() {
    const { users, deleteModalState } = this.state;
    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-8 bx--offset-md-2 bx--col-lg-8 bx--offset-lg-2 bx--col-xl-10 bx--offset-xl-1 bx--col-xxl-10 bx--offset-xxl-1">
            <SampleForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            <Users
              users={users}
              deleteModalState={deleteModalState}
              toggleDeleteModal={this.toggleDeleteModal}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FormContainer;
