import React from 'react'

function About() {
  return (
    <div>
  <div className="container">
    <div className="howitworks"> 
      <div className="hero-text" style={{"padding":"20px"}}>
        <div className="row">
          <div className="offset-md-3 col-md-6 ">
            <div className=" about-title " style={{"margin-top":"25px"}}>
              <h1 className="about-text1 ">About Us</h1>
            </div>
          </div>
          <div className="col-md-12" style={{"margin-top":"0px","padding":"20px","font-family":"'Montserrat', sans-serif"}}>
            <div className="about-content" style={{"-webkit-text-align":"center","text-align":"center"}}>
              <b>Who are we?</b><br /><br />
              LoanTark is a Financial innovation startup which aims to provide financial services to the needy person. We aim to provide our customers with some instant cash in the form of a personal loan. We disperse loans by making our customers go through easy steps with minimal documentation. Our team consists of experienced finance professionals with over 10 years of experience.<br /><br />
              <b>What do we do?</b><br /><br />
              We are an online platform that provides financial products and services to our clients. We took it as a mission to utilize our expertise in providing Business loans, Personal loans / Financial Help to those who look for Child Education / domestic expenses, vehicles, Renovation of Homes, Unavoidable Medical Expenses/ Emergencies, &amp; Overseas Travel plans.<br /><br />
              <b>Why should you choose us?</b><br /><br />
              What makes our products attractive are the affordable interest rates and simplified procedures that have freed us from the traditional time-consuming and complicated financial procedures. At LoanTark, we provide instant and affordable loans, the quick and easy online application process, short disbursement time, highly trained customer representatives to help our customers at every stage of their online application.<br /><br />
              We provide loan/financial help to any Indian citizen who has attained the minimum age of 18 Years and the amount starts from a minimum of <b>₹ 1 Lakh to a maximum of ₹ 30 Lakh at the yearly interest of 7.5% only.</b> The loan tenure is for 1 year to 20 years and must be payable on equal instalment (EMI) including the interest amount. We also, provide quick and easy online application process, Short disbursal times, and etc.<br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className=" text-center" style={{"margin-top":"-20px","padding":"10px"}}>
    <img src="assets/about/loantark nbfc.png" className="mob" alt="nbfc" style={{"top":"0px","display":"block","margin-left":"auto","margin-right":"auto"}} />
  </div>
</div>
  )
}

export default About