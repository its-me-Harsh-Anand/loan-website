import React from 'react'

function ContactUs() {
  return (
    <div className="container">
  <div className="howitworks"> 
    <div className="hero-text">
      <div className="row">
        <div className=" offset-md-3 col-md-6   ">
          <div className=" about-title" style={{"margin-top":"40px"}}>
            <h1 className="about-text1">Contact Us</h1>
          </div>
        </div><br />
        <div className="col-md-12"><br />
          <p style={{"-webkit-text-align":"center","text-align":"center"}}><b>If you have any query, you can also write to us at contact@loantark.org</b></p><br />
          <p style={{"-webkit-text-align":"center","text-align":"center"}}><b> Address: Loan tark HSG. Sty. Ltd ., Shop No.10, Building No.10, Kamgarnagar 400024 Kurla East, Maharashtra, India</b></p>
        </div>
        <div className="offset-md-2 col-md-8" style={{"margin-top":"5px","padding":"20px"}}>
          <div className="row">
            <div className="reglogin">
              <div className="tab">
                <div className="box box-primary">
                  <form action="contactprocess" method="post">
                    <div className="box-body"> 
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label style={{"color":"white"}}>Name:<span style={{"color":"white"}}>*</span></label>
                            <input type="text" className="form-control" required="required" name="user_fname" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label style={{"color":"white"}}>Mobile:<span style={{"color":"white"}}>*</span></label>
                            <input type="text" minLength={10} maxLength={10} className="form-control" required="required" name="user_mobile" placeholder="mobile no." />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label style={{"color":"white"}}>Email:<span style={{"color":"white"}}>*</span></label>
                            <input type="text" className="form-control" required="required" name="user_email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label style={{"color":"white"}}>Subject:<span style={{"color":"white"}}>*</span></label>
                            <input type="text" className="form-control" required="required" name="user_subject" placeholder="Subject" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label style={{"color":"white"}}>Message:</label>
                        <textarea name="user_message" className="form-control" required="required" placeholder="Message" />
                      </div>
                    </div>
                    {/* /.box-body */}
                    <div className="box-footer">
                      <button type="submit" className="btn btn-primary" style={{"background-color":"#00317F","border-color":"#00317F"}}>Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ContactUs