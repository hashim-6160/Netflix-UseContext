import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import { auth } from "./firebase";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged in");
        navigate("/home");
      } else {
        console.log("loggedOut");
        navigate("/");
      }
    });
  },[]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
