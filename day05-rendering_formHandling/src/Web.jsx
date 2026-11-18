import { useState } from "react";
import React from "react";

const Web = () => {
  const [formData, setFormData] = useState({
    // name: "",
    // email: "",
    // password: "",
  });
  console.log(formData);

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  return (
    <div className="flex flex-col gap-4 w-60">
      <input
        name="name"
        onChange={handleChange}
        className="border-2"
        type="text"
        placeholder="Name"
      />
      <input
        name="email"
        onChange={handleChange}
        className="border-2"
        type="email"
        placeholder="Email"
      />
      <input
        name="password"
        onChange={handleChange}
        className="border-2"
        type="password"
        placeholder="Password"
      />
      <button className="border-2 w-20 ">submit</button>

      {/* <h1>This is name - {Name}</h1>
      <h1>This is email - {Email}</h1>
      <h1>This is password - {Password}</h1> */}
    </div>
  );
};

export default Web;
