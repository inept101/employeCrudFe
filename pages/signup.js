import React, { useState, useContext } from "react";
import axios from "axios";

import { UserContext } from "../context/users/contex";
import { useRouter } from "next/router";
import Link from "next/link";

function Signup() {
  const [appState, dispatch] = useContext(UserContext);
  const router = useRouter();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  if (appState.isLoggedIn) {
    router.push("/");
  }

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER}/api/user/signup`, newUser)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "USER_LOGIN", value: res.data.data });
          alert(res.data.message);
          console.log(res.data);
          router.push("/");
        }
      })
      .catch((err) => {
        alert(err.response.data?.message);
        console.log(err.response.data);
      });
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
      <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
        <div className="space-y-4">
          <h1 className="text-center text-2xl font-semibold text-gray-600">
            Register
          </h1>
          <div>
            <label
              htmlFor="Name"
              className="block mb-1 text-gray-600 font-semibold"
            >
              Name
            </label>
            <input
              type="text"
              className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              onChange={handleChange}
              id="name"
              value={newUser.name}
              name="name"
              autoComplete="name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-gray-600 font-semibold"
            >
              Email
            </label>
            <input
              type="text"
              className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              onChange={handleChange}
              id="email"
              value={newUser.email}
              name="email"
              autoComplete="email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-gray-600 font-semibold"
            >
              Password
            </label>
            <input
              className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              onChange={handleChange}
              name="password"
              type="password"
              id="password"
            />
          </div>
        </div>
        <div className="flex flex-row">
          <button
            onClick={handleClick}
            className="mt-4 mx-3 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
          >
            Register
          </button>
          <button
            onClick={() => {
              router.push("/login");
            }}
            className="mt-4 mx-3 w-full bg-gradient-to-tr from-blue-600 to-purple-500 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
