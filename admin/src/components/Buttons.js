import React from "react";
import { generateAgreement, generatePdf } from "../utils/generatePdf";

function Buttons(props) {
  const { user } = props;
  const buttons = document.getElementsByClassName("btn")
  const buttonsArray = Array.from(buttons)
  console.log(buttonsArray)
  buttonsArray.forEach(button => {
    button.style.margin = "10px auto"
    button.style.height = "100%"
  });
  return (
    <div
      className="border border-warning border-3"
      style={{ padding: "25px" }}
    >
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            style={{ minHeight: "86px"}}
          >
            Send Approval Letter Sms
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            style={{ minHeight: "86px" }}
          >
            Processing Fee Received
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            style={{ minHeight: "86px" }}
          >
            Send Agreement Letter Sms
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            style={{ minHeight: "86px" }}
          >
            Agreement Payment Received
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            style={{ minHeight: "86px" }}
          >
            Send Insurance Details
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            style={{ minHeight: "86px" }}
          >
            Insurance Payment Received
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            style={{ minHeight: "86px" }}
          >
            Send Transactional Mail
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            style={{ minHeight: "86px" }}
          >
            Transactional Payment Received
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            style={{ minHeight: "86px" }}
          >
            Send Approval Letter Mail
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            style={{ minHeight: "86px" }}
          >
            Send Beneficiary Message
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            style={{ minHeight: "86px" }}
          >
            Send Agreement Letter Mail
          </button>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button
            type="button"
            className="btn btn-warning"
            style={{ minHeight: "86px" }}
            onClick={(e)=> generatePdf(e, user)}
          >
            Download Approval Letter
          </button>
        </div>
        <div className="col"></div>
        <div className="col">
          <button
            type="button"
            className="btn btn-warning"
            style={{ minHeight: "86px" }}
            onClick={ (e)=> { generateAgreement(e, user);}}
          >
            Download Agreement Letter
          </button>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button
            type="button"
            className="btn btn-success"
            style={{ minHeight: "86px", minWidth: "138px" }}
          >
            Cancellation
          </button>
        </div>
        <div className="col"></div>
        <div className="col">
          <button
            type="button"
            className="btn btn-success"
            style={{ minHeight: "86px" }}
          >
            Send Account Details
          </button>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Buttons;
