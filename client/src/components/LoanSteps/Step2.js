import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Step2() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const [fullname, setFullname] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [dist, setDist] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    const storageData = localStorage.getItem(
      process.env.REACT_APP_LOCAL_STORAGE_KEY
    );
    setId(JSON.parse(storageData).id);
  }, []);


  function sendBack(){
    navigate('/loan-step-1')
    console.log("navigated")
  }

  async function handleSubmitStep2(e) {
    e.preventDefault();

    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/update/step2/${id}`, {
        user_fname: fullname,
        whatsapp_no: whatsapp,
        user_email: email,
        user_address: address,
        pincode: pincode,
        dist: dist,
        state: state,
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data, id)
        if (data.stat === true) {
          navigate("/loan-step-3");
        } else {
          console.log(data);
          alert("Problem in updating Step 2 of your Loan. Please try again");
        }
      });
  }
  return (
    <div className="container" style={{ "margin-top": "40px" }}>
      <div className="howitworks">
        <div className="hero-text">
          <div className="row">
            <div className=" col-md-6">
              <div className=" about-title">
                <h1 className="about-text1" style={{}}>
                  Personal Details
                </h1>
              </div>
              <h1 className="about-text">Step 2 of 5 </h1>
              <div className="regForm">
                <form>
                  {/* One "tab" for each step in the form: */}
                  <div className="tab">
                    <div className="box-body">
                      <div className="form-group">
                        <input
                          type="text"
                          style={{ margin: "10px 0px" }}
                          className="form-control"
                          required="required"
                          name="user_fname"
                          placeholder="Your Name"
                          onChange={(e) => setFullname(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          style={{ margin: "10px 0px" }}
                          className="form-control"
                          required="required"
                          name="whatsapp_no"
                          placeholder="Whatsapp No."
                          maxLength={10}
                          minLength={10}
                          onChange={(e) => setWhatsapp(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          style={{ margin: "10px 0px" }}
                          className="form-control"
                          name="user_email"
                          placeholder="Email Id"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="user_address"
                          style={{ margin: "10px 0px" }}
                          className="form-control"
                          required="required"
                          placeholder="Address"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          style={{ margin: "10px 0px" }}
                          className="form-control"
                          required="required"
                          name="pincode"
                          id="pincode"
                          placeholder="Pin-Code"
                          maxLength={6}
                          minLength={6}
                          onChange={(e) => setPincode(e.target.value)}
                        />
                        {/*<span id="pinrespone"></span>*/}
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="dist"
                          id="dist"
                          style={{ margin: "10px 0px" }}
                          className="form-control"
                          required="required"
                          placeholder="District"
                          onChange={(e) => setDist(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="state"
                          id="state"
                          style={{ margin: "10px 0px" }}
                          className="form-control"
                          required="required"
                          placeholder="State"
                          onChange={(e) => setState(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ padding: "10px" }}>
                    <div
                      className="col-md-6"
                      style={{
                        "-webkit-text-align": "left",
                        "text-align": "left",
                      }}
                    >
                      <button
                        type="button"
                        id="nextBtn"
                        onClick={()=>sendBack()}
                      >
                        previous
                      </button>
                    </div>
                    <div
                      className="col-md-6"
                      style={{
                        "-webkit-text-align": "right",
                        "text-align": "right",
                      }}
                    >
                      <button
                        type="submit"
                        name="submit"
                        onClick={(e) => handleSubmitStep2(e)}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className=" col-md-6">
              <div className=" about-title">
                <h1
                  className="about-text1"
                  style={{ "padding-bottom": "38px", "padding-top": "15px" }}
                >
                  Frequently Asked Questions
                </h1>
              </div>
              <div style={{ "padding-left": "30px", "margin-top": "30px" }}>
                <div className="about-content-title">
                  Q. Why the Personal Details are required?
                </div>
                <div className="about-content">
                  A. The personal details of the user are for the company to
                  assess the eligibility of an individual for loan. Further,
                  these details form the point of communication between the
                  comapny and the user (if required).
                </div>
                <div className="about-content-title">
                  Q. What Details are to be uploaded ?
                </div>
                <div className="about-content">
                  <b> Name:</b> It is recommended to provide the name as
                  mentioned in your Aadhaar Card. <br />
                  <b> Mobile No:</b> Enter the correct 10-digit mobile number.
                  Mobile number is reqiured to get timely updates regarding Loan
                  Approval , or any other point of communication if required.
                  Further, this will serve as a communication medium between the
                  company and the user for sending OTP which will serve as
                  user-password.
                  <br />
                  <b> Email Id:</b> Enter the correct email address. It is
                  reqiured to get timely updates regarding Loan Approval , or
                  any other point of communication if required. Further, this
                  will serve as a communication medium between the company and
                  the user for sending OTP which will serve as user-password.
                  <br />
                  <b> Address:</b> It is recommended to provide the address as
                  mentioned in your Aadhaar Card. <br />
                  <b> DOB: </b> Upon entering the DOB, the company gets the idea
                  of eligibility of the user through their eligibility criteria.
                  The same information is intimated to the user.
                  <br />
                  <b>Occupation:</b> Upon entering the Occupation, the company
                  gets the idea of repaying capacity of the user through their
                  eligibility criteria. The same information is intimated to the
                  user.
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ "margin-bottom": "200px" }}>
            <div className=" col-md-12 col-sm-12">
              <div className>
                <div className="rbi-content">
                  <br />
                  <br />
                  Disclaimer :<br />
                  We provide the user with an EMI calculator which is along the
                  application process itself. It is a tool that calculates your
                  monthly loan installment and provides the user with the idea
                  of the amount he will have to pay after loan disbursement. The
                  calculation is made on the basis of inputs given by the user
                  like Loan Amount, &amp; Loan Tenure. This Calculator also
                  calculates the Interest Amount by using Rates of Interest
                  which are standard to the company. The EMI amount serves as
                  monthly Repayment of the Loan Amount and will be carried on up
                  till tenure selected.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;
