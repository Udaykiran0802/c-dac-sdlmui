import React, {useState} from  "react"
import PropTypes from 'prop-types';

import "./index.css"
import Cookies from "js-cookie";


const Login = ({ setToken }) =>  {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  console.log(username)
  console.log(password)
  
  

  const handleSubmit = async e => {
      e.preventDefault();
      const token = await Login({
        username,
        password
      });
      setToken(token);
    }

    const onSubmitSucess = (jwtToken,props) => {
     // const {history} = props
      
      console.log("jwttoken",jwtToken)
      const cookies =  Cookies.set('access_token', jwtToken, {expires: 30})
      console.log("successful cookies:",  cookies)
      // history.replace("/")
      
      

    }

async function Login(event) {

    let details = {
        grant_type: "password",
        username,
        password,
      };
  
      let formBody = [];
    
      for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
  
      formBody = formBody.join("&");
      console.log("FormBody: " + formBody);
      
	   const resp = await fetch("http://localhost:8000/auth/jwt/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          crendentials: "include",
        },
        body: formBody
      });
      

  
     if (resp.ok === true) {
        const json = await resp.json();
       // console.log("json",json.access_token);
        // const data = JSON.stringify(json);
        // console.log("data",data)
        //console.log("access_token",data.access_token)
        onSubmitSucess(json.access_token) 
        
       // console.log("Result: " + result);
      } else {
        console.log("Error: Invalid credentials");
        throw new Error();
      } 
   
   }
   

  
    
        return(
            <div>
            
            <div className = "login-container">
                <form className="form-container" onSubmit={handleSubmit}>
                <img className="login-website-logo"
                src="https://res.cloudinary.com/cdac01/image/upload/v1643090402/images-1_lzdgox.png"
                alt="Login.jpg" />
                    <div className = "input-container">
                    <label htmlFor="username" className="input-label">USERNAME</label>
                    <input type = "text" className="username-input-filed" id="username" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
                    </div>
                    <div className = "input-container">
                    <label htmlFor="password" className="input-label">PASSWORD</label>
                    <input type = "password" className="username-input-filed" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button type = "submit" className = "login-button">Login</button>
                </form>
            </div>
            </div>
        )


      
    
}

export default Login

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  } 
