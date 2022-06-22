import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./components/Login";
import Panel from "./components/Panel";
import User from "./components/User";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    const data = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY);
    if (!data) {     // if no value exists associated with the key, return null
        setLoggedIn(false)
        return
    }
 
    const item = JSON.parse(data);
 
    // If TTL has expired, remove the item from localStorage and return null
    if (Date.now() > item.expiry) {
        localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE_KEY);
        setLoggedIn(false)
        return
    }
 
    // return data if not expired
    setLoggedIn(true)
  }, [])

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={(
            <div className="App">
              {!loggedIn && <Login setLoggedIn={setLoggedIn}/>}
              {loggedIn && <Panel />}
            </div>
          )}/>
          <Route path="/user/:number" element={<User/>}/>
        </Routes>
    </Router>

  );
}

export default App;
