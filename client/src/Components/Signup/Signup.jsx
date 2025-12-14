import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import {currentUser} from "../../utils/currentUser"
import Swal from "sweetalert2";

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role] = useState("user");

  // Redirect if already logged in
  useEffect(() => {
    if (currentUser) {
      window.location.href = "/home";
    }
  }, []);


  const signupUser = async (e) => {
    e.preventDefault(); // stop page reload

    try {
      const res = await axios.post("/api/users/signup", {
        name,
        email,
        phone,
        password,
        role,
      });

      if (res.data.success) {
        await Swal.fire({
          icon: "success",
          title: "Success",
          text: res.data.message,
        });
        window.location.href = "/login";
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: res.data.message,
        });
        clearForm();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong",
      });
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Illustration Section */}
        <div className="w-full md:w-1/2 bg-gradient-to-r  to-indigo-600 p-8 flex flex-col items-center justify-center">
          <img
            src="https://illustrations.popsy.co/amber/student-graduation.svg" // Replace with your illustration
            alt="Signup Illustration"
            className="w-full h-auto max-w-xs"
          />
          {/* Attractive Welcome Text */}
          <h1 className="text-5xl font-extrabold text-center mt-6">
            <span className=" text-gray-800 ">
              Welcome to
            </span>
            <br />
            <span className="bg-gradient-to-r from-black to-orange-500 bg-clip-text text-transparent">
              BCS-Noteswala
            </span>
          </h1>
        </div>

        {/* Signup Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Your Account</h2>
          <form onSubmit={signupUser}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
                placeholder="Enter your Phone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                onChange={(e)=>{setPassword(e.target.value)}}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;