import "./Style.css";

import Header from "./components/Header";

const Login = () => {


  let loggin = false;

  const myChange = (a) =>{
    const number ="7978218509";
    const value = a.target.value;
    if (value === number) {
          loggin = true;

    }
  }
  const myClick = () =>{
    if (loggin) {
      window.location.href = '/';
    }
  }






  return (
    <div>
    <Header />
    
        <div className="container-fluid">
          <div>
            <div className="signinContainer">
              <img src="https://www.titikshapublicschool.com/wp-content/uploads/2018/11/developer-api.jpg" alt="Trulli" height="100%" width="100%" />
              <div className="welcomeHeader">
                Login
                &nbsp;
                <span className="welcomeHeader-small">or</span>
                &nbsp;
                Signup
              </div>
              <div className="valueInputContainer">
                <div className="mobileNoInput">
                  <input autoComplete="new-password" onChange={myChange} id type="tel" className="form-control mobileNumberInput" placeholder="+91 | Mobile Number" maxLength={10} />
                </div>
                <div className="midLinks">By continuing, I agree to the <a href="https://www.myntra.com/termsofuse">Terms of Use</a> &amp; <a href="https://www.myntra.com/privacypolicy">Privacy Policy</a>
                </div>
                <div className="submitBottomOption" onClick={myClick} >CONTINUE</div>
                <div className="get-help">Have trouble logging in?<a href="https://www.myntra.com/recovery?referer=https%3A%2F%2Fwww.myntra.com%2F">Get help</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Login;
