//  Form Validation

import React, { useState } from 'react';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setSubmitted(false); // Reset the submitted status when user makes changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    const errors = {};
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      errors.email = 'Email is invalid';
    }
    if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Proceed with form submission
      setSubmitted(true);
      console.log('Form submitted successfully');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
      {submitted && <p>Form submitted successfully</p>}
    </form>
  );
};

export default FormValidation;
