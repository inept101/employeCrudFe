import { useContext, useEffect } from "react";
import { UserContext } from "../context/users/contex";
import { useRouter } from "next/router";
import { useState } from "react";
import EmployeForm from "../components/model/EmployeForm";

export default function Home() {
  const [appState, dispatch] = useContext(UserContext);
  const [Model, setModel] = useState("none");
  const router = useRouter();

  useEffect(() => {
    if (!appState.isLoggedIn) {
      router.push("/login");
    }
  });

  return (
    <>
      {Model === "add" && (
        <EmployeForm jwt={appState.jwt} setModel={setModel} />
      )}
      {Model === "edit" && (
        <EmployeForm jwt={appState.jwt} setModel={setModel} />
      )}

      <div className="h-screen  bg-gradient-to-br from-blue-600 to-indigo-600 flex flex-col justify-center items-center w-full">
        <p className="font-bold text-2xl">Welcome {appState.userName}</p>
        <div className="bg-white rounded-xl max-w-screen-lg shadow-md p-4">
          <div className="w-full flex justify-between">
            <p className="font-semibold text-xl ml-8">Emplyee Table</p>
            <button
              onClick={() => {
                setModel("add");
              }}
              className=" bg-gradient-to-tr from-blue-600 to-indigo-600 hover:bg-blue-700  text-indigo-100 py-1 px-2 rounded-md text-lg tracking-wide"
            >
              Add
            </button>
          </div>

          <table className="w-full mt-2 rounded-xl shadow-md block md:table border">
            <thead className="block md:table-header-group">
              <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                <th className="bg-indigo-50 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  First Name
                </th>
                <th className="bg-indigo-50 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Last Name
                </th>
                <th className="bg-indigo-50 p-2 text-gray-600font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Email Address
                </th>
                <th className="bg-indigo-50 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Salary
                </th>
                <th className="bg-indigo-50 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Age
                </th>

                <th className="bg-indigo-50 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    First Name
                  </span>
                  Jamal
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Last Name
                  </span>
                  Rios
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Email Address
                  </span>
                  jrios@icloud.com
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Salary
                  </span>
                  58208
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Age
                  </span>
                  23
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
