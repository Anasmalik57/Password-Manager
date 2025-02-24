import React, { useEffect, useState } from "react";
import eye from "../icons/eye.png";
import eyecross from "../icons/eyecross.png";

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

  const savePassword = () => {
    const updatedArray = [...passwordArray, form];
    setPasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));
    setForm({ site: "", username: "", password: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
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
            className="flex justify-center items-center tracking-wide gap-1 w-fit mx-auto px-4 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-tl from-green-500 via-green-500 to-green-400 hover:from-green-600 hover:via-green-500 hover:to-green-500 transition-all duration-300 ease-in shadow-lg hover:shadow-xl active:scale-110 focus:outline-4 focus:outline-offset-[3px] outline-green-500"
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
        <div className="passwords bg-slate-300 max-h-[21rem] rounded-md">
          <h2 className="font-bold text-xl py-4 px-1 tracking-wide ">
            Your Passwords
          </h2>
          {/* showing table of passwords */}
          {passwordArray.length === 0 && <div>No Passwords to show</div>}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className=" bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-200 transition-all duration-300 ease-in">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 border border-white text-center w-32">
                        <a href={item.site} target="_blank">{item.site}</a>
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        {item.username}
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        {item.password}
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
