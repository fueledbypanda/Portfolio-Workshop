import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateUser from "./components/CreateUser";
import Home from "./components/Home";
import Notes from "./components/Notes";
import Vacation from "./components/Vacations";
import Companies from "./components/Companies";

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

const getHash = () => {
  return window.location.hash.slice(1);
};
export default function App() {
  const [params, setParams] = useState(qs.parse(getHash()));

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setParams(qs.parse(getHash()));
    });
    setParams(qs.parse(getHash()));
  }, []);

  const [user, setUser] = useState({});
  const [notes, setNotes] = useState([]);
  const [vacations, setVacations] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchUser()
      .then(data => {
        setUser(data);
        return user;
      })
      .then(user => {
        axios
          .get(`${API}/users/${user.id}/notes`)
          .then(response => setNotes(response.data));
        return user;
      })
      .then(user => {
        axios
          .get(`${API}/users/${user.id}/vacations`)
          .then(response => setVacations(response.data));
        return user;
      })
      .then(user => {
        axios
          .get(`${API}/users/${user.id}/followingCompanies`)
          .then(response => setCompanies(response.data));
      })
      .catch(error => console.log('Terri', error))
  }, [user]);

  const handleNewUser = () => {
    window.localStorage.removeItem("userId");
    fetchUser()
      .then(user => {
        setUser(user);
        return user;
      })
      .then(user => {
        axios
          .get(`${API}/users/${user.id}/notes`)
          .then(response => setNotes(response.data));
        return user;
      })
      .then(user => {
        axios
          .get(`${API}/users/${user.id}/vacations`)
          .then(response => setVacations(response.data));
        return user;
      })
      .then(user => {
        axios
          .get(`${API}/users/${user.id}/followingCompanies`)
          .then(response => setCompanies(response.data));
        return user
      });
  };

  const createUserVacation = user => vacation => {
    axios
      .post(`${API}/users/${user.id}/vacations`, {
        startDate: vacation.startDate,
        endDate: vacation.endDate
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  };
  const deleteVacay = (vacationId) => {
    // event.preventDefault();

    axios.delete(`${API}/users/${user.id}/vacations/${vacationId}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }




  return (
    <div>
      <CreateUser person={user} handleNewUser={handleNewUser} notes={notes} />
      {params.view === undefined ? (
        <Home
          person={user}
          notes={notes}
          vacations={vacations}
          companies={companies}
        />
      ) : null}

      {params.view === "notes" ? <Notes notes={notes} /> : null}
      {params.view === "vacations" ? (
        <Vacation
          vacations={vacations}
          users={user}
          onVacationCreated={createUserVacation(user)}
          deleteVacay={deleteVacay}
        />
      ) : null}
      {params.view === "companies" ? <Companies companies={companies} /> : null}
    </div>
  );
}
