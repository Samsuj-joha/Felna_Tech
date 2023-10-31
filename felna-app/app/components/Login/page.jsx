import React from 'react'

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form className="space-y-4 w-96">
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            className="w-full border p-2 rounded mb-3"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label className="block text-gray-700 ">Password</label>
          <input
            type="password"
            className="w-full border p-2 rounded mb-4"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className=" bg-blue-500 text-white p-3 w-28 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  </div>
  )
}

export default Login