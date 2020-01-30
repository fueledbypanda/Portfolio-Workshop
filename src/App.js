import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateUser from "./components/CreateUser";
import "bootstrap/dist/css/bootstrap.min.css";

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

const handleClick = (event) => {
  axios.delete(`${API}/users/details/`)

};

export default function App() {
  const [person, setPerson] = useState({});
  useEffect(() => {
    fetchUser().then(data => setPerson(data));
  }, []);
  return (
    <div>
      <CreateUser person={person} />
    </div>
  );
}
