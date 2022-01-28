import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import Login from "./Components/Login"
import Register from "./Components/Register"
import Header from "./Components/Header"
import Cards from "./Components/Cards"
// import Main from "./Components/Main"




import './App.css'

const App = () => {
  const [token, setToken] = useState();

    if(!token) {
    return <Login setToken={setToken} />
   } 



  return(
    <BrowserRouter>
     
    <Switch>
    <Route exact path="/" element={<Header/>}/>
    <Route exact path="/login" element = {<Login/>} />
    <Route exact path = "/register" element = {<Register/>} />
    <Route exact path = "/cards" element = {<Cards/>}/>
  </Switch>
      
   
  </BrowserRouter>
  )
  
}

export default App