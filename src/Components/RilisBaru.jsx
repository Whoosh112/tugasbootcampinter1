import TheLittleMermaid from "../assets/assetgambar/assetgambarberanda/filmnya/thelittlemermaid.png";
import DutyAfterSchool from "../assets/assetgambar/assetgambarberanda/filmnya/dutyafterschool.png";
import BigHero6 from "../assets/assetgambar/assetgambarberanda/filmnya/bighero6.png";
import AllOfUsAreDead from "../assets/assetgambar/assetgambarberanda/filmnya/allofusaredead.png";
import Missing from "../assets/assetgambar/assetgambarberanda/filmnya/missing.png";

import "./cssComponents/film.css"


const rilisBaru = [TheLittleMermaid, DutyAfterSchool, BigHero6, AllOfUsAreDead, Missing ]

function RilisBaru () {
  return(
    <>
      <p>Top Rating Film Dan Series Hari Ini</p>
      <div className="arrayfilm">
      {rilisBaru.map((film, index) => (
        <div key={index} className={`films${index}`} style={{ backgroundImage:`url(${film})`}}>

          {index == 0 && (
                      <div className="top10">Top<br/>10</div>

          )}

          {[1, 3].includes(index) &&  (
          <div className="episodebaru">Episode Baru</div>
        )}
        </div>
      ))}

      
    </div>
    </>

  )
}
export default RilisBaru