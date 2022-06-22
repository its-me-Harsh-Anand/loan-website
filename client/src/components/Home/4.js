export default function Home4() {
      return (
        <div className="row Home-area4" id="feature" style={{margin: '0px', padding: '0px'}}>
          <div className="col-12 Home-main-area4">
            <div className="row col-12 desktop" style={{justifyContent: 'center', textAlign: 'center'}}>
              <h2>Features of LoanTark</h2>
            </div>
            <div className="row col-12 mobile" style={{justifyContent: 'center', textAlign: 'center', padding: '0px 0px 0px 30px'}}>
              <h3>Features of LoanTark</h3>
            </div>
            <div className="desktop">
              <div className="row" style={{marginTop: '70px'}}>
                <div className="col-3" style={{padding: '0px 0px 0px 100px', textAlign: 'center'}}>
                  <img src="assets/home/features_1.svg" alt="" />
                </div>
                <div className="col-3" style={{padding: '0px 0px 0px 60px', textAlign: 'center'}}>
                  <img src="assets/home/features_2.svg" alt="" />
                </div>
                <div className="col-3" style={{textAlign: 'center'}}>
                  <img src="assets/home/features_3.svg" alt="" />
                </div>
                <div className="col-3" style={{padding: '0px 100px 0px 0px', textAlign: 'center'}}>
                  <img src="assets/home/features_4.svg" alt="" />
                </div>
              </div>
              <div className="row" style={{marginTop: '50px', fontSize: '24px', fontWeight: 600}}>
                <div className="col-3" style={{padding: '0px 0px 0px 100px', textAlign: 'center'}}>
                  Minimum Documentation
                </div>
                <div className="col-3" style={{textAlign: 'right'}}>
                  Faster Approval
                </div>
                <div className="col-3" style={{textAlign: 'center'}}>
                  100% Online Process
                </div>
                <div className="col-3" style={{padding: '0px 100px 0px 0px', textAlign: 'center'}}>
                  Loan up to Rs 30 Lakhs
                </div>
              </div>
            </div>
            <div className="mobile">
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'center', padding: '0px 0px 0px 30px', marginTop: '80px'}}>
                <img src="assets/home/features_1.svg" alt="" />
              </div> 
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'center', marginTop: '30px', fontSize: '24px', fontWeight: 600, padding: '0px 0px 0px 30px'}}>
                Minimum Documentation
              </div>
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'center', padding: '0px 0px 0px 30px', marginTop: '60px'}}>
                <img src="assets/home/features_2.svg" alt="" />
              </div> 
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'center', marginTop: '30px', fontSize: '24px', fontWeight: 600, padding: '0px 0px 0px 30px'}}>
                Faster Approval
              </div>
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'center', padding: '0px 0px 0px 30px', marginTop: '60px'}}>
                <img src="assets/home/features_3.svg" alt="" />
              </div> 
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'center', marginTop: '30px', fontSize: '24px', fontWeight: 600, padding: '0px 0px 0px 30px'}}>
                100% Online Process
              </div>
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'center', padding: '0px 0px 0px 30px', marginTop: '60px'}}>
                <img src="assets/home/features_4.svg" alt="" />
              </div> 
              <div className="row col-12" style={{justifyContent: 'center', textAlign: 'center', marginTop: '30px', fontSize: '24px', fontWeight: 600, padding: '0px 0px 0px 30px'}}>
                Loan up to Rs 30 Lakhs
              </div>
            </div>
          </div>
        </div>
      );
    }