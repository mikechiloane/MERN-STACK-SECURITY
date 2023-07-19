import React, { useState } from "react";
import requestInstance from "../utils/axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";

const NewPasword = () => {


  const {token} = useParams();

  const [state,setState] = useState({
    token,
    password:'',
  }); 

  const navigate = useNavigate();




  const setNewPassword = async () => {
    try {
      window.loading_modal.showModal();

   await requestInstance.post('/auth/newpassword', {
      token:token,password:state.password});
      navigate('/');
      window.loading_modal.close();
      }
      catch(err){
        window.loading_modal.close();
        console.log(err);
      }

    }

    const handleChange = (e) => {
        setState({...state,[e.target.name]:e.target.value})
        }


  return (
    <div className="hero min-h-screen bg-base-100">
      <LoadingScreen></LoadingScreen>
      <div className="flex-col hero-content lg:flex-row-reverse">

        <div>
          <h1 className="mb-5 text-5xl font-bold">Enter new Password</h1>
          <p className="mb-5">
            This page has a login vulnerability. It's your duty to find where it
            is.
          </p>
          <div className="flex items-center">
            <input
            name="password"
              type="text"
            onChange={handleChange}
              placeholder="New Password"
              className="w-full max-w-sm mr-5 input outline-none input-bordered"
            />
            <button
              onClick={() => setNewPassword()}
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

export default NewPasword;
