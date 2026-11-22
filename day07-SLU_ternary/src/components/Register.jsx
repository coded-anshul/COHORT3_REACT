import React, { useState } from "react";

const Register = ({ setToggle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);

  console.log(formData);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, formData]);
    setFormData({
        name:"",
        email:"",
        password:"",
    });
  };

  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      <h1>Register</h1>
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          required
          value={formData.name}
          name="name"
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          required
          value={formData.email}
          name="email"
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          required
          value={formData.password}
          name="password"
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="p-2 bg-blue-600 text-white rounded">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <span
          className="text-blue-600 cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        >
          Login here
        </span>
      </p>
    </div>
  );
};
export default Register;
