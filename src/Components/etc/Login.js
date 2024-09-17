// Login.js
import React, { useState, useContext } from 'react';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Ensure this import is correct

const Login = () => {
  const [email, setEmail] = useState('amis@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState(''); // Add role state

  const navigate = useNavigate();
  const { login } = useAuth(); // Use login function from AuthContext

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleRoleChange = (e) => setRole(e.target.value); // Handle role change

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'amis@gmail.com' && password === '123') {
      console.log('Login successful with:', { email, password, role });
      login(role); // Update login state with user role
      navigate('/'); // Redirect to home
    } else {
      console.log('Invalid login credentials');
      alert('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="you@gmail.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="••••••••"
                value={password}
                onChange={handlePasswordChange}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="focus:outline-none"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              id="role"
              name="role"
              required
              className="mt-1 block w-full h-10 pl-3 pr-10 sm:text-sm border-gray-300 rounded-md"
              value={role}
              onChange={handleRoleChange}
            >
              <option value="" disabled>Select your role</option>
              <option value="unregistered">Unregistered User</option>
              <option value="registered">Registered User</option>
              <option value="college">College</option>
              <option value="government">Government</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
