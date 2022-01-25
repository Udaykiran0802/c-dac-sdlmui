import {Component} from "react" 

import "./index.css"

class Register extends Component {
    render(){
        return(
            <div className = "login-container">
            <form >
            <form className="form-container" >
          <img
            className="login-website-logo"
            src="https://res.cloudinary.com/cdac01/image/upload/v1643103976/register-now-button-sign-key-260nw-1725048556_qhudju_xe9xnn.webp"
            alt="website logo"
          />
          <div className="input-container">
            <label htmlFor="username" className="input-label">
             FullName
            </label>
            <input
              type="text"
              className="username-input-filed"
              id="username"
             
              placeholder="FullName"
              required
              
            />
          </div>
          <div className="input-container">
            <label htmlFor="email" className="input-label">
             EMAIL
            </label>
            <input
              type="email"
              className="username-input-filed"
              id="email"
             
              placeholder="email@gmail.com"
              required
              
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="password-input-field"
              placeholder="Password"
              required
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">
              RE-TYPE PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="password-input-field"
              placeholder="Re-Type Password"
              required
            />
          </div>
          
          <button type="submit" className="login-button">
            Register Now
          </button>
          
          
        </form>

            </form>

            </div>
        )
    }
}

export default Register