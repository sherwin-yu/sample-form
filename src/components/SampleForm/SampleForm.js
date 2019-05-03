import React from 'react';
import { Form, TextInput, Button } from 'carbon-components-react';

const SampleForm = ({ handleChange, handleSubmit }) => (
  <div>
    <h1>Sample Form</h1>
    <Form onSubmit={handleSubmit}>
      <TextInput
        name="firstName"
        labelText="First Name"
        helperText="Enter First name"
        onChange={handleChange}
        required
      />
      <TextInput name="lastName" labelText="Last Name" helperText="Enter Last name" onChange={handleChange} required />
      <Button type="submit">Submit</Button>
    </Form>
  </div>
);

export default SampleForm;
