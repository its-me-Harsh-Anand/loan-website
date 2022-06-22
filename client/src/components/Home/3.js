export default function Home3() {
      return (
        <div className="row Home-area3" id="apply" style={{margin: '0px', padding: '0px'}}>
          <div className="col-12 Home-main-area3">
            <div className="row col-12 desktop" style={{justifyContent: 'center', textAlign: 'center'}}>
              <h2 className="e">How to apply for Loan</h2>
            </div>
            <div className="row col-12 mobile" style={{justifyContent: 'center', textAlign: 'center', padding: '0px 0px 0px 20px'}}>
              <h3 className="e">How to apply for Loan</h3>
            </div>
            <div className="desktop">
              <div className="row" style={{marginTop: '70px'}}>
                <div className="col-3" style={{padding: '0px 0px 0px 100px', textAlign: 'center'}}>
                  <img src="assets/home/apply_step1.png" alt=""/>
                </div>
                <div className="col-3" style={{padding: '0px 0px 0px 60px', textAlign: 'center'}}>
                  <img src="assets/home/apply_step2.png" alt="" />
                </div>
                <div className="col-3" style={{textAlign: 'center'}}>
                  <img src="assets/home/apply_step3.png" alt="" />
                </div>
                <div className="col-3" style={{padding: '0px 100px 0px 0px', textAlign: 'center'}}>
                  <img src="assets/home/apply_step4.png" alt="" />
                </div>
              </div>
            </div>
            <div className="mobile">
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'center', marginTop: '80px', padding: '0px 0px 0px 30px'}}>
                <img src="assets/home/apply_step1.png" alt="" />
              </div>
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'center', marginTop: '80px', padding: '0px 0px 0px 30px'}}>
                <img src="assets/home/apply_step2.png" alt="" />
              </div>
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'center', marginTop: '80px', padding: '0px 0px 0px 30px'}}>
                <img src="assets/home/apply_step3.png" alt="" />
              </div>
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'center', marginTop: '80px', padding: '0px 0px 0px 30px'}}>
                <img src="assets/home/apply_step4.png" alt="" />
              </div>
            </div>
            <div id="feature"> </div>
          </div>
        </div>
      );
    }