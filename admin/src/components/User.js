import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Buttons from "./Buttons";
import UserDetails from "./UserDetails";

function User() {
  const { number } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user/mobile/${number}`)
      .then((res) => res.data)
      .then((data) => {
        setUser(data.user);
      })
      .catch((err) => alert(err));
  }, [number]);

  return (
    <div className="container d-flex flex-column">
      <Buttons user={user} />
      <UserDetails user={user}/>
    </div>
  );
}

export default User;
