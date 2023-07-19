import React, { useState, useEffect } from "react";
import OtpModal from "./components/OtpModal";
import requestInstance from "../utils/axios";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import FailureModal from "./components/FailureModal";

const ResetPasword = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    otp: "",
  });


  const resetPassword = async () => {
    try {
      window.loading_modal.showModal();

       await requestInstance.post("/auth/reset", {
        "email": state.email,
      });
      window.loading_modal.close();
      window.otp_modal.showModal();

    } catch (err) {
      window.loading_modal.close();
      window.failure_modal.showModal();
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };


  return (
    <div className="hero min-h-screen bg-base-100">
      <LoadingScreen></LoadingScreen>
      <FailureModal message="Yoou hava provided a wrong otp"  title="Otp Failed" />
      <div className="flex-col hero-content lg:flex-row-reverse">
        <OtpModal email={state.email}  resetPassword={resetPassword} />
        <div>
          <h1 className="mb-5 text-5xl font-bold">Reset Password</h1>
          <p className="mb-5">
            This page has a login vulnerability. It's your duty to find where it
            is.
          </p>
          <div className="flex items-center">
            <input
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="Email"
              className="w-full max-w-sm mr-5 input outline-none input-bordered"
            />
            <button
              onClick={() => resetPassword()}
              className="btn btn-primary"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasword;
