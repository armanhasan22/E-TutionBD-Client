import React from 'react';
import { Link } from 'react-router';

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-600">Unauthorized Access</h1>
      <p className="mt-4 text-lg">You do not have permission to view this page.</p>
      <Link to="/" className="btn btn-primary mt-6">Go Back Home</Link>
    </div>
  );
};

export default Unauthorized;
