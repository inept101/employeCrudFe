import { useContext, useEffect } from "react";
import { UserContext } from "../context/users/contex";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import EmployeForm from "../components/model/EmployeForm";

export default function Home() {
  const [appState, dispatch] = useContext(UserContext);
  const [empData, setEmpData] = useState([]);

  const [Model, setModel] = useState("none");
  const [employe, setEmploye] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    age: "",
  });
  const router = useRouter();

  useEffect(() => {
    if (appState.isLoggedIn) {
      return axios({
        method: "get",
        headers: { authorization: `bearer ${appState.jwt}` },
        url: `${process.env.NEXT_PUBLIC_SERVER}/api/employe/`,
      })
        .then((res) => {
          if (res.status === 200) {
            setEmpData(res.data.data);
          }
        })
        .catch((err) => {
          console.log(err.response.data?.message);
        });
    }
    router.push("/login");
  }, [appState.isLoggedIn, appState.jwt, router]);
  const deleteEmp = (id) => {
    axios({
      method: "delete",
      headers: { authorization: `bearer ${appState.jwt}` },
      url: `${process.env.NEXT_PUBLIC_SERVER}/api/employe/`,
      data: { id },
    })
      .then((res) => {
        if (res.status === 200) {
          setEmpData(res.data.data);
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert(err.response.data?.message);
        console.log(err.response.data?.message);
      });
  };

  return (
    <>
      {Model === "add" && (
        <EmployeForm
          jwt={appState.jwt}
          setModel={setModel}
          employe={employe}
          setEmploye={setEmploye}
          setEmpData={setEmpData}
        />
      )}
      {Model === "edit" && (
        <EmployeForm
          jwt={appState.jwt}
          setModel={setModel}
          employe={employe}
          setEmploye={setEmploye}
          setEmpData={setEmpData}
          edit={true}
        />
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
              {empData.map((data, index) => (
                <tr
                  className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
                  key={index}
                >
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      First Name
                    </span>
                    {data.firstName}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Last Name
                    </span>
                    {data.lastName}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Email Address
                    </span>
                    {data.email}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Salary
                    </span>
                    {data.salary}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Age
                    </span>
                    {data.age}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Actions
                    </span>
                    <button
                      onClick={() => {
                        setEmploye(data);
                        setModel("edit");
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        deleteEmp(data._id);
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
