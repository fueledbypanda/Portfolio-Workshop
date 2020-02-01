import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateUser from "./components/CreateUser";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";

const API = "https://acme-users-api-rev.herokuapp.com/api";

const fetchUser = async () => {
  const storage = window.localStorage;
  const userId = storage.getItem("userId");
  if (userId) {
    try {
      return (await axios.get(`${API}/users/detail/${userId}`)).data;
    } catch (ex) {
      storage.removeItem("userId");
      return fetchUser();
    }
  }
  const user = (await axios.get(`${API}/users/random`)).data;
  storage.setItem("userId", user.id);
  return user;
};

export default function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchUser().then(data => setUser(data));
  }, []);

  const handleNewUser = () => {
    window.localStorage.removeItem("userId");
    fetchUser().then(user => {
      setUser(user);
      console.log(user);
      return user;
    });
  };

  return (
    <div>
      <CreateUser person={user} handleNewUser={handleNewUser} />
      <Home />
    </div>
  );
}
