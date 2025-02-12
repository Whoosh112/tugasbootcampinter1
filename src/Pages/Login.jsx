import Logo from "../Components/LogoChill";
import Username from "../Components/Username";
import KataSandi from "../Components/KataSandi";
import MasalahLogin from "../Components/MasalahLogin";
import LoginButtonBox from "../Components/LoginButtonBox";
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
            <MasalahLogin />
          </div>
          <div className="loginbuttonbox">
            <LoginButtonBox/>
        </div>
    </div>
    )
};

export default Login;