import {Component} from  "react"

import "./index.css"

class Login  extends Component {
    render(){
        return(
            <div>
            
            <div className = "login-container">
                <form className="form-container">
                <img className="login-website-logo"
                src="https://res.cloudinary.com/cdac01/image/upload/v1643090402/images-1_lzdgox.png"
                alt="Login.jpg" />
                    <div className = "input-container">
                    <label htmlFor="username" className="input-label">USERNAME</label>
                    <input type = "text" className="username-input-filed" id="username" placeholder="Username" />
                    </div>
                    <div className = "input-container">
                    <label htmlFor="password" className="input-label">PASSWORD</label>
                    <input type = "password" className="username-input-filed" id="password" placeholder="Password" />
                    </div>
                    <button type = "submit" className = "login-button">Login</button>
                </form>
            </div>
            </div>
        )
    }
}
export default Login