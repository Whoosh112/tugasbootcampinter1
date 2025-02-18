import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";


import "./cssPages/styleBeranda.css"

function Beranda () {
    return (
    <>
    <div className="beranda">
      <div className="navi">
          <Navbar />
      </div>
      <div className="hero">
          <Hero />
      </div>
    </div>
    </>
    )
};

export default Beranda;