export default function Home8() {
      return (
  
        <div className="row Home-area7" style={{margin: '0px', padding: '0px'}}>
          <div className="col-12 Home-main-area7">
            {/* === desktop === */}
            <div className="desktop">
              <div className="row phn_bg">
                <div className="col-6" style={{padding: '120px 0px 50px 100px'}}>
                  <div className="row" style={{fontSize: '36px', fontWeight: 600}}>
                    <p>You're just a click away from making your life more easy!</p>
                  </div>
                  <div className="row">
                    <button className="apply_button" style={{marginTop: '10px'}} onclick="scrollTopAnimated()">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <img src="assets/home/last_section_apply_now.png" style={{marginTop: '-100px', marginBottom: '-100px'}} alt="" />
                </div>
              </div>
            </div>
            {/* === mobile === */}
            <div className="mobile">
              <div className="row phn_bg">
                <div className="row col-12" style={{justifyContent: 'center', textAlign: 'center', padding: '0px 0px 0px 30px'}}>
                  <img src="assets/home/last_section_apply_now.png" style={{width: '100%', marginTop: '-100px'}} alt="" />
                </div>
                <div className="row col-12" style={{marginTop: '40px', justifyContent: 'center', textAlign: 'center', padding: '0px 0px 0px 30px', fontSize: '24px', fontWeight: 600}}>
                  <p>Join thousands of others who have already trusted us</p>
                </div>
                <div className="row col-12" style={{marginTop: '30px', justifyContent: 'center', textAlign: 'center', padding: '0px 0px 0px 30px', marginBottom: '60px'}}>
                  <button className="apply_button" onclick="scrollTopAnimated()">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    