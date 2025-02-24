import React, { useEffect, useState } from "react";
import eye from "../icons/eye.png";
import eyecross from "../icons/eyecross.png";
import { ToastContainer, toast } from "react-toastify";
// for unique id
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const [show, setShow] = useState(true);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let password = localStorage.getItem("passwords");
    if (password) {
      setPasswordArray(JSON.parse(password));
    }
  }, []);

  const copyText = (text) => {
    toast.success("Copied to Clipboard", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  // function for Save
  const savePassword = () => {
    const updatedArray = [...passwordArray, { ...form, id: uuidv4() }];
    setPasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));
    setForm({ site: "", username: "", password: "" });
  };
  // function for Edit
  const editPassword = (id) => {
    console.log("editing--> " + id);
    const filterArray = passwordArray.filter((item) => item.id === id);
    setForm(filterArray[0])
  };
  // function for delete
  const deletePassword = (id) => {
    console.log("deleted--> " + id);
    const filterArray = passwordArray.filter((item) => item.id != id);
    setPasswordArray(filterArray);
    localStorage.setItem("passwords", JSON.stringify(filterArray));
    //   setForm({ site: "", username: "", password: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      {/* container */}
      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">&lt; </span>
          <span>Vault</span>
          <span className="text-green-500 ml-[3px]">X /&gt;</span>
        </h1>
        <p className="text-green-700 mt-1 text-lg text-center">
          Your Own Password Manager
        </p>
        <div className="flex flex-col p-4 text-black gap-6">
          <input
            type="text"
            name="site"
            id="site"
            value={form.site}
            onChange={handleChange}
            className="tracking-wide text-slate-800 rounded-full px-4 py-1 border-2 border-green-500  w-full outline-none "
            placeholder="Enter Website URL"
          />
          <div className="flex w-full justify-between gap-8">
            <input
              type="text"
              name="username"
              id="username"
              value={form.username}
              onChange={handleChange}
              className="tracking-wide text-slate-800 rounded-full px-4 py-1 border-2 border-green-500  w-full outline-none "
              placeholder="Enter Username"
            />
            {show ? (
              <div className="flex justify-between relative tracking-wide text-slate-800 rounded-full px-4 py-1 border-2 border-green-500  w-full outline-none bg-white">
                <input
                  type="password"
                  name="password"
                  id="passwordshow"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full outline-none "
                  placeholder="Enter Password"
                />
                <span
                  className="absolute right-6 w-6 cursor-pointer"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <img
                    src={eye}
                    alt="eye"
                    title="showPassword"
                    className="p-[1.2px]"
                  />
                </span>
              </div>
            ) : (
              <div className="flex justify-between relative tracking-wide text-slate-800 rounded-full px-4 py-1 border-2 border-green-500  w-full outline-none bg-white">
                <input
                  type="text"
                  name="password"
                  id="passwordhide"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full outline-none "
                  placeholder="Enter Password"
                />
                <span
                  className="absolute right-6 w-6 cursor-pointer"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <img
                    src={eyecross}
                    alt="eyecross"
                    title="hidePassword"
                    className="p-[1.2px]"
                  />
                </span>
              </div>
            )}
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center tracking-wide gap-1 w-fit mx-auto px-4 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-tl from-green-500 via-green-500 to-green-400 hover:from-green-600 hover:via-green-500 hover:to-green-500 transition-all duration-300 ease-in shadow-lg hover:shadow-xl active:scale-110 active:outline-4 focus:outline-4 focus:outline-offset-[3px] outline-green-500"
          >
            <lord-icon
              className={"cursor-pointer w-7"}
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              colors="primary:#fff"
            ></lord-icon>
            Add Password
          </button>
        </div>
        {/* password containers */}
        <div className="passwords rounded-md -mt-1">
          <h2 className="font-bold text-xl pb-2.5 px-1 tracking-wide ">
            Your Passwords
          </h2>
          {/* showing table of passwords */}
          {passwordArray.length === 0 && (
            <div className="border-green-500 text-center p-10 py-20 font-semibold tracking-wide bg-green-200 rounded-xl text-2xl shadow-lg text-green-800">
              No Passwords to Show
            </div>
          )}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className=" bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-200 transition-all duration-300 ease-in">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 border border-white text-center w-32">
                        <div className="flex justify-between px-12">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <lord-icon
                            onClick={() => copyText(item.site)}
                            className={"cursor-pointer w-7"}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                            colors="primary:#000000"
                          ></lord-icon>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        <div className="flex justify-between px-12">
                          <span>{item.username}</span>
                          <lord-icon
                            onClick={() => copyText(item.username)}
                            className={"cursor-pointer w-7"}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                            colors="primary:#000000"
                          ></lord-icon>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        <div className="flex justify-between px-12">
                          <span>{item.password}</span>
                          <lord-icon
                            onClick={() => copyText(item.password)}
                            className={"cursor-pointer w-7"}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                            colors="primary:#000000"
                          ></lord-icon>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center w-32 *:mx-2">
                        <lord-icon
                          onClick={() => {
                            editPassword(item.id);
                          }}
                          className={"cursor-pointer w-7"}
                          src="https://cdn.lordicon.com/gwlusjdu.json"
                          trigger="hover"
                          colors="primary:#000000"
                        ></lord-icon>
                        <lord-icon
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                          className={"cursor-pointer w-7"}
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover"
                          colors="primary:#000000"
                        ></lord-icon>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
