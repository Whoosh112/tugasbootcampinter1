import TheTomorrowWar from "../assets/assetgambar/assetgambarberanda/filmnya/thetomorrowwar.png";
import Quantumania from "../assets/assetgambar/assetgambarberanda/filmnya/quantumania.png";
import GuardianOfTheGalaxyVol3 from "../assets/assetgambar/assetgambarberanda/filmnya/guardianofthegalaxyvol3.png";
import AManCalledOtto from "../assets/assetgambar/assetgambarberanda/filmnya/AManCalledOtto.png";
import TheLittleMermaid from "../assets/assetgambar/assetgambarberanda/filmnya/thelittlemermaid.png";
import TombolKiri from "../assets/assetgambar/assetgambarberanda/arrow-left.png";
import TombolKanan from "../assets/assetgambar/assetgambarberanda/arrow-right.png";

import "./cssComponents/film.css"


const filmTrending = [TheTomorrowWar, Quantumania, GuardianOfTheGalaxyVol3, AManCalledOtto, TheLittleMermaid ]

function FilmTrending () {
  return(
    <>
      <div className="arrayfilm">
        <div className="tombolkiri"><img src={TombolKiri}/></div>
        
          {filmTrending.map((film, index) => (
            <div key={index} className={`films${index}`} style={{ backgroundImage:`url(${film})`}}>

              {film && (
              <div className="top10">Top <br/> 10</div>
            )}
            </div>
            
          ))}
        <div className="tombolkanan"><img src={TombolKanan}/></div>
          
    </div>
    </>

  )
}
export default FilmTrending