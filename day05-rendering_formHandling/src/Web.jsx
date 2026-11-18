import { useState } from "react";
import React from "react";

const Web = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  
  return (
    <div className="flex flex-col gap-4 w-60">
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="border-2"
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="border-2"
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="border-2"
        type="password"
        placeholder="Password"
      />
      <button className="border-2 w-20 ">submit</button>

      <h1>This is name - {Name}</h1>
      <h1>This is email - {Email}</h1>
      <h1>This is password - {Password}</h1>

    </div>
  );
};

export default Web;
