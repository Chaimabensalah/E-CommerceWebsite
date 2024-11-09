import React, { useState } from 'react';
import '../../pages/Auth/LoginForm.css'; // Importing the CSS for styling
import { Link } from 'react-router-dom'; // Import Link and useNavigate

const LoginForm= () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });

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
    } else {
      setErrors({ username: '', password: '' });
      alert('Form submitted successfully');
      // Add your form submission logic here
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
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

          <button type="submit" className="login-btn">Login</button>
          <div className="register-link">
            <p>Don't have an account?</p>
            <Link to="/Register" className="register-btn">Register here</Link>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
