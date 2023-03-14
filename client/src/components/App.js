// client/src/components/App.js
// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Account from "./Account";
import JeansContainer from "./JeansContainer";
import NewJeansForm from "./NewJeansForm";
import NavBar from "./Navbar";
import { useEffect, useState } from "react";

function App() {
  const [jeans, setJeans] = useState([]);

  useEffect(() => {
    fetch("/jeans")
    .then((res) => res.json())
    .then((data) => setJeans(data))
  },[])

  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/client/:id" element={<Account />} />
          <Route path="/Jeans" element={<JeansContainer jeans={jeans}/>} />
          <Route path="/NewJeansForm" element={<NewJeansForm />} />
        </Routes>
      </div>
  )
}

export default App;