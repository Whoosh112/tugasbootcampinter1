import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import MelanjutkanTontonFilm from "../Components/MelanjutkanTontonFilm";
import TopRatingFilm from "../Components/TopRatingFilm";


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
            <MelanjutkanTontonFilm />
        </div>
        <div className="film1">
            <TopRatingFilm />
        </div>
        <div className="film2">
            <TopRatingFilm />
        </div>
        <div className="film3">
            <TopRatingFilm />
        </div>
      </div>
    </div>
    </>
    )
};

export default Beranda;