import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Usercard from "./components/Usercard";

const App = () => {
  const [Toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center ">
      {Toggle ? (
        user.map((elem) => <Usercard user={elem}/> )
      ) : (
        <Register setToggle={setToggle} />
      )}
    </div>
  );
};

export default App;
