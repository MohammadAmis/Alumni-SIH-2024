// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element, allowedRoles }) => {
  const { isLoggedIn, userRole } = useAuth();

  // Check if user is logged in and has the right role
  if (!isLoggedIn) {
    return <Navigate to="/login" />; // Redirect to login if not logged in
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />; // Redirect to unauthorized if role is not allowed
  }

  return element;
};

export default ProtectedRoute;
