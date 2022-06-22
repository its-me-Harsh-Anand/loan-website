import axios from "axios";
import React, { useState } from "react";

function Login(props) {
  const { setLoggedIn } = props
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("show")
  const [checking, setChecking] = useState(false);
    
  function handleLogin(e){
    setChecking(true)
    e.preventDefault()
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/admin/${email}`, {params: {password : password}})
      .then(res => res.data)
      .then(data => {
        if(data.stat !== true) {
          alert(data.message); 
          setChecking(false)
          return
        }
        const item = {
          isLoggedIn: true,
          expiry: Date.now() + 86400000,
          admin_data : data
        }
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_KEY, JSON.stringify(item))
        setLoggedIn(true)
        setChecking(false)
      })
      .catch(err => alert(err))
  }


  return (
    <div
      className="container"
      style={{ maxWidth: "500px", paddingTop: "50px" }}
    >
      <p className="h1 mt-5 mb-5" style={{ textAlign: "center" }}>
        Admin Panel Login
      </p>
      <form>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <input
            type={(show=== "show") ? "password" : "text"}
            id="form2Example2"
            className="form-control"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="d-flex justify-content-between">
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <p className="pr-2 text-primary" role="button" onClick={()=>{(show === "show") ? setShow("hide") : setShow("show")}}>{show}</p>
          </div>
        </div>
        {/* Submit button */}
        <button type="button" disabled={checking} className="btn btn-primary btn-block mb-4 text-center" onClick={(e)=>{handleLogin(e)}}>
          {
            checking ? "Signing In..." : "Sign In"
          }
        </button>
      </form>
    </div>
  );
}

export default Login;
