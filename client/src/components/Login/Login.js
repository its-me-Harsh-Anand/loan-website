import React from 'react'

function Login() {
  return (
    <div className="container-fluid" style={{"padding-right":"0px","padding-left":"0px"}}>
  <div className="login-image" style={{"width":"100%","height":"auto"}}> 
    <div className="hero-text">
      <div className="row" style={{"margin-right":"0px","margin-left":"0px"}}>
        <div className="offset-md-3 col-md-6  ">
          <div className=" reglogin">
            <h3 className="reg-txt" style={{"margin-bottom":"80px"}}>Sign In</h3>
            <form action="login-process" id="login" method="post">
              <div className="reg-inp" style={{"margin-bottom":"50px"}}>
                <input type="text" name="user_mobile" placeholder="Mobile" maxLength={10} className="form-control" />
              </div>
              <div className="reg-inp">
                <input type="Password" name="user_otp" placeholder="Password" className="form-control" />
              </div>
              <input type="submit" defaultValue="Login" name="login" className=" bt login-btn " style={{}} /> 
            </form>
            <div className="form-group" style={{"-webkit-text-align":"center","text-align":"center","margin-top":"20px"}}>
              <a href="forgot.php" style={{"color":"white"}}>Forgot Password?</a>
              <p className="text-white sign"> If not registered <a href="/" style={{"color":"#334E6B"}}><strong>Sign up</strong></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login