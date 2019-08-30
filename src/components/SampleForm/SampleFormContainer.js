import React, { Component } from 'react';
import SampleForm from './SampleForm';
import Users from './Users';

class FormContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      users: [],
      newUser: {}
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

  render() {
    const { users } = this.state;
    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-8 bx--offset-md-2 bx--col-lg-6 bx--offset-lg-3 bx--col-xl-8 bx--offset-xl-2 bx--col-xxl-8 bx--offset-xxl-2">
            <SampleForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            <Users users={users} />
          </div>
        </div>
      </div>
    );
  }
}

export default FormContainer;
