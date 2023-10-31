import React from 'react'

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form className="space-y-4 w-96">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded mb-2"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border p-2 rounded mb-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="Number"
              className="w-full border p-2 rounded mb-2"
              placeholder="Enter your Phone no"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded mb-2"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded mb-2"
              placeholder="Enter your Confirm password"
            />
          </div>
          <button
            type="submit"
            className="m-0 w-28 bg-blue-500 text-white p-4 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register