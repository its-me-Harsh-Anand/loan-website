import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Step3() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const [loanAmount, setLoanAmount] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [loanType, setLoanType] = useState("");
  const [loanInterestRate, setLoanInterestRate] = useState("");
  const [loanEmi, setLoanEmi] = useState("");

  useEffect(() => {
    const storageData = localStorage.getItem(
      process.env.REACT_APP_LOCAL_STORAGE_KEY
    );
    setId(JSON.parse(storageData).id);
  }, []);

  function sendBack() {
    navigate("/loan-step-2");
  }

  async function handleSubmitStep3(e) {
    e.preventDefault();

    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/update/step3/${id}`, {
        loan_amount : loanAmount,
        loan_registration_fee : "500",
        loan_tenure : loanTenure,
        loan_type : loanType,
        loan_interest_rate : loanInterestRate,
        loan_emi : loanEmi
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data, id);
        if (data.stat === true) {
          navigate("/loan-step-4");
        } else {
          console.log(data);
          alert("Problem in updating Step 3 of your Loan. Please try again");
        }
      });
  }

  const executeSum = function () {
    // Use this function at its required place

    var myInput = document.getElementById("myInput").value;
    var loan_tenure = document.getElementById("loan_tenure").value;

    var interest = 0;
    var a = parseFloat(myInput);
    var b = parseFloat(loan_tenure);
    interest = parseInt(((a * 1) / 100) * (b * 7.5));

    document.getElementById("loan_interest_rate").value = interest;
    setLoanInterestRate(interest)

    myInput = document.getElementById("myInput").value;
    var loan_interest_rate = document.getElementById("loan_interest_rate").value;
    loan_tenure = document.getElementById("loan_tenure").value;

    var emi = 0;
    var x = parseInt(myInput);
    var y = parseFloat(loan_interest_rate);
    var z = parseFloat(loan_tenure);
    emi = parseInt((x + y) / (z * 12));

    document.getElementById("loan_emi").value = emi;
    setLoanEmi(emi)
  };

  return (
    <div className="container" style={{ "margin-top": "40px" }}>
      <div className="howitworks">
        <div className="hero-text">
          <div className="row">
            <div className=" col-md-6">
              <div className=" about-title">
                <h1 className="about-text1">Loan Details</h1>
              </div>
              <h1 className="about-text">Step 3 of 5 </h1>
              <div className="regForm">
                <form action="loan-process.php" method="post">
                  {/* One "tab" for each step in the form: */}
                  <div className="tab">
                    <div className="form-group">
                      <input
                        type="number"
                        id="myInput"
                        oninput="myFunction()"
                        onChange={(e) => {
                          executeSum();
                          setLoanAmount(e.target.value);
                        }}
                        className="form-control"
                        min={100000}
                        max={3000001}
                        required="required"
                        name="loan_amount"
                        placeholder="Loan Amount"
                      />
                      <p>
                        Please enter a number from <strong>1,00,000</strong> to{" "}
                        <strong>30,00,000</strong>.
                      </p>
                    </div>
                    <div className="form-group">
                      <select
                        name="loan_tenure"
                        id="loan_tenure"
                        className="form-control"
                        required="required"
                        onChange={(e) => {executeSum(); setLoanTenure(e.target.value)}}
                        style={{ margin: "10px 0px" }}
                      >
                        <option value selected="selected">
                          Loan Tenure
                        </option>
                        <option value={1}>1 year</option>
                        <option value={1.5}>1.5 years</option>
                        <option value={2}>2 years</option>
                        <option value={2.5}>2.5 years</option>
                        <option value={3}>3 years</option>
                        <option value={3.5}>3.5 years</option>
                        <option value={4}>4 years</option>
                        <option value={4.5}>4.5 years</option>
                        <option value={5}>5 years</option>
                        <option value={5.5}>5.5 years</option>
                        <option value={6}>6 years</option>
                        <option value={6.5}>6.5 years</option>
                        <option value={7}>7 years</option>
                        <option value={7.5}>7.5 years</option>
                        <option value={8}>8 years</option>
                        <option value={8.5}>8.5 years</option>
                        <option value={9}>9 years</option>
                        <option value={9.5}>9.5 years</option>
                        <option value={10}>10 years</option>
                        <option value={10.5}>10.5 years</option>
                        <option value={11}>11 years</option>
                        <option value={11.5}>11.5 years</option>
                        <option value={12}>12 years</option>
                        <option value={12.5}>12.5 years</option>
                        <option value={13}>13 years</option>
                        <option value={13.5}>13.5 years</option>
                        <option value={14}>14 years</option>
                        <option value={14.5}>14.5 years</option>
                        <option value={15}>15 years</option>
                        <option value={15.5}>15.5 years</option>
                        <option value={16}>16 years</option>
                        <option value={16.5}>16.5 years</option>
                        <option value={17}>17 years</option>
                        <option value={17.5}>17.5 years</option>
                        <option value={18}>18 years</option>
                        <option value={18.5}>18.5 years</option>
                        <option value={19}>19 years</option>
                        <option value={19.5}>19.5 years</option>
                        <option value={20}>20 years</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                        name="loan_type"
                        id="loan_type"
                        className="form-control"
                        required="required"
                        onChange={(e) => {executeSum(); setLoanType(e.target.value)}}
                      >
                        <option value selected="selected" disabled>
                          Select Loan Type
                        </option>
                        <option value="Personal Loan">Personal Loan</option>
                        <option value="Business Loan">Business Loan</option>
                        <option value="Home Loan">Home Loan</option>
                        <option value="Education Loan">Education Loan</option>
                        <option value="Commercial Vehicle Loan">
                          Commercial Vehicle Loan
                        </option>
                        <option value="Loan Against Property">
                          Loan Against Property
                        </option>
                      </select>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="bank_acc_no">
                            Total Interest Amt* (ROI:7.5%)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="loan_interest_rate"
                            id="loan_interest_rate"
                            onChange={(e) => {executeSum(); setLoanInterestRate(e.target.value)}}
                            placeholder="Rs. 0.00"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="ifsc">EMI (INR)*</label>
                          <input
                            type="text"
                            className="form-control"
                            id="loan_emi"
                            name="loan_emi"
                            onChange={(e) => {executeSum(); setLoanEmi(e.target.value)}}
                            placeholder="Rs. 0.00"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>
                            Loan Registration Fee: Rs. <span id="demo">500.00</span>
                          </strong>
                          <input
                            type="hidden"
                            name="loan_registration_fee"
                            value="500"
                          />
                        </div>
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
                        onClick={() => sendBack()}
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
                        onClick={(e) => handleSubmitStep3(e)}
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
                  Q. What is Loan Amount?
                </div>
                <div className="about-content">
                  A. This is the amount that the user wishes to take from us in
                  the form of loan. The user promises the repayment of the loan
                  along with the interest charged on the basis of company's
                  standard rates of interest.
                </div>
                <div className="about-content-title">
                  Q. What is Loan Tenure?
                </div>
                <div className="about-content">
                  A. The Loan Tenure is the fixed time between the Financial
                  institution, or NBFC which is decided by the user. Up until
                  time time, the user promises to repay all of the loan amount
                  along with the interest.
                </div>
                <div className="about-content-title">
                  Q. What is the Rate of Interest Offered?
                </div>
                <div className="about-content">
                  A. Rate of interest is the interest rate at which the loan is
                  provided by any bank or nbfc. We on LoanTark provide loan at
                  <b> 7.5% interest rate only.</b>
                </div>
                <div className="about-content-title">
                  Q. What is Total Interest Amount?
                </div>
                <div className="about-content">
                  A. Total Interest Amount is calculated based on user's input.
                  It's purely dependent upon the loan amount, the loan tenure as
                  entered by the user, and the rates of interest which is 7%
                  yearly. The interest amount is the total amount the customer
                  will have to pay above the Loan Amount.
                </div>
                <div className="about-content-title">
                  Q. What is Service Charge?
                </div>
                <div className="about-content">
                  A. A small service charge is charged by the company for the
                  service given by the company to process the loan application.
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
                    We provide the user with an EMI calculator which is along
                    the application process itself. It is a tool that calculates
                    your monthly loan installment and provides the user with the
                    idea of the amount he will have to pay after loan
                    disbursement. The calculation is made on the basis of inputs
                    given by the user like Loan Amount, &amp; Loan Tenure. This
                    Calculator also calculates the Interest Amount by using
                    Rates of Interest which are standard to the company. The EMI
                    amount serves as monthly Repayment of the Loan Amount and
                    will be carried on up till tenure selected.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step3;
