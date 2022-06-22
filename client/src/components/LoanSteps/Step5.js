import axios from "axios";
import React, { useEffect, useState } from "react";

function Step5() {
  // name, loan, emi
  const [name, setName] = useState("");
  const [loan, setLoan] = useState("");
  const [emi, setEmi] = useState("");
  const [loantype, setLoanType] = useState("");
  const [tenure, setTenure] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/user/${
          JSON.parse(
            localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY)
          ).id
        }`
      )
      .then((res) => res.data)
      .then((data) => {
        setName(data.user_fname);
        setLoan(data.loan_amount);
        setEmi(data.loan_emi);
        setLoanType(data.loan_type);
        setTenure(data.loan_tenure);
        setMobile(data.user_mobile);
        setEmail(data.user_email);
      });
  }, []);

  function handleSubmitStep5(e) {
    e.preventDefault();

    const message = `
    Dear ${name},
    Your application for ${loantype} and loan amount ${loan} is under process by LoanTark.Your Interest Rate 7.5 % per anumm and EMI ${emi} for tenure ${tenure} years. Submit all Below Mentioned KYC document earlier
    1.Aadhaar  Card
    2.Pan Card
    3.Self Photograph
    4.Bank Statement
    5.Two References
    For More Information
    Visit http://loan-omega.vercel.app
    Or WhatsApp Us at 1234567890`;

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/message/sendmessage`, {
        to: mobile,
        body: message,
      })
      .then((res) => {
        console.log("Message Response : ", res);
        return res.data;
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(`Error : ${err}`));

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/email/sendemail`, {
        to: email,
        text: message,
      })
      .then((res) => {
        console.log("Email Response : ", res);
        return res.data;
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(`Error : ${err}`));


    window.location.href = `https://wa.me/+917488407549?text=${message}`;
  }

  return (
    <div className="container">
      <div className="howitworks">
        <div className="row">
          <div className="col-md-12  ">
            <div
              id="myCarousel"
              className="carousel slide pointer-event"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div
                  style={{
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "margin-top": "20px",
                    "font-family": "Montserrat",
                  }}
                >
                  <b>
                    Contralutions to our Happy customer for receiving their
                    loan!
                  </b>
                </div>
                <div className="item carousel-item">
                  <p
                    className="testimonial"
                    style={{ color: "blue", "font-size": "18px" }}
                  >
                    {" "}
                    <i className="fa fa-volume-up">
                      {" "}
                      Congratulations 89******785 for succesfully borrowing ₹
                      20,56,000
                    </i>
                  </p>
                </div>
                <div className="item carousel-item">
                  <p
                    className="testimonial"
                    style={{ color: "blue", "font-size": "18px" }}
                  >
                    {" "}
                    <i className="fa fa-volume-up">
                      {" "}
                      Congratulations 88******998 for succesfully borrowing ₹
                      1,60,000
                    </i>
                  </p>
                </div>
                <div className="item carousel-item">
                  <p
                    className="testimonial"
                    style={{ color: "blue", "font-size": "18px" }}
                  >
                    {" "}
                    <i className="fa fa-volume-up">
                      {" "}
                      Congratulations 79******976 for succesfully borrowing ₹
                      20,00,000
                    </i>
                  </p>
                </div>
                <div className="item carousel-item" style={{ color: "black" }}>
                  <p
                    className="testimonial"
                    style={{ color: "blue", "font-size": "18px" }}
                  >
                    {" "}
                    <i className="fa fa-volume-up">
                      {" "}
                      Congratulations 98******76 for succesfully borrowing ₹
                      28,61,000
                    </i>
                  </p>
                </div>
                <div className="item carousel-item">
                  <p
                    className="testimonial"
                    style={{ color: "blue", "font-size": "18px" }}
                  >
                    {" "}
                    <i className="fa fa-volume-up">
                      {" "}
                      Congratulations 88******777 for succesfully borrowing ₹
                      4,78,000
                    </i>
                  </p>
                </div>
                <div className="item carousel-item">
                  <p
                    className="testimonial"
                    style={{ color: "blue", "font-size": "18px" }}
                  >
                    {" "}
                    <i className="fa fa-volume-up">
                      {" "}
                      Congratulations 92******996 for succesfully borrowing ₹
                      9,80,000
                    </i>
                  </p>
                </div>
                <div className="item carousel-item active">
                  <p
                    className="testimonial"
                    style={{ color: "blue", "font-size": "18px" }}
                  >
                    {" "}
                    <i className="fa fa-volume-up">
                      {" "}
                      Congratulations 74******480 for succesfully borrowing ₹
                      9,50,000
                    </i>
                  </p>
                </div>
                <div className="item carousel-item " style={{ color: "black" }}>
                  <p
                    className="testimonial"
                    style={{ color: "blue", "font-size": "18px" }}
                  >
                    {" "}
                    <i className="fa fa-volume-up">
                      {" "}
                      Congratulations 98******783 for succesfully borrowing ₹
                      29,12,000
                    </i>
                  </p>
                </div>
                <div className="item carousel-item " style={{ color: "black" }}>
                  <p
                    className="testimonial"
                    style={{ color: "blue", "font-size": "18px" }}
                  >
                    {" "}
                    <i className="fa fa-volume-up">
                      {" "}
                      Congratulations 68******779 for succesfully borrowing ₹
                      20,50,000
                    </i>
                  </p>
                </div>
                <div className="item carousel-item " style={{ color: "black" }}>
                  <p
                    className="testimonial"
                    style={{ color: "blue", "font-size": "18px" }}
                  >
                    {" "}
                    <i className="fa fa-volume-up">
                      {" "}
                      Congratulations 88******445 for succesfully borrowing ₹
                      12,22,000
                    </i>
                  </p>
                </div>
                <div className="item carousel-item " style={{ color: "black" }}>
                  <p
                    className="testimonial"
                    style={{ color: "blue", "font-size": "18px" }}
                  >
                    {" "}
                    <i className="fa fa-volume-up">
                      {" "}
                      Congratulations 98******678 for succesfully borrowing ₹
                      16,60,000
                    </i>
                  </p>
                </div>
                <div className="item carousel-item " style={{ color: "black" }}>
                  <p
                    className="testimonial"
                    style={{ color: "blue", "font-size": "18px" }}
                  >
                    {" "}
                    <i className="fa fa-volume-up">
                      {" "}
                      Congratulations 88******555 for succesfully borrowing ₹
                      9,00,000
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-text" style={{ "margin-top": "-200px" }}>
          <div className="row">
            <div className=" col-md-6">
              <h1 className="about-text">Step 5 of 5 </h1>
              <div className="congrats">
                {/* One "tab" for each step in the form: */}
                <div className="tab">
                  <div className="box-body">
                    <div className=" col-md-12 col-sm-12">
                      <div
                        style={{
                          "-webkit-text-align": "center",
                          "text-align": "center",
                        }}
                      >
                        <img
                          src="assets/registration/tick.gif"
                          style={{ "border-radius": "50%", width: "100px" }}
                          alt = "submitted"
                        />
                      </div>
                      <h1 className="about-text">Congratulation! {name}</h1>
                      {/* enter name dynamically here */}
                      <div className="about-content-title">
                        Your application is submitted. You have successfully
                        applied for the loan of Rs. {loan}. The Monthly
                        Installment you will have to pay is Rs. {emi}.
                      </div>
                      <form action="submitorder.php" method="post">
                        <input type="hidden" name="orderId" defaultValue />
                        <input type="hidden" name="amount" />
                        <input
                          type="hidden"
                          name="name"
                          defaultValue="Chomu Bhagat"
                        />
                        <input type="hidden" name="mobile" />
                        <div
                          style={{
                            "-webkit-text-align": "right",
                            "text-align": "right",
                            "margin-top": "20px",
                          }}
                        >
                          <div className="form-group">
                            <strong>
                              Service Charge: <span>Rs. 500 </span>
                            </strong>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row" style={{ padding: "10px" }}>
                    <div
                      className="col-md-12"
                      style={{
                        "-webkit-text-align": "center",
                        "text-align": "center",
                      }}
                    >
                      <button
                        type="submit"
                        value="pay"
                        onClick={(e) => {
                          handleSubmitStep5(e);
                        }}
                      >
                        Submit Application
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    "-webkit-text-align": "center",
                    "text-align": "center",
                  }}
                >
                  <b>
                    You are just a step away to loan disbursal. Click on Submit
                    Application to process your application.
                  </b>
                </div>
              </div>
            </div>
            <div className=" col-md-6">
              <div className=" about-title">
                <h1
                  className="about-text1"
                  style={{ "padding-bottom": "38px", "padding-top": "15px" }}
                >
                  What To DO Next ?
                </h1>
              </div>
              <div style={{ "padding-left": "30px", "margin-top": "30px" }}>
                <div className="about-content-title">
                  Now it’s take your application further, you need to hit that
                  “Submit Application” button and Pay a minimal service fee to
                  complete the application process. Once your application is
                  submitted our system will automatically generate a unique
                  code. This code will be submitted to our Loan Executive. Our
                  associates will then scrutinize the application and they will
                  assist you until your loan amount gets disbursed. You can
                  check the status of your application by visiting your
                  dashboard, a link to which will be generated once the
                  application is submitted. The user can visit the dashboard any
                  number of times. The user can also pay the EMI amount from
                  their dashboard through our payment gateway after loan
                  disbursal.
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

export default Step5;
