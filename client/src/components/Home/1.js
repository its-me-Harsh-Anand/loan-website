import axios from "axios";
import { useState } from "react";
import Popup from "../Popup";

export default function Home1() {
  const [sentSms, setSentSms] = useState(false);
  const [existing, setExisting] = useState(false);
  const [number, setNumber] = useState("");
  const [fullname, setFullname] = useState("");
  const [btnTxt, setBtnTxt] = useState("Apply Now")

  function handleUserExistance(e) {
    e.preventDefault()
    setBtnTxt("Sending OTP...")
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user/mobile/${number}`)
      .then((res) => res.data)
      .then((data) => {
        if (data.stat === true) {
          alert("Already registered with this number")
          setExisting(true);
          setBtnTxt("Apply Now")
          return;
        }
        else {
          setExisting(false);
          axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/verify/getcode/`, {
              params: { phonenumber: number, channel: "sms" },
            })
            .then((res) => {
              setBtnTxt("OTP Sent")
              return res.data
            })
            .then((data) => {
              if (data.sid) setSentSms(true);
            });
        }
      });
    console.log(existing);
  }

  return (
    <div>
      {/* area 1 */}
      {/* === desktop === */}
      <div className="desktop">
        <div
          className="row Home-area1"
          style={{ margin: "0px", padding: "0px" }}
        >
          <div className="col-12 Home-main-area1">
            <div className="row">
              <div
                className="col-7 dream_big_text"
                style={{ paddingLeft: "100px", color: "white" }}
              >
                <p style={{ fontSize: "70px", fontWeight: 700 }}>
                  Bring Happiness
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: 700,
                    marginTop: "-25px",
                  }}
                >
                  to your life with the help of LoanTark
                </p>
                <p style={{ fontSize: "24px", marginTop: "10px" }}>
                  - Free Financial Support
                </p>
                <p style={{ fontSize: "24px", marginTop: "-10px" }}>
                  - Hassle free Application
                </p>
                <p style={{ marginTop: "100px", fontSize: "24px" }}>
                  YOU CAN APPLY :
                </p>
                <p style={{ fontSize: "16px" }}>
                  - You must be at least 18 years old{" "}
                </p>
                <p style={{ fontSize: "16px" }}>
                  - You are a citizen of India with a valid current address
                  proof{" "}
                </p>
                <p style={{ fontSize: "16px" }}>
                  - You have a bank account with an internet banking facility
                </p>
              </div>
              <div className="col-5" style={{ paddingRight: "100px" }}>
                <div className="wd-100p reghome" style={{ marginTop: "55px" }}>
                  <div
                    className="row col-12"
                    style={{ justifyContent: "center", textAlign: "center" }}
                  >
                    <p className="reg-txt" style={{ fontSize: "32px" }}>
                      Get Fast Approval
                    </p>
                  </div>
                  <form
                    className="row col-12"
                    action=""
                    id="login"
                    method="post"
                    style={{
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="reg-inp">
                      <input
                        type="text"
                        name="user_fname"
                        required="required"
                        placeholder="Name"
                        className="reg-inp-fld"
                        onChange={(e) => setFullname(e.target.value)}
                      />
                    </div>
                    <div className="reg-inp">
                      <input
                        type="text"
                        name="user_mobile"
                        placeholder="Mobile"
                        maxLength={10}
                        minLength={10}
                        required="required"
                        className="reg-inp-fld"
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                    <div className="row">
                      <div className="col-1" />
                      <div className="col-10">
                        <p className="ptext">
                          By clicking "Apply Now" you agree to the{" "}
                          <a href="/privacy-policy">Privacy Policy</a>{" "}
                          <a href="/terms-use"> , Terms of Use </a>&amp;
                          <a href="/terms-conditions">
                            {" "}
                            Terms &amp; Conditions{" "}
                          </a>{" "}
                          of LoanTark
                        </p>
                      </div>
                      <div className="col-1" />
                    </div>
                    <input
                      // type="submit"
                      type="button"
                      value={btnTxt}
                      name="submit"
                      className="btn-apply"
                      onClick={(e) => handleUserExistance(e)}
                    />
                  </form>

                  {sentSms && <Popup fullname={fullname} number={number} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* === for mobile === */}
      <div className="mobile">
        <div
          className="row Home-area1"
          style={{ margin: "0px", padding: "0px" }}
        >
          <div className="col-12 Home-main-area1">
            <div
              className="row col-12"
              style={{
                justifyContent: "center",
                textAlign: "center",
                color: "white",
                padding: "0px 0px 0px 30px",
              }}
            >
              <p style={{ fontSize: "48px", fontWeight: 700 }}>
                Bring Happiness
              </p>
            </div>
            <div
              className="row col-12"
              style={{
                justifyContent: "center",
                textAlign: "center",
                color: "white",
                padding: "0px 0px 0px 30px",
              }}
            >
              <p style={{ fontSize: "28px", fontWeight: 700 }}>
                to your life with the help of LoanTark{" "}
              </p>
            </div>
            <div
              className="row col-12"
              style={{
                textAlign: "left",
                color: "white",
                padding: "0px 0px 0px 30px",
              }}
            >
              <p style={{ fontSize: "22px", marginTop: "30px" }}>
                - Free Financial Support
              </p>
            </div>
            <div
              className="row col-12"
              style={{
                textAlign: "left",
                color: "white",
                padding: "0px 0px 0px 30px",
              }}
            >
              <p style={{ fontSize: "22px" }}>- Hassle free Application</p>
            </div>
            <div
              className="row col-12"
              style={{
                justifyContent: "center",
                textAlign: "center",
                background: "#00A156",
                padding: "10px",
                marginLeft: "0px",
                borderRadius: "20px",
                marginTop: "20px",
              }}
            >
              <div className="wd-100p reghome" style={{ marginTop: "10px" }}>
                <div
                  className="row col-12"
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "0px 0px 0px 25px",
                  }}
                >
                  <p className="reg-txt" style={{ fontSize: "30px" }}>
                    Get Fast Approval
                  </p>
                </div>
                <form action="" id="login" method="post">
                  <div className="reg-inp">
                    <input
                      type="text"
                      name="user_fname"
                      required="required"
                      placeholder="Name"
                      className="reg-inp-fld"
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                  <div className="reg-inp">
                    <input
                      type="text"
                      name="user_mobile"
                      placeholder="Mobile"
                      maxLength={10}
                      minLength={10}
                      required="required"
                      className="reg-inp-fld"
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <div className="col-1" />
                    <div className="col-10">
                      <p className="ptext">
                        By clicking "Apply Now" you agree to the{" "}
                        <a href="privacy-policy.php">Privacy Policy</a>{" "}
                        <a href="terms-use.php"> , Terms of Use </a>&amp;
                        <a href="terms-conditions.php">
                          {" "}
                          Terms &amp; Conditions{" "}
                        </a>{" "}
                        LoanTark
                      </p>
                    </div>
                    <div className="col-1" />
                  </div>
                  <input
                    type="submit"
                    defaultValue={btnTxt}
                    name="submit"
                    className="btn-apply"
                    onClick={(e) => handleUserExistance(e)}
                  />
                </form>

                {sentSms && <Popup fullname={fullname} number={number} />}
              </div>
            </div>
            <div
              className="row col-12"
              style={{
                textAlign: "left",
                color: "white",
                padding: "0px 0px 0px 30px",
              }}
            >
              <p style={{ marginTop: "70px", fontSize: "22px" }}>
                YOU CAN APPLY :
              </p>
            </div>
            <div
              className="row col-12"
              style={{
                textAlign: "left",
                color: "white",
                padding: "0px 0px 0px 30px",
              }}
            >
              <p style={{ fontSize: "16px" }}>
                - You must be at least 18 years old
              </p>
            </div>
            <div
              className="row col-12"
              style={{
                textAlign: "left",
                color: "white",
                padding: "0px 0px 0px 30px",
              }}
            >
              <p style={{ fontSize: "16px" }}>
                - You are a citizen of India with a valid current address proof{" "}
              </p>
            </div>
            <div
              className="row col-12"
              style={{
                textAlign: "left",
                color: "white",
                padding: "0px 0px 0px 30px",
              }}
            >
              <p style={{ fontSize: "16px" }}>
                - You have a bank account with an internet banking facility
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="about"> </div>
    </div>
  );
}
