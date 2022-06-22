import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Step4() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const [bankName, setBankName] = useState("");
  const [accHolderName, setAccHolderName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [accNumber, setAccNumber] = useState("");

  useEffect(() => {
    const storageData = localStorage.getItem(
      process.env.REACT_APP_LOCAL_STORAGE_KEY
    );
    setId(JSON.parse(storageData).id);
  }, []);


  function sendBack(){
    navigate('/loan-step-5')
  }

  async function handleSubmitStep4(e) {
    e.preventDefault();

    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/update/step4/${id}`, {
        bank_name : bankName,
        bank_acc_holder_name : accHolderName,
        bank_ifsc : ifsc,
        bank_acc_no : accNumber
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data, id)
        if (data.stat === true) {
          navigate("/loan-step-5");
        } else {
          console.log(data);
          alert("Problem in updating Step 4 of your Loan. Please try again");
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
                  Bank Detail
                </h1>
              </div>
              <h1 className="about-text">Step 4 of 5 </h1>
              <div className="regForm">
                <form action="bank-process.php" method="post">
                  {/* One "tab" for each step in the form: */}
                  <div className="tab">
                    <div className="box-body">
                      <div className="form-group">
                        <input
                          type="text"
                          style={{ margin: "10px 0px" }}
                          className="form-control"
                          required="required"
                          name="bank_name"
                          placeholder="Your Bank Name"
                          onChange={(e)=>setBankName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          style={{ margin: "10px 0px" }}
                          className="form-control"
                          required="required"
                          name="bank_acc_holder_name"
                          placeholder="Account Holder Name"
                          onChange={(e)=> setAccHolderName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          style={{ margin: "10px 0px" }}
                          className="form-control"
                          required="required"
                          name="bank_acc_no"
                          placeholder="Bank Account Number"
                          onChange={(e)=> setAccNumber(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          style={{ margin: "10px 0px" }}
                          className="form-control"
                          required="required"
                          name="bank_ifsc"
                          placeholder="IFSC Code"
                          onChange={(e)=> setIfsc(e.target.value)}
                        />
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
                          onClick={(e)=>sendBack()}
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
                          value="submit"
                          onClick={(e)=>handleSubmitStep4(e)}
                        >Next</button>
                      </div>
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
                  Q. Why Bank Details are required? Are they mandatory?
                </div>
                <div className="about-content">
                  A. Yes, Bank Details are mandatory. The company saves these
                  bank details and once the loan gets disbursed, the user can
                  log into his dashboard and pay his EMI using these details
                  through our payment gateway.
                </div>
                <div className="about-content-title">
                  Q. Why do I have to give my bank details including my bank's
                  name?
                </div>
                <div className="about-content">
                  A. You are required to submit your basic bank details so that
                  the loan documents could be shared with your bank.
                </div>
                <div className="about-content-title">
                  Q. What does account holder represent in form?
                </div>
                <div className="about-content">
                  A. The account holder's name indicates the name of the person
                  who is applying for the loan and have a personal banking
                  account with internet banking facilities.
                </div>
                <div className="about-content-title">Q. What is IFSC?</div>
                <div className="about-content">
                  A. The IFSC (India Financial System Code) is an 11-digit
                  alphanumeric code which helps to identify your bank’s branch
                  for online transfer via NEFT, IMPS, or RTGS.
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row" style={{ "margin-bottom": "150px" }}>
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

export default Step4;
