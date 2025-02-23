import Suzume from "../assets/assetgambar/assetgambarberanda/filmnya/suzume.png";
import JurassicWorldDominion from "../assets/assetgambar/assetgambarberanda/filmnya/jurassicworlddominion.png";
import Sonic2 from "../assets/assetgambar/assetgambarberanda/filmnya/sonic2.png";
import AllOfUsAreDead from "../assets/assetgambar/assetgambarberanda/filmnya/allofusaredead.png";
import BigHero6 from "../assets/assetgambar/assetgambarberanda/filmnya/bighero6.png";

import "./cssComponents/film.css"


const topRatingFilms = [Suzume, JurassicWorldDominion, Sonic2, AllOfUsAreDead, BigHero6 ]

function TopRatingFilms () {
  return(
    <>
      <p>Top Rating Film Dan Series Hari Ini</p>
      <div className="arrayfilm">
      {topRatingFilms.map((film, index) => (
        <div key={index} className={`films${index}`} style={{ backgroundImage:`url(${film})`}}>

          {[0, 3].includes(index) &&  (
          <div className="episodebaru">Episode Baru</div>
        )}
        </div>
      ))}

      
    </div>
    </>

  )
}
export default TopRatingFilms