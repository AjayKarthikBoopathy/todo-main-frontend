import React from "react";
import "./signup.css";
import HeadingComp from "./HeadingComp";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";


const SignIn = () => {
  const API = "https://todo-main-backend.vercel.app";

  const dispatch = useDispatch();
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };


const signinSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API}/api/user/signin`, Inputs);
      // console.log(response.data);
      if (response.data) {
        sessionStorage.setItem("id", response.data.user._id);
        dispatch(authActions.login());
        history("/todo");
      } else {
        // Handle the case where the response does not contain the expected data
        console.error("Response data or _id not found in the response.");
      }
    } catch (error) {
      // Handle any errors that occurred during the HTTP request
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <div className="signup">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center pt-5">
              <HeadingComp first="SignIn" />
            </div>
            
            <div className="col-lg-8 column d-flex justify-content-center align-items-center ">
              <div className="d-flex flex-column  w-100 p-3">
                <input
                  className="p-2  my-3 input-signup"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={Inputs.email}
                  onChange={change}
                />

                <input
                  className="p-2 my-3 input-signup"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  value={Inputs.password}
                  onChange={change}
                />

                <button className="btn-signup p-2" onClick={signinSubmit}>
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
