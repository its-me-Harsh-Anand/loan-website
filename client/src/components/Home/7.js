import NumberScroller from "react-number-scroller";

export default function Home7() {
  return (
    <div
      className="row Home-area6"
      id="why-loan"
      style={{ margin: "0px", padding: "0px" }}
    >
      <div className="col-12 Home-main-area6">
        <div
          className="row col-12 desktop"
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          <h2 className="e">Why LoanTark</h2>
        </div>
        <div
          className="row col-12 mobile"
          style={{
            justifyContent: "center",
            textAlign: "center",
            padding: "0px 0px 0px 30px",
          }}
        >
          <h3 className="e">Why LoanTark</h3>
        </div>
        <div className="desktop">
          <div className="row" style={{ marginTop: "70px" }}>
            <div
              className="col-4"
              style={{ textAlign: "center", padding: "0px 0px 0px 100px" }}
            >
              <img src="assets/home/statistics_1.svg" alt="" />
            </div>
            <div className="col-4" style={{ textAlign: "center" }}>
              <img src="assets/home/statistics_2.svg" alt="" />
            </div>
            <div
              className="col-4"
              style={{ textAlign: "center", padding: "0px 100px 0px 0px" }}
            >
              <img src="assets/home/statistics_3.svg" alt="" />
            </div>
          </div>
          <div
            className="row"
            style={{ marginTop: "35px", fontSize: "36px", fontWeight: 500 }}
          >
            <div
              className="col-4"
              style={{ textAlign: "center", padding: "0px 0px 0px 100px" }}
            >
              <p>
                ₹
                {/* <span
                  className="numscroller roller-title-number-1 scrollzip isShown"
                  data-min={15568900}
                  data-max={725507660}
                  data-delay={1}
                  data-increment={1000000}
                  data-slno={1}
                >
                  725507660
                </span> */}
                <NumberScroller from={725506660} renderFrequency={1} to={725507660}/>
                <span>+</span>
              </p>
            </div>
            <div className="col-4" style={{ textAlign: "center" }}>
              <p>
                {/* <span
                  className="numscroller roller-title-number-2 scrollzip isShown"
                  data-min={50}
                  data-max={8211}
                  data-delay={7}
                  data-increment={15}
                  data-slno={2}
                >
                  8211
                </span> */}
                <NumberScroller from={7211} renderFrequency={5} to={8211}/>
                <span>+</span>
              </p>
            </div>
            <div
              className="col-4"
              style={{ textAlign: "center", padding: "0px 100px 0px 0px" }}
            >
              <p>
                {/* <span
                  className="numscroller roller-title-number-3 scrollzip isShown"
                  data-min={1}
                  data-max={95}
                  data-delay={5}
                  data-increment={1}
                  data-slno={3}
                >
                  95
                </span> */}
                                <NumberScroller from={0} renderFrequency={50} to={95}/>

                <span>+</span>
              </p>
            </div>
          </div>
          <div className="row" style={{ fontWeight: 500, fontSize: "20px" }}>
            <div
              className="col-4"
              style={{ textAlign: "center", padding: "0px 0px 0px 100px" }}
            >
              Amount Disbursed
            </div>
            <div className="col-4" style={{ textAlign: "center" }}>
              Happy Customers
            </div>
            <div
              className="col-4"
              style={{ textAlign: "center", padding: "0px 100px 0px 0px" }}
            >
              Business Partners
            </div>
          </div>
        </div>
        <div className="mobile">
          <div
            className="row col-12"
            style={{
              justifyContent: "center",
              textAlign: "center",
              padding: "0px 0px 0px 30px",
              marginTop: "80px",
            }}
          >
            <img src="assets/home/statistics_1.svg" alt="" />
          </div>
          <div
            className="row col-12"
            style={{
              justifyContent: "center",
              textAlign: "center",
              padding: "0px 0px 0px 30px",
              fontSize: "32px",
              fontWeight: 500,
              marginTop: "30px",
            }}
          >
            <p>
              ₹
              <span
                className="numscroller roller-title-number-4 scrollzip isShown"
                data-min={1556890}
                data-max={675507660}
                data-delay={1}
                data-increment={1000000}
                data-slno={4}
              >
                675507660
              </span>
              <span>+</span>
            </p>
          </div>
          <div
            className="row col-12"
            style={{
              justifyContent: "center",
              textAlign: "center",
              padding: "0px 0px 0px 30px",
              fontSize: "18px",
              fontWeight: 500,
              marginTop: "-10px",
            }}
          >
            Amount Disbursed
          </div>
          <div
            className="row col-12"
            style={{
              justifyContent: "center",
              textAlign: "center",
              padding: "0px 0px 0px 30px",
              marginTop: "50px",
            }}
          >
            <img src="assets/home/statistics_2.svg" alt="" />
          </div>
          <div
            className="row col-12"
            style={{
              justifyContent: "center",
              textAlign: "center",
              padding: "0px 0px 0px 30px",
              fontSize: "32px",
              fontWeight: 500,
              marginTop: "30px",
            }}
          >
            <p>
              <span
                className="numscroller roller-title-number-5 scrollzip isShown"
                data-min={50}
                data-max={7201}
                data-delay={7}
                data-increment={15}
                data-slno={5}
              >
                7201
              </span>
              <span>+</span>
            </p>
          </div>
          <div
            className="row col-12"
            style={{
              justifyContent: "center",
              textAlign: "center",
              padding: "0px 0px 0px 30px",
              fontSize: "18px",
              fontWeight: 500,
              marginTop: "-10px",
            }}
          >
            Happy Customers
          </div>
          <div
            className="row col-12"
            style={{
              justifyContent: "center",
              textAlign: "center",
              padding: "0px 0px 0px 30px",
              marginTop: "50px",
            }}
          >
            <img src="assets/home/statistics_3.svg" alt="" />
          </div>
          <div
            className="row col-12"
            style={{
              justifyContent: "center",
              textAlign: "center",
              padding: "0px 0px 0px 30px",
              fontSize: "32px",
              fontWeight: 500,
              marginTop: "30px",
            }}
          >
            <p>
              <span
                className="numscroller roller-title-number-6 scrollzip isShown"
                data-min={1}
                data-max={70}
                data-delay={5}
                data-increment={1}
                data-slno={6}
              >
                70
              </span>
              <span>+</span>
            </p>
          </div>
          <div
            className="row col-12"
            style={{
              justifyContent: "center",
              textAlign: "center",
              padding: "0px 0px 0px 30px",
              fontSize: "18px",
              fontWeight: 500,
              marginTop: "-10px",
              marginBottom: "40px",
            }}
          >
            Business Partners
          </div>
        </div>
      </div>
    </div>
  );
}
