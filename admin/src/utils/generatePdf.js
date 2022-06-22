import Approved from "../pdf-assets/approved.png";
import Logo from "../pdf-assets/logo.jpeg";
import Stamp from "../pdf-assets/stamp.jpg";
export function generatePdf(e, user) {
  e.preventDefault();
  e.stopPropagation();

  const d = new Date();
  let date = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
  var mywindow = window.open("", "print-div");
  mywindow.document.write(
    `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${user.user_mobile}-approval-letter</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
          <style>
            @page {
              size: auto; /* auto is the initial value */
              margin: 0mm; /* this affects the margin in the printer settings */
              padding: 10rem;
              size: A4;
            }
            h3 h1 {
              padding: 0px 2px;
            }
            body {
              padding: 40px;
              font-family: 'Roboto', sans-serif;
            }
            .header {
              text-align: center;
              font-size: 24px;
            }
            .header-para {
              width: 300px;
            }
            .header-div {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .header-div_right > img {
              height: 150px;
            }
            .table {
              display: flex;
              flex-direction: column;
              border: 2px solid black;
              padding: 14px;
            }
            .row {
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
            }
            .col {
              min-width: 50%;
              font-size: 1.2rem;
              border: 1px solid black;
              margin: 1px;
              padding-left: 2px;
            }
            .blank {
              height: 130px;
            }
            .approved-div {
              position: relative;
            }
            .approved {
              height: 288px;
              position: absolute;
              right: 12px;
              top: -213px;
            }
          </style>
        </head>
        <body>
          <div class="first-page">
            <h3 class="header">LOAN APPROVAL LETTER</h3>
      
            <div class="header-div">
              <div class="header-div_left">
                <h3 class="header-div-heading">LoanTark - RBI Registerd NBFC</h3>
                <p class="header-para">
                  Loan tark HSG. Sty. Ltd ., Shop No.10, Building No.10, <br />
                  Kamgarnagar, Kurla East, <br />
                  Mumbai, Maharastra 8000200 <br />
                  Mobile: +91 7584813327 <br />
                  Email: contact@loantark.org <br />
                  Web: https://loantark.org
                </p>
              </div>
      
              <div class="header-div_right">
                <img src=${Logo} alt="company logo" />
              </div>
            </div>
      
            <div class="header-div">
              <div class="header-div_left">
                <p class="header-para">
                  To, <br />
                  ${user.user_fname} <br />
                  ${user.user_address} ${user.pincode}<br />
                  ${user.user_email}
                </p>
              </div>
      
              <div class="header-div_right">
                Phone: ${user.user_mobile} <br />
                Document: INF/${user.user_mobile.slice(3, 9)} <br />
                Proposal: INF/${user.user_mobile.slice(3, 9)} <br />
                Dated: ${date}
              </div>
            </div>
      
            <div>
              <h3>Dear,</h3>
              <h2>${user.user_fname}</h2>
              <p>
                LoanTark welcomes you. We are Pleased to inform you that your
                application for Personal Loan of amount Rs ${
                  user.loan_amount
                } has been
                accepted. The information mentioned by you has been investigated
                secretly by the Company team through online aadhaar/pan
                verification.Given below are the details captured in the LoanTark
                Record. Please go through the details carefully and intimate to us
                immediately in case of any discrepancy. Your Application Details are
                given below:
              </p>
            </div>
      
            <h3 class="header">Application Details</h3>
            <div class="table">
              <div class="row">
                <div class="col">Serial No.</div>
                <div class="col">${user.user_mobile}</div>
              </div>
              <div class="row">
                <div class="col">Reference No</div>
                <div class="col">INF/${user.user_mobile.slice(3, 9)}</div>
              </div>
              <div class="row">
                <div class="col">Application No.</div>
                <div class="col">INF/${user.user_mobile.slice(3, 9)}</div>
              </div>
              <div class="row">
                <div class="col">Applicant Name</div>
                <div class="col">${user.user_fname}</div>
              </div>
              <div class="row">
                <div class="col">Applicant Address</div>
                <div class="col">${
                  user.user_address +
                  user.dist +
                  user.state +
                  "-" +
                  user.pincode
                }</div>
              </div>
              <div class="row">
                <div class="col">PAN Number</div>
                <div class="col">${user.kyc_pan_no}</div>
              </div>
              <div class="row">
                <div class="col">Aadhar Number</div>
                <div class="col">${user.kyc_adhr_no}</div>
              </div>
              <div class="row">
                <div class="col">Account Holder</div>
                <div class="col">${user.bank_acc_holder_name}</div>
              </div>
              <div class="row">
                <div class="col">Account Number</div>
                <div class="col">${user.bank_acc_no}</div>
              </div>
              <div class="row">
                <div class="col">IFSC Code</div>
                <div class="col">${user.bank_ifsc}</div>
              </div>
              <div class="row">
                <div class="col">Bank Name</div>
                <div class="col">${user.bank_name}</div>
              </div>
            </div>
          </div>
          <div class="blank"></div>
      
          <h3 class="header">EMI and Loan Amount Approved</h3>
          <div class="table">
            <div class="row">
              <div class="col">EMI</div>
              <div class="col">${user.loan_emi}</div>
            </div>
            <div class="row">
              <div class="col">Loan Amount</div>
              <div class="col">${user.loan_amount}</div>
            </div>
            <div class="row">
              <div class="col">Interest Rate</div>
              <div class="col">7.5 %</div>
            </div>
          </div>
      
          <div class="approved-div">
            <img src=${Approved} alt="Approved !" class="approved" />
          </div>
      
          <h3>Applicant Signature</h3>
          <h3>Date : ${date}</h3>
      
          <div class="send-details">
            <h2>Kindly submit complete documents as mentioned below:</h2>
            <p>
              1. Self attested copy of Aadhar Card and PAN Card <br />
              2. Self attested passport size photograph (two) <br />
              3. Copy of bank statement /Cancelled cheque /bank passbook copy <br />
              4. Two references from your locality (having good goodwill in the
              society) with full details including contact numbers <br />
              5. Processing amount-2,500/- which is refundable
            </p>
          </div>
      
          <p>
            Note-Processing fee is completely refundable within 15 days. <br />
            Account Details: <br />
            Account Holder Name:Loantark Finance Ltd <br />
            Account Number: 34662162784 <br />
            Account Type: Current Account <br />
            IFSC: SBIN0000539 <br />
            Bank Name: State Bank of India <br />
            Bank Address: Mumbai <br />
            Payment Mode: You can make payment through NEFT/RTGS/IMPS/UPI/Net Banking.
            <br />
            Note: Cash Deposit is not allowed as per company's policy
          </p>
      
          <br>
          <br>
          <p>
            Note: Kindly Pay Processing Fee Rs 2,500 today. This is a Computer Generated Document, it Doesn't
            Require Signature
          </p>
        </body>
      </html>      
      `
  );

  setTimeout(() => {
    mywindow.print();
    // mywindow.close();
  }, 1000);
}

export async function generateAgreement(e, user) {
  e.preventDefault();
  e.stopPropagation();
  const ApprovedImg = '/img/approved.png'
  const date = new Date();
  const day = date.getDate();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = month[date.getMonth()];
  const year = date.getFullYear();

  var mywindow = window.open("", "print-div");
  await mywindow.document.write(
    `
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${user.user_mobile}-agreement-letter</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
      rel="stylesheet"
    />
    <style>
      @page {
        size: A4;
        margin: 0mm;
        padding: 10rem;
      }
      h3 h1 {
        padding: 0px 2px;
      }
      body {
        padding: 40px;
        font-family: "Roboto", sans-serif;
      }
      .image {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 30px;
      }
      .image > img {
        width: 100%;
      }
      .first-page {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 25px;
      }
      .first-page h3 {
        font-size: 24px;
        font-weight: bold;
        margin: 10px;
      }
      .first-page p {
        text-align: center;
      }
      .second-page {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin-top: 25px;
      }
      .space {
        height: 100px;
      }
      .second-page h3 {
        margin: 10px 0px;
      }
      .sign{
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
      }
      .sign-me {
        width: 200px;
        height: 20px;
        border-bottom: 2px solid black;
      }
      .sign-bank{
        position: relative;
        margin-top: 40px;
      }
      .sign-bank img {
        position: absolute;
    top: -40px;
    right: 30px;
    height: 230px;
      }
      .sign-bank h3{
        margin-right: 40px;
      }
    </style>
  </head>
  <body>
    <div class="image">
      <img src=${Stamp} alt="RS. 100 stamp of GOI" />
    </div>

    <div class="first-page">
      <h3>LOAN AGREEMENT</h3>
      <h3>
        THIS LOAN AGREEMENT (this "Agreement") dated this ${day} day of ${monthName}, ${year}
      </h3>
      <h3>BETWEEN</h3>
      <p>
        Loan tark office at HSG. Sty. Ltd ., Shop No.10, Building No.10,
        Kamgarnagar 400024 Kurla East, Maharashtra, India (the "Lender")
      </p>
      <h3>OF THE FIRST PART</h3>
      <h3>AND</h3>
      <p>
        ${user.user_fname} of ${user.user_address}, ${
      user.user_email
    } Document :
        LTK/${user.user_mobile.slice(
          3,
          9
        )} Proposal : LTK/${user.user_mobile.slice(3, 9)}
      </p>
      <p>(the "Borrower")</p>
      <h3>OF THE SECOND PART</h3>
      <p>
        IN CONSIDERATION OF the Lender loaning certain monies (the "Loan") to
        the Borrower, and the Borrower repaying the Loan to the Lender, both
        parties agree to keep, perform and fulfil the promises and conditions
        set out in this Agreement:
      </p>
    </div>

    <div class="space"></div>
    <div class="second-page">
      <h3>Loan Amount & Interest</h3>
      <p>
        1. The Lender promises to loan Rs ${user.loan_amount} to the Borrower and the
        Borrower promises to repay this principal amount to the Lender, with
        interest payable on the unpaid principal at the rate of 7.5% per annum,
        calculated yearly not in advance, beginning on ${monthName} ${day}, ${year}.
      </p>
      <h3>Payment</h3>
      <p>
        2. This Loan will be repaid in consecutive monthly instalments of
        principal and interest on the first day of each month commencing the
        month following the beginning of the loan under this Agreement and
        continuing until ${monthName} ${day}, ${year} with the balance then owing under this
        Agreement being paid at that time.
      </p>
      <h3>Default</h3>
      <p>
        3. Notwithstanding anything to the contrary in this Agreement, if the
        Borrower defaults in the performance of any obligation under this
        Agreement, then the Lender may declare the principal amount owing and
        interest due under this Agreement at that time to be immediately due and
        payable.
      </p>
      <p>
        4. Further, if the Lender declares the principal amount owing under this
        Agreement to be immediately due and payable, and the Borrower fails to
        provide full payment, interest at the rate of 7.5% per cent per annum,
        calculated yearly not in advance, will be charged on the outstanding
        amount, commencing the day the principal amount is declared due and
        payable, until full payment is received by the Lender.
      </p>
      <h3>Governing Law</h3>
      <p>
        5. This Agreement will be construed in accordance with and governed by
        the laws of the State of Maharashtra.
      </p>
      <p>
        6. The Borrower shall be liable for all costs, expenses and expenditures
        incurred including, without limitation, the complete legal costs of the
        Lender incurred by enforcing this Agreement as a result of any default
        by the Borrower and such costs will be added to the principal then
        outstanding and shall be due and payable by the Borrower to the Lender
        immediately upon demand of the Lender.
      </p>
      <h3>Binding Effect</h3>
      <p>
        7. This Agreement will pass to the benefit of and be binding upon the
        respective heirs, executors, administrators, successors and permitted
        assigns of the Borrower and Lender. Borrower wa ives presentment for
        payment, notice of non-payment, protest, and notice of protest.
      </p>
      <h3>Amendments</h3>
      <p>
        8. This Agreement may only be amended or modified by a written
        instrument executed by both the Borrower and the Lender.
      </p>
    </div>

    <div class="space"></div>
    <div class="second-page">
      <h3>Severability</h3>
      <p>
        9. The clauses and paragraphs contained in this Agreement are intended
        to be read and construed independently of each other. If any term,
        covenant, condition or provision of this Agreement is held by a court of
        competent jurisdiction to be invalid, void or unenforceable, it is the
        parties intention that such provision be reduced in scope by the court
        only to the extent deemed necessary by that court to render the
        provision reasonable and enforceable and the remainder of the provisions
        of this Agreement will in no way be affected, impaired or invalidated as
        a result.
      </p>
      <h3>General Provisions</h3>
      <p>
        10. Headings are inserted for the convenience of the parties only and
        are not to be considered when interpreting this Agreement. Words in the
        singular mean and include the plural and vice versa. Words in the
        masculine mean and include the feminine and vice versa. Entire Agreement
      </p>
      <p>
        11. This Agreement constitutes the entire agreement between the parties
        and there are no further items or provisions, either oral or otherwise.
        IN WITNESS WHEREOF, the parties have duly affixed their signatures under
        hand and seal on this ${day} day of ${monthName}, ${year}
      </p>
    </div>

    <div class="sign">
      <div>
        <h3>SIGNED, SEALED, AND DELIVERED</h3>
        <p>this ${day} day of ${monthName}, ${year}</p>
      </div>

      <div style="align-self: flex-end;">
        <div class="sign-me">

        </div>
        <p style="text-align: right;">
            ${user.user_fname}
        </p>
      </div>
    </div>

    <div class="sign sign-bank">
        <div>
            <h3>SIGNED, SEALED, AND DELIVERED</h3>
            <p>this ${day} day of ${monthName}, ${year}</p>
        </div>
        <h3>
            LOANTARK
        </h3>
        <img src=${ApprovedImg} alt="Loan Approved" />
    </div>
  </body>
</html>
      
      `
  );

  setTimeout(() => {
    mywindow.print();
    // mywindow.close();
  }, 2500);
}
