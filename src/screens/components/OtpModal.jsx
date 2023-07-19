import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import requestInstance from "../../utils/axios";

const OtpModal = ({ email }) => {
  const [otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp({ ...otp, [e.target.name]: e.target.value });
  };

  const submitOtp = async () => {
    const otpString = otp.first + otp.second + otp.third + otp.fourth;
    try {
      const valildate = await requestInstance.post("/auth/verify", {
        email,
        otp: otpString,
      });
      if (valildate.status === 200) {
        console.log(valildate);
        navigate("/newpassword/"+ valildate.data.token);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <dialog id="otp_modal" className="modal modal-middle sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg text-center">
          Please Enter the One-Time to Verify
        </h3>
        <p className="py-1 text-center center px-16 mb-4">
          A one time pin has been sent to your email address. Please enter the
        </p>
        <div className="flex justify-center">
          <input
            name="first"
            onChange={handleChange}
            className="m-2 border h-12 w-12 text-center form-control rounded"
            type="text"
            id="third"
            maxlength="1"
          />
          <input
            name="second"
            onChange={handleChange}
            className="m-2 border h-12 w-12 text-center form-control rounded"
            type="text"
            id="fourth"
            maxlength="1"
          />
          <input
            name="third"
            onChange={handleChange}
            className="m-2 border h-12 w-12 text-center form-control rounded"
            type="text"
            id="fifth"
            maxlength="1"
          />
          <input
            name="fourth"
            onChange={handleChange}
            w
            className="m-2 border h-12 w-12 text-center form-control rounded"
            type="text"
            id="sixth"
            maxlength="1"
          />
        </div>
        <div className="modal-action flex-row-reverse justify-center">
          <button
            onClick={() => submitOtp()}
            className="btn bg-blue-600 text-white mx-2"
          >
            Verfiy
          </button>
          <button className="btn">Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default OtpModal;
