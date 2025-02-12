import Logo from "../Components/LogoChill";
import Username from "../Components/Username";
import KataSandi from "../Components/KataSandi";
import MasalahLogin from "../Components/MasalahLogin";
import LoginButtonBox from "../Components/LoginButtonBox";


function Login () {
    return (
    <>
    <div className="loginBody">
      <div className="logomasuk">
        <Logo />
      </div>
        <div className="welcomemessage">
          <h1>Masuk</h1>
          Selamat datang kembali!
        </div>
          <div>
            <Username />
          </div>
          <div>
           <KataSandi />
          </div>
          <div>
            <MasalahLogin />
          </div>
          <div>
            <LoginButtonBox/>
        </div>
    </div>
    </>
    )
};

export default Login;