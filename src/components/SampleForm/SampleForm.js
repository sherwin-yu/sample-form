import React from 'react';
import { Form, TextInput, Button } from 'carbon-components-react';
import styled from 'styled-components';

const StyledTextInput = styled(TextInput)`
  margin-bottom: 15px;
`;

const Title = styled.div`
  font-size: 28px;
  margin-bottom: 10px;
`;

const SampleForm = ({ handleChange, handleSubmit }) => (
  <div>
    <Title>Sample Form</Title>
    <Form onSubmit={handleSubmit}>
      <StyledTextInput
        name="firstName"
        labelText="First Name"
        helperText="Enter First name"
        onChange={handleChange}
        required
      />
      <StyledTextInput
        id="lastName"
        name="lastName"
        labelText="Last Name"
        helperText="Enter Last name"
        onChange={handleChange}
        required
      />
      <StyledTextInput
        id="email"
        name="email"
        type="email"
        labelText="Email"
        helperText="Enter email"
        onChange={handleChange}
        require
      />
      <Button type="submit">Submit</Button>
    </Form>
  </div>
);

export default SampleForm;
