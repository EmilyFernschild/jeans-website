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
  const [user, setUser] = useState(false);

  useEffect(() => {
    fetch("/jeans")
    .then((res) => res.json())
    .then((data) => setJeans(data))
  },[])

  useEffect(() => {
    fetch("/user").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  }, [])

  const updateUser = (user) => setUser(user)

  return (
      <div className="App">
        <NavBar user={user}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login updateUser={updateUser} />} />
          <Route path="/Signup" element={<Signup updateUser={updateUser} />} />
          <Route path="/user/:id" element={<Account user={user}/>} />
          <Route path="/Jeans" element={<JeansContainer jeans={jeans}/>} />
          <Route path="/NewJeansForm" element={<NewJeansForm />} />
        </Routes>
      </div>
  )
}

export default App;