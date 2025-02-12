import "./cssComponents/inputBar.css"

function Username(){
    return(
    <div className="inputBar">
        <label>Username</label>
        <input type="text" id="username" name="username" placeholder="Masukkan Username"/>
    </div>
    );
}

export default Username;