import React from "react";
import { useState } from "react";
import RouteComponent from "./Components/RouteComponent";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { store } from './redux/store'
import { Provider } from 'react-redux'
export const UserContext = React.createContext();

function App() {

  const localStorageUserAuth = () => {
    const isAuth = localStorage.getItem('isAuth')
    console.log('App.js JSON.parse isAuth state',JSON.parse(isAuth))
    if (isAuth && JSON.parse(isAuth) === true) {
      return true
    }

    return false
  }

  const initialState = {
    isAuth: localStorageUserAuth(),
  }

  const [auth, setAuth] = useState(false)
  return (
    <UserContext.Provider value={{ localStorageUserAuth, auth, setAuth }}>
    <div>
      <Nav/>
      <RouteComponent/>
      <Footer/>
    </div>
    </UserContext.Provider>
 
  );
}

export default App;
