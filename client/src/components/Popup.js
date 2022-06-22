import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Popup(props) {
  const navigate = useNavigate();
  const { fullname, number } = props;
  const [otp, setOtp] = useState(0);
  const [sendingText, setSendingText] = useState("Resend OTP")

  function handleResendOTP(e) {
    setSendingText("Sending OTP Again")
    e.preventDefault();
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/verify/getcode/`, {
        params: { phonenumber: number, channel: "sms" },
      })
      .then((res) => {
        setSendingText("Resend OTP")
        return res.data;
      })
      .then((data) => {
        if (data.sid){
          alert("OTP Sent")
        }
      }).catch(err=>{  
        setSendingText("Resend OTP")
        alert("Something went wrong while sending OTP. Please try again");
      })
  }

  function handleUserRegistration(e) {
    e.preventDefault();

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/verify/verifycode`, {
        params: { phonenumber: number, code: otp },
      })
      .then((res) => res.data)
      .then((data) => {
        if (data.valid) {
          axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/user/register`, {
              user_fname: fullname,
              user_mobile: number,
              user_otp: otp,
            })
            .then((res) => res.data)
            .then((data) => {
              if (data.stat) {
                localStorage.setItem(
                  process.env.REACT_APP_LOCAL_STORAGE_KEY,
                  JSON.stringify({ id: data.id })
                );
                navigate("/loan-step-1");
              } else {
                alert("Wrong OTP. Please enter the correct OTP");
                return;
              }
            });
        }
      });
  }
  return (
    <div
      className="modal popreg show"
      id="myModal"
      aria-modal="true"
      style={{ "padding-right": "17px", display: "block" }}
    >
      <div className="wd-25% " style={{ padding: "20px" }}>
        <div className="otp-title"> Enter OTP</div>
        {/**/}
        <form method="post">
          <p className="otp-stitle">
            A One Time Password (OTP) has been sent to your registered mobile
            number. Kindly save it, it will be used for login in future.
          </p>
          {/* <div className="form-group rform">
            <input
              type="hidden"
              name="user_mobile"
              placeholder="Mobile"
              className="form-control"
            />
          </div> */}
          <div className="form-group rform" style={{ margin: "10px 40px" }}>
            {/* <input type="hidden" name="user_mobile" className="form-control" /> */}
            <input
              type="number"
              name="user_otp"
              placeholder="Mobile OTP"
              className="popinput"
              onChange={(e) => setOtp(e.target.value)}
              style={{ color: "#707070", opacity: "1" }}
            />
          </div>
          <div className="form-group offset-3 submit_opt_nw">
            <button
              type="submit"
              value="submit"
              name="verifyotp"
              onClick={(e) => handleUserRegistration(e)}
            >
              Submit
            </button>
          </div>
        </form>
        <form action="" method="post" className="form_mod">
          <a
            type="submit"
            name="resendotp"
            onClick={(e) => handleResendOTP(e)}
            className="resend new_send"
          >
            {sendingText}
          </a>
          <p />
        </form>
      </div>
    </div>
  );
}

export default Popup;
