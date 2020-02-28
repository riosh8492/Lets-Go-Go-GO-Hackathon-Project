import React, { Component } from "react";
import "./SignUp.css";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <html>
          <head>
            <meta charset="UTF-8"></meta>
            <title>LoginForm</title>
          </head>
          <body>
            <div className="wrap">
              <form>
                <h2>SignUp Free</h2>
                <input
                  type="text"
                  name="yourname"
                  placeholder="Your Name"
                ></input>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                ></input>
                <input
                  type="text"
                  name="studentId"
                  placeholder="Your Student ID"
                ></input>
                <input
                  type="password"
                  name="socialSecuritNumber"
                  placeholder="Your SSN"
                ></input>
                <input
                  type="text"
                  name="driverLicense"
                  placeholder="Your DL Number"
                ></input>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Your Phone Number"
                ></input>
                <input
                  type="text"
                  name="address"
                  placeholder="Your address"
                ></input>
                <input
                  type="text"
                  name="address2"
                  placeholder="City, State, Zipcode"
                ></input>
                <input
                  type="text"
                  name="userName"
                  placeholder="Create your username"
                ></input>
                <input
                  type="password"
                  name="pwd"
                  placeholder="Create your Password"
                ></input>
                <input
                  type="number"
                  name="DOB"
                  placeholder="DOB dd/mm/yyyy"
                ></input>
                <input type="radio" name="male" value="male">
                  Male
                </input>
                <input type="radio" name="female" value="female">
                  Female
                </input>
                <br>
                  <input type="checkbox"> I Agree to the Terms of Use </input>
                </br>
                <input type="submit" vaule="submit Now"></input>
              </form>
            </div>
          </body>
        </html>
      </React.Fragment>
    );
  }
}

export default SignUp;
