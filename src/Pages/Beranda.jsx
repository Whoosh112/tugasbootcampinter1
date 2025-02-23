import { useEffect } from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import MelanjutkanTontonFilm from "../Components/MelanjutkanTontonFilm";
import TopRatingFilm from "../Components/TopRatingFilm";
import FilmTrending from "../Components/FilmTrending";
import RilisBaru from "../Components/RilisBaru";
import Footer from "../Components/Footer";


import "./cssPages/styleBeranda.css"

function Beranda () {
useEffect(() => {
        document.body.classList.add("berandapage");
    
        return () => {
          document.body.classList.remove("berandapage");
        };
      }, []);

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
        <div className="tempatfilm1">
            <TopRatingFilm />
        </div>
        <div className="tempatfilm2">
            <FilmTrending />
        </div>
        <div className="tempatfilm3">
            <RilisBaru />
        </div>
      </div>
      <div className="footer">
            <Footer />
        </div>
    </div>
    </>
    )
};

export default Beranda;