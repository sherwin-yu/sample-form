import React, { Component } from 'react';
import SampleForm from './SampleForm';

class ContactContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { name: '', email: '', subject: '', message: '' };
  }

  componentDidMount() {}

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value }); // eslint-disable-line react/no-unused-state
  }

  handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log('SUBMITING', this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 offset-md-3">
            <SampleForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactContainer;
