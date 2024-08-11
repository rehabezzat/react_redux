import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: ""
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    userName: false,
    password: false,
    confirmPassword: false
  });

  const fields = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      validate: (value) => /^[A-Za-z\s]+$/.test(value) && value.length >= 2,
      errorMessage: 'Invalid Name. It must be at least 2 characters long.'
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter email',
      validate: (value) => value.length > 7 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      errorMessage: 'Invalid email.'
    },
    {
      name: 'userName',
      type: 'text',
      placeholder: 'Username',
      validate: (value) => value.length >= 5,
      errorMessage: 'Invalid Username. It must be at least 5 characters long.'
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      validate: (value) => value.length > 7 && /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(value),
      errorMessage: 'Invalid Password. It must be at least 8 characters long and include a number and a special character.'
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      validate: (value) => value === formValues.password,
      errorMessage: 'Passwords do not match.'
    }
  ];

  const validateField = (name, value) => {
    const field = fields.find(f => f.name === name);
    return field ? field.validate(value) : true;
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));

    setFormErrors(prevErrors => ({
      ...prevErrors,
      [name]: !validateField(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = fields.reduce((acc, { name }) => {
      acc[name] = !validateField(name, formValues[name]);
      return acc;
    }, {});

    setFormErrors(errors);

    if (!Object.values(errors).includes(true)) {
      console.log("Form submitted successfully");
    } else {
      console.log("Form failed to submit");
    }
  };

  return (
    <Form className='container w-50 p-5' onSubmit={handleSubmit}>
      {fields.map(({ name, type, placeholder, errorMessage }) => (
        <Form.Group className="mb-3" key={name} controlId={`formBasic${name}`}>
          <Form.Label className='w-100 text-start'>{placeholder}</Form.Label>
          <Form.Control
            type={type}
            name={name}
            placeholder={placeholder}
            value={formValues[name]}
            onChange={handleFieldChange}
            isInvalid={formErrors[name]}
          />
          {formErrors[name] && <Form.Text className="text-danger text-start w-100 d-block">{errorMessage}</Form.Text>}
        </Form.Group>
      ))}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register;
