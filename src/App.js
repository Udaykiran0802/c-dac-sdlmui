import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from "./Components/Login"
import Register from "./Components/Register"
import Header from "./Components/Header"
// import Main from "./Components/Main"




import './App.css'

const App = () => (
  <BrowserRouter>
  <Header/>
 
  <Routes>
  
    <Route exact path="/login" element = {<Login/>} />
    <Route exact path = "/register" element = {<Register/>} />
    </Routes>
      
   
  </BrowserRouter>
)

export default App