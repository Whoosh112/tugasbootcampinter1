import Logo from "../Components/LogoChill";
import Username from "../Components/Username";
import KataSandi from "../Components/KataSandi";
import LoginButtonBox from "../Components/LoginButtonBox";
import SudahPunyaAkun from "../Components/SudahPunyaAkun";

import "./cssPages/styleLogin.css"


function Login () {
    return (
    <div className="loginscreen">
      <div className="logo">
        <Logo />
      </div>
        <div className="judul">
          <h1>Masuk</h1>
          <p>Selamat datang kembali!</p>
        </div>
          <div className="username">
            <Username />
          </div>
          <div className="katasandi">
           <KataSandi />
          </div>
          <div className="masalahlogin">
            <SudahPunyaAkun />
          </div>
          <div className="loginbuttonbox">
            <LoginButtonBox/>
        </div>
    </div>
    )
};

export default Login;