import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import MelanjutkanTontonFilm from "../Components/MelanjutkanTontonFilm";


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
      <div className="kotakfilm">
        <div className="melanjutkantontonfilm">
            <MelanjutkanTontonFilm />
        </div>
      </div>
    </div>
    </>
    )
};

export default Beranda;