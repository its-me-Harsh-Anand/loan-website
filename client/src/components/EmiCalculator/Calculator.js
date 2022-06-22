import React from "react";

function Calculator() {
  return (
    <div className="container" style={{ "marginTop": "40px" }}>
      <div className="howitworks">
        <div className="hero-text">
          <div className="row">
            <div className=" col-md-6">
              <div className=" about-title">
                <h1 className="about-text1">Calculate Loan Details</h1>
              </div>
              <h1 className="about-text">EMI Calculator </h1>
              <div>
                {/* EMI Calculator Widget START */}
                <div id="ecww-widgetwrapper" style={{"minWidth":"250px","width":"100%"}}><div id="ecww-widget" style={{"position":"relative","padding-top":"0","height":"0","overflow":"hidden","padding-bottom":"840px"}}><iframe id="ecww-widget-iframe" frameBorder={0} scrolling="no" width="800px" height="280px" src="https://emicalculator.net/widget/2.0/widget.html" style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%"}} /></div><div id="ecww-more" style={{"background":"#333","font":"normal 13px/1 Helvetica, Arial, Verdana, Sans-serif","padding":"10px 0","color":"#FFF","-webkit-text-align":"center","text-align":"center","width":"100%","clear":"both","margin":"0","float":"left"}}><a style={{"background":"#333","color":"#FFF","-webkit-text-decoration":"none","text-decoration":"none","border-bottom":"1px dotted #ccc"}} href="#" title="Loan EMI Calculator" rel="nofollow" target="_blank" /></div></div>
                {/* EMI Calculator Widget END */}
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
                  Q. What is Total Interest Amount?
                </div>
                <div className="about-content">
                  A. Total Interest Amount is calculated based on user's input.
                  It's purely dependent upon the loan amount, the loan tenure as
                  entered by the user, and the rates of interest which is 7.5%
                  yearly. The interest amount is the total amount the customer
                  will have to pay above the Loan Amount.
                </div>
                <div className="about-content-title">
                  Q. What is Rate of Interest?
                </div>
                <div className="about-content">
                  A. Rate of interest is the interest rate at which the loan is
                  provided by any bank or nbfc. We on LoanTark provide loan at
                  <b> 7.5% interest rate only.</b>
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

export default Calculator;
