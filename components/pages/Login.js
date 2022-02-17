import React, { useState, useContext } from "react";
import axios from "axios";

import { UserContext } from "../../context/users/contex";
import { useRouter } from "next/router";
import Link from "next/link";

function Login() {
  const [appState, dispatch] = useContext(UserContext);
  const router = useRouter();
  const classes = useStyles();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
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
      .post(`${process.env.NEXT_PUBLIC_SERVER}/api/user/signin`, newUser)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "USER_LOGIN", value: res.data });
          router.push("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
      <form>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              Register
            </h1>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Username
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
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
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Password
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
          </div>
          <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
