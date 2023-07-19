import React, { useState } from "react";
import loginOne from "../assets/login_one.png";
import loginTwo from "../assets/login_two.png";
import { Link } from "react-router-dom";
import requestInstance from "../utils/axios";
import SuccessModal from "./components/SuccessModal";
import FailureModal from "./components/FailureModal";
import LoadingScreen from "./components/LoadingScreen";

const LoginScreen = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    try {
      window.loading_modal.showModal();
      await requestInstance.post("/auth/login", {
        email: state.email,
        password: state.password,
      });
      window.loading_modal.close();
      window.success_modal.showModal();
    } catch (err) {
      window.loading_modal.close();
      window.failure_modal.showModal();
    }
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="hero min-h-screen bg-white">
      <LoadingScreen/>
      <SuccessModal message="You have successFully Logged in" />
      <FailureModal title="Login Failed" message="You have failed to login" />
      <div className="hero-content flex-col z-20 lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Login</h1>
              <p className="py-6">
                This page has a login vulnerability. <br />
                It's your duty to find where it is.
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={handleChange}
                name="password"
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="/reset" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button onClick={() => login()} className="btn btn-primary">
                Login
              </button>
              <div className="mt-2 text-center">
                <p>
                  Not registered?{" "}
                  <span className="text-blue-600">
                    <Link to="/signup">Signup</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 ">
        <img
          src={loginOne}
          alt="loginOne"
          className="h-[200px] max-sm:h-[150px]"
        />
      </div>
      <div className="absolute bottom-0 left-0">
        <img
          src={loginTwo}
          alt="loginTwo"
          className="h-[200px] max-sm:h-[150px]"
        />
      </div>
    </div>
  );
};

export default LoginScreen;
