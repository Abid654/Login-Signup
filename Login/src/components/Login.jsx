import React from 'react';

const Login = ({ onToggle }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="w-full max-w-sm md:max-w-lg lg:max-w-l p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center">Login</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required 
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <button onClick={onToggle} className="text-blue-500 hover:underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
