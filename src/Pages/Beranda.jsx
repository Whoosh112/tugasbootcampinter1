import { useEffect } from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import MelanjutkanTontonFilm from "../Components/MelanjutkanTontonFilm";
import TopRatingFilm from "../Components/TopRatingFilm";

import "./cssPages/styleBeranda.css"

function Beranda () {
useEffect(() => {
        document.body.classList.add("beranda-page");
    
        return () => {
          document.body.classList.remove("beranda-page");
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
            <TopRatingFilm />
        </div>
        <div className="tempatfilm3">
            <TopRatingFilm />
        </div>
      </div>
    </div>
    </>
    )
};

export default Beranda;