import React, { useState } from "react";
import loginImg from "../../assets/login.jpg";
import {  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const Navigate = useNavigate();

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      const FormData = require("form-data");
      let data = new FormData();
      data.append("email", email);
      data.append("password", password);

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login",
        headers: {
          ...(data.getHeaders
            ? data.getHeaders()
            : { "Content-Type": "application/json" }),
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          localStorage.setItem("authToken", JSON.stringify(response.data));
          console.log(JSON.stringify(response.data));
          swal({
            title: "Good job!",
            text: "Successfully Logged In",
            icon: "success",
          });
          Navigate("/Form");
        })
        .catch((error) => {
          console.log(error);
          swal({
            title: "Try Again",
            text: "Login fail",
            icon: "warning",
          });
        });
    }
  };

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      toast.warning("Warning Notification !", {
        //position: toast.POSITION.TOP_LEFT
      });
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Warning Notification !", {
        // position: toast.POSITION.TOP_LEFT
      });
    }

    return result;
  };

  //   async function SignUp(){
  //   //console.warn(email,password);
  //   let item ={email,password};
  //   let response= await fetch("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login",{
  //     method:'POST',
  //     headers:{
  //    "Content-Type":"application/json",
  //    "accept":"application/json"
  //     },
  //     body:JSON.stringify(item)
  //   });
  //   let result= await response.json();
  //   //localStorage.setItem("user_info",JSON.stringify(result))
  //   const authToken = result.body;
  //   //console.log(authToken);
  //   localStorage.setItem("authToken", authToken);
  //  // Navigate("/add")
  //   }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          onSubmit={ProceedLogin}
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        >
          <h2
            className="text-4xl dark:text-white font-bold text-center"
            style={{ color: "white", fontSize: "1.75rem" }}
          >
            Log IN{" "}
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="email">Email</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus\:border-blue-500:focus {
    --tw-border-opacity: 1;
    border-color: rgb(59 130 246 / var(--tw-border-opacity));
} focus:outline-none"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="Password">Password</label>
            <input
              className=" rounded-lg bg-gray-700 mt-2 p-2 focus\:border-blue-500:focus {
    --tw-border-opacity: 1;
    border-color: rgb(59 130 246 / var(--tw-border-opacity));
} focus:outline-none"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-centre">
              <input className="mr-2" type="checkbox" /> Remember Me{" "}
            </p>

            <p>
              <Link to="/Forgot">Forgot Password</Link>
            </p>
          </div>
          <button
            onClick={validate}
            className=" w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
          >
            Log In{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
