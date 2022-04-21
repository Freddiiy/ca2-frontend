import React, { useState,useEffect } from "react"
import facade from "./components/apiFacade";
import LoggedIn from "./components/LoggedIn";
import LogIn from "./components/LogIn";

import Animals from "./components/animals"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
 
  const logout = () => {facade.logout()
    setLoggedIn(false)} 
  const login = (user, pass) => {
    facade.login(user,pass)
    .then(res =>setLoggedIn(true));} 
 
  return (
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
          <Animals />
        </div>)
      }
    </div>
    )
  }
export default App;
