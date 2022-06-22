import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Step1() {
  const navigate = useNavigate()
  const [aadhar, setAadhar] = useState("")
  const [pan, setPan] = useState("")
  const [id, setId] = useState("")

  useEffect(()=>{
    const storageData = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY)
    setId(JSON.parse(storageData).id)
  },[])

  function handleSubmitStep1(e){
    e.preventDefault()


    axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/update/step1/${id}`, {kyc_adhr_no : aadhar, kyc_pan_no : pan})
    .then(res => res.data)
    .then(data => {
      if(data.stat === true){
        navigate('/loan-step-2')
      } else {
        console.log(data)
        alert("Aadhar Number or Pan Number already existing")
      }
    })
  }

  return (
    <div className="container" style={{ "margin-top": "40px" }}>
      <div className="howitworks">
        <div className="hero-text">
          <div className="row">
            <div className=" col-md-6">
              <div className=" about-title">
                <h1 className="about-text1" style={{}}>
                  Apply for Loan
                </h1>
              </div>
              <h1 className="about-text">Step 1 of 5 </h1>
              <h1 className="about-text">Aadhaar Detail</h1>
              <div className="regForm">
                <form
                  method="post"
                >
                  {/* One "tab" for each step in the form: */}
                  <div className="tab">
                    <input
                      type="text"
                      placeholder="Enter 12 digit Aadhar card Number"
                      className="form-control"
                      minLength={12}
                      maxLength={12}
                      name="kyc_adhr_no"
                      required
                      onChange={(e)=>setAadhar(e.target.value)}
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Pan No"
                      className="form-control"
                      name="kyc_pan_no"
                      required
                      onChange={(e)=> setPan(e.target.value)}
                    />
                  </div>
                  <div style={{ overflow: "auto" }}>
                    <div
                      style={{
                        "-webkit-text-align": "center",
                        "text-align": "center",
                      }}
                    >
                      <button
                        type="submit"
                        value="submit"
                        name="submit"
                        onClick={(e)=> handleSubmitStep1(e)}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </form>
              </div>
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
                Q. Why Aadhaar Details or the KYC Details required?
              </div>
              <div className="about-content">
                A. The distinctive number on the Aadhaar Card serves as a proof
                of identity, and equivalently a residential proof for an
                individual which is applicable anywhere in India. It is a
                12-digit identification number issued by the Unique
                Identification Authority of India on behalf of the Government of
                India. This is obligatory for availing a loan via any govt.
                authorized institution, or NBFC{" "}
              </div>
              <div className="about-content-title">
                Q. How can I upload my Aadhar Card Details?
              </div>
              <div className="about-content">
                A. You would need to upload the front size image &amp; the back
                side image of your Aadhaar seperately as both sides have
                distinctive details. The Front Side has your Name, Gender, &amp;
                Aadhaar Number (UID No.) while, the Back Side has your
                Residential Address mentioned.
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ "margin-bottom": "150px" }}>
          <div className=" col-md-12 col-sm-12">
            <div className>
              <div className="rbi-content">
                <br />
                <br />
                Disclaimer :<br />
                We provide the user with an EMI calculator which is along the
                application process itself. It is a tool that calculates your
                monthly loan installment and provides the user with the idea of
                the amount he will have to pay after loan disbursement. The
                calculation is made on the basis of inputs given by the user
                like Loan Amount, &amp; Loan Tenure. This Calculator also
                calculates the Interest Amount by using Rates of Interest which
                are standard to the company. The EMI amount serves as monthly
                Repayment of the Loan Amount and will be carried on up till
                tenure selected.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step1;
