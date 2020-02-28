import React, { Component } from "react";
import "./SignIn.css";

class SignIn extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <body>
          <div className="backgroundImg">
            <div className="centerDiv">
              <img
                src="https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-128.png"
                id="profilePic"
              />
              <h2>USER LOGIN</h2>
              <form>
                <div>
                  <input
                    type="text"
                    name=""
                    className="inputbox"
                    placeholder="Username"
                  />
                </div>
                <br />
                <div>
                  <input
                    type="password"
                    name=""
                    className="inputbox"
                    placeholder="Password"
                  />
                </div>
                <br />
                <div>
                  <button type="submit">LOGIN</button>
                </div>
              </form>
              <br />
              <div className="FORGOTPASSWORD">
                <h4>
                  <u>Forgot Password?</u>
                </h4>
              </div>
            </div>
          </div>
        </body>
      </React.Fragment>
    );
  }
}

export default SignIn;
