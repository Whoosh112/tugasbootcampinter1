import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import MelanjutkanTontonFilm from "../Components/MelanjutkanTontonFilm";


import "./cssPages/styleBeranda.css"

function Beranda () {
    return (
    <>
    <div className="beranda">
      <div className="navbar">
          <Navbar />
      </div>
      <div className="hero">
          <Hero />
      </div>
      <div className="kotakfilm">
        <div className="melanjutkantontonfilm">
            <p>Melanjutkan Tonton Film</p>
            <MelanjutkanTontonFilm />
        </div>
        <div className="film1">
            <p>Top Rating Film dan Series Hari Ini</p>
            <MelanjutkanTontonFilm />
        </div>
        <div className="film2">
            <p>Film Trending</p>
            <MelanjutkanTontonFilm />
        </div>
        <div className="film3">
            <p>Rilis Baru</p>
            <MelanjutkanTontonFilm />
        </div>
      </div>
    </div>
    </>
    )
};

export default Beranda;