export default function Home5() {
  return (
    <div className="row Home-area3" style={{ margin: "0px", padding: "0px" }}>
      <div className="col-12 Home-main-area3">
        <div
          className="row col-12 desktop"
          style={{
            "-webkit-box-pack": "center",
            "-webkit-justify-content": "center",
            "-ms-flex-pack": "center",
            "justify-content": "center",
            "-webkit-text-align": "center",
            "text-align": "center",
          }}
        >
          <h2 className="e">Our Partners </h2>
        </div>
        <div
          className="row col-12 mobile"
          style={{
            "-webkit-box-pack": "center",
            "-webkit-justify-content": "center",
            "-ms-flex-pack": "center",
            "justify-content": "center",
            "-webkit-text-align": "center",
            "text-align": "center",
            padding: "0px 0px 0px 20px",
          }}
        >
          <h3 className="e">Our Partners</h3>
        </div>
        <div className="desktop">
          <div className="row" style={{ "margin-top": "70px" }}>
            <div
              className="col-3"
              style={{
                padding: "0px 0px 0px 100px",
                "-webkit-text-align": "center",
                "text-align": "center",
              }}
            >
              <img src="assets/home/partners_1.png" alt="slide-loan"/>
            </div>
            <div
              className="col-3"
              style={{
                padding: "0px 0px 0px 60px",
                "-webkit-text-align": "center",
                "text-align": "center",
              }}
            >
              <img src="assets/home/partners_2.png" alt="slide-loan"/>
            </div>
            <div
              className="col-3"
              style={{ "-webkit-text-align": "center", "text-align": "center" }}
            >
              <img src="assets/home/partners_3.png" alt="slide-loan"/>
            </div>
            <div
              className="col-3"
              style={{
                padding: "0px 100px 0px 0px",
                "-webkit-text-align": "center",
                "text-align": "center",
              }}
            >
              <img src="assets/home/partners_4.png" alt="slide-loan"/>
            </div>
          </div>
          <div className="row" style={{ "margin-top": "70px" }}>
            <div
              className="col-3"
              style={{
                padding: "0px 0px 0px 100px",
                "-webkit-text-align": "center",
                "text-align": "center",
              }}
            >
              <img src="assets/home/partners_5.png" alt="slide-loan"/>
            </div>
            <div
              className="col-3"
              style={{
                padding: "0px 0px 0px 60px",
                "-webkit-text-align": "center",
                "text-align": "center",
              }}
            >
              <img src="assets/home/partners_6.png"  alt="slide-loan"/>
            </div>
            <div
              className="col-3"
              style={{ "-webkit-text-align": "center", "text-align": "center" }}
            >
              <img src="assets/home/partners_7.png" alt="slide-loan"/>
            </div>
            <div
              className="col-3"
              style={{
                padding: "0px 100px 0px 0px",
                "-webkit-text-align": "center",
                "text-align": "center",
              }}
            >
              <img src="assets/home/partners_8.png" alt="slide-loan"/>
            </div>
          </div>
        </div>
        <div className="mobile">
          <div
            className="row col-12"
            style={{
              "-webkit-box-pack": "center",
              "-webkit-justify-content": "center",
              "-ms-flex-pack": "center",
              "justify-content": "center",
              "-webkit-text-align": "center",
              "text-align": "center",
              "margin-top": "80px",
              padding: "0px 0px 0px 30px",
              "margin-bottom": "20px",
            }}
          >
            <div className="owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    "-webkit-transform": "translate3d(0px, 0px, 0px)",
                    "-ms-transform": "translate3d(0px, 0px, 0px)",
                    transform: "translate3d(0px, 0px, 0px)",
                    "-webkit-transition": "all 0s ease 0s",
                    transition: "all 0s ease 0s",
                  }}
                >
                  <div className="owl-item">
                    <div className="item white_box">
                      <img src="assets/home/partners_1.png" alt="slide-loan"/>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="item white_box">
                      <img src="assets/home/partners_2.png" alt="slide-loan"/>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="item white_box">
                      <img src="assets/home/partners_3.png" alt="slide-loan"/>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="item white_box">
                      <img src="assets/home/partners_4.png" alt="slide-loan"/>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="item white_box">
                      <img src="assets/home/partners_5.png" alt="slide-loan"/>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="item white_box">
                      <img src="assets/home/partners_6.png" alt="slide-loan"/>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="item white_box">
                      <img src="assets/home/partners_7.png" alt="slide-loan"/>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="item white_box">
                      <img src="assets/home/partners_8.png" alt="slide-loan"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                  <i className="fa fa-chevron-left" />
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <i className="fa fa-chevron-right" />
                </button>
              </div>
              {/* <div className="owl-dots">
                <button role="button" className="owl-dot">
                  <span />
                </button>
                <button role="button" className="owl-dot">
                  <span />
                </button>
                <button role="button" className="owl-dot active">
                  <span />
                </button>
                <button role="button" className="owl-dot">
                  <span />
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div id="testimonial"> </div>
      </div>
    </div>
  );
}
