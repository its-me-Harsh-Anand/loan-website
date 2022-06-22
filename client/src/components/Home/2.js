import React from 'react'

export default function Home2() {
      return (

        <div className="row Home-area2" id="about" style={{margin: '0px', padding: '0px'}}>
          <div className="col-12 Home-main-area2">
            <div className="row col-12 desktop" style={{justifyContent: 'center', textAlign: 'center'}}>
              <h2>Who we are &amp; How do we help you</h2>
            </div>
            <div className="row col-12 mobile" style={{justifyContent: 'center', textAlign: 'center', padding: '0px 0px 0px 20px'}}>
              <h3>Who we are &amp; How do we help you</h3>
            </div>
            {/* === desktop === */}
            <div className="desktop">
              <div className="row" style={{marginTop: '70px'}}>
                <div className="col-5" style={{paddingLeft: '100px'}}>
                  <div className="img_frame">
                    <img className="img" src="assets/home/aboutinfo.webp" alt=''/>
                  </div>
                </div>
                <div className="col-7" style={{paddingRight: '100px', textAlign: 'left', fontWeight: 600, fontSize: '18px', lineHeight: '40px'}}>
                  <p> LoanTark and its professional team have decades of experience in financial services. LoanTark 
                    provides you loans as per your requirements and financial requirements. <b> We provide loans up to 30 lakh at a 7.5% rate of interest with a 1 to 20 years repayment facility without any processing fees.</b></p>
                  <p> It is very easy to get a loan with LoanTark. Select the loan you are looking for, fill the form, fill in the details and we will get back to you within 1 hour. Once approved, the amount will be transferred to your account within a fortnight.</p>
                  <p>Terms and Conditions* We provide all types of loans, such as - Business 
                    loans, Personal loans / Financial Help to those who look for Child Education / domestic expenses, vehicles, Renovation of Homes, Unavoidable Medical Expenses / Emergency, &amp; Overseas Travel plans, 
                    etc. We provide you what we excel in. Contact the LoanTark team today!</p>
                </div>
              </div>
            </div>
            {/* === mobile === */}
            <div className="mobile">
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'center', marginTop: '80px', padding: '0px 0px 0px 30px'}}>
                <img src="assets/home/aboutinfo.webp" alt='' /> 
              </div>
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'left', fontWeight: 600, fontSize: '16px', lineHeight: '40px', marginTop: '40px', padding: '0px 0px 0px 30px'}}>
                <p> LoanTark and its professional team have decades of experience in financial services. LoanTark 
                  provides you loans as per your requirements and financial requirements. <b>We provide loans up to 30 lakh at a 7.5% rate of interest with a 1 to 20 years repayment facility without any processing fees.</b></p>
              </div>
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'left', fontWeight: 600, fontSize: '16px', lineHeight: '40px', padding: '0px 0px 0px 30px'}}>
                <p> It is very easy to get a loan with LoanTark. Select the loan you are looking for, fill the form, fill in the details and we will get back to you within 1 hour. Once approved, the amount will be transferred to your account within a fortnight.</p>
              </div>
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'left', fontWeight: 600, fontSize: '16px', lineHeight: '40px', padding: '0px 0px 0px 30px'}}>
                <p>Terms and Conditions* We provide all types of loans, such as - Business 
                  loans, Personal loans / Financial Help to those who look for Child Education / domestic expenses, vehicles, Renovation of Homes, Unavoidable Medical Expenses / Emergency, &amp; Overseas Travel plans, 
                  etc. We provide you what we excel in. Contact the LoanTark team today!</p>
              </div>
            </div>
            <div id="apply"> </div>
          </div>
        </div>
      );
    }
    

// export default function Home2() {
//   return (
//     <div>Home2</div>
//   )
// }
