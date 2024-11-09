import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../../pages/Auth/Register.css'; // Importing the CSS for styling

const RegisterForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({ username: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.username) {
      setErrors((prevState) => ({ ...prevState, username: 'Username is required' }));
    } else if (!formData.password) {
      setErrors((prevState) => ({ ...prevState, password: 'Password is required' }));
    } else if (formData.password !== formData.confirmPassword) {
      setErrors((prevState) => ({ ...prevState, confirmPassword: 'Passwords do not match' }));
    } else {
      setErrors({ username: '', password: '', confirmPassword: '' });
      alert('Registration submitted successfully');
      // Add your form submission logic here (e.g., sending data to a backend)
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>

          <button type="submit" className="login-btn">Register</button>
          
          <div className="register-link">
            <p>Already have an account?</p>
            <Link to="/login" className="register-btn">Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
