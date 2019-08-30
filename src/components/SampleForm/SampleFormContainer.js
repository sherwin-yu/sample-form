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
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-8 bx--offset-md-2 bx--col-lg-6 bx--offset-lg-3 bx--col-xl-8 bx--offset-xl-2 bx--col-xxl-8 bx--offset-xxl-2">
            <SampleForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactContainer;
