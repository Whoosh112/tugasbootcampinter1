import Logo from "../Components/LogoChill";
import Username from "../Components/Username";
import KataSandi from "../Components/KataSandi";
import MasalahLogin from "../Components/MasalahLogin";
import LoginButtonBox from "../Components/LoginButtonBox";
import KataSandiUlang from "../Components/KataSandiUlang";
import "./cssPages/styleRegister.css"



function Register () {
    return (
  <div className="loginscreen">
      <div className="logo">
        <Logo />
      </div>
        <div className="judul">
          <h1>Daftar</h1>
          <p>Selamat datang!</p>
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