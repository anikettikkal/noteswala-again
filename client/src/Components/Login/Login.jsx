import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser && storedUser !== "undefined") {
      window.location.href = "/home";
    }
  }, []);


  const loginUser = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await axios.post("/api/users/login", { email, password });

      if (res.data.success) {
        await Swal.fire("Success", res.data.message, "success");
        localStorage.setItem(
          "currentUser",
          JSON.stringify(res.data.data)
        );
        window.location.href = "/home";
      } else {
        showError(res.data.message);
      }
    } catch (error) {
      showError("Something went wrong");
    }
  };

  const showError = async (msg) => {
    await Swal.fire("Error", msg, "error");
    setEmail("");
    setPassword("");
    localStorage.removeItem("currentUser");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Illustration Section */}
        <div className="w-full md:w-1/2 bg-gradient-to-r to-indigo-600 p-8 flex flex-col items-center justify-center">
          <img
            src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1741556089~exp=1741559689~hmac=2f1ffd16cb6df5c14d7a7284f82758d888198fbcc3d5eee6ec67a8594c4c7c90&w=900"
            alt="Login Illustration"
            className="w-full h-auto max-w-xs"
          />
          <h1 className="text-5xl font-extrabold text-center mt-6">
            <span className="text-gray-800">Welcome Back to</span>
            <br />
            <span className="bg-gradient-to-r from-black to-orange-500 bg-clip-text text-transparent">
              BCS-Noteswala
            </span>
          </h1>
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Log In to Your Account</h2>
          <form onSubmit={loginUser}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Log In
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{' '}
            <a href="/" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;