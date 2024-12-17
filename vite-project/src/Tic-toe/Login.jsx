import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-56 bg-gray-200 h-40 border border-black rounded m-20">
        <h1 className='text-red-900 text-2xl '>Welcome Login form</h1>
      <label className="mb-2">
        Name:
        <input className="mt-1 p-2 border rounded w-full" type="text" placeholder="Username" />
      </label>
      <label className="mb-4">

        Pass:
        <input className="mt-1 p-2 border rounded w-full" type="password" placeholder="Password" />
      </label>
      
    </div>
  );
};

export default Login;