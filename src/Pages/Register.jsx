import Username from "../Components/Username";
import KataSandi from "../Components/KataSandi";
import MasalahLogin from "../Components/MasalahLogin";
import LoginButtonBox from "../Components/LoginButtonBox";
import KataSandiUlang from "../Components/KataSandiUlang";
import WelcomeRegister from "../Components/WelcomeRegister";

import logoChill from "../assets/assetgambar/logochill.png";

import "./cssPages/styleRegister.css"


function Register () {
    return (
  <div className="registerscreen">
        <div className="logo">
          <img src={logoChill} width="50%"/>
        </div>
        <div className="judul">
          <WelcomeRegister/>
        </div>
          <div className="username">
            <Username />
          </div>
          <div className="katasandi">
           <KataSandi />
          </div>
          <div className="katasandiulang">
           <KataSandiUlang />
          </div>
          <div className="masalahlogin">
            <MasalahLogin />
          </div>
          <div className="loginbuttonbox">
            <LoginButtonBox/>
        </div>
  </div>
        )
};

export default Register;