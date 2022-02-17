import { useState } from "react";

export default function EmployeForm({ jwt, setModel }) {
  const [employe, setEmploye] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    age: "",
  });

  const handleChange = (e) => {
    setEmploye({ ...employe, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`fixed bg-black bg-opacity-30 w-screen h-screen z-50 top-0 left-0 flex justify-center p-4 md:p-8 xl:p-16 fade-animation `}
    >
      <div
        className={`modal-outer w-auto max-w-7xl
         bg-white self-center relative rounded-10 overflow-hidden`}
      >
        <div className="bg-white px-10 mx-auto py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              Edit employe
            </h1>
            <div>
              <label
                htmlFor="First Name"
                className="block mb-1 text-gray-600 font-semibold"
              >
                First Name
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                onChange={handleChange}
                id="firstName"
                value={employe.firstName}
                name="firstName"
              />
            </div>
            <div>
              <label
                htmlFor="last name"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Last Name
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                onChange={handleChange}
                id="lastName"
                value={employe.lastName}
                name="lastName"
              />
            </div>
            <div>
              <label
                htmlFor="First Name"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                onChange={handleChange}
                id="email"
                value={employe.email}
                name="email"
              />
            </div>
            <div>
              <label
                htmlFor="Salary"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Salary ($)
              </label>
              <input
                type="number"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                onChange={handleChange}
                id="salary"
                value={employe.salary}
                name="salary"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Age
              </label>
              <input
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                value={employe.age}
                onChange={handleChange}
                name="age"
                type="number"
                id="age"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <button
              // onClick={handleClick}
              className="mt-4 mx-3 w-1/5 bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
            >
              save
            </button>
            <button
              onClick={() => {
                setModel("none");
              }}
              className="mt-4 mx-3 w-1/5 bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
