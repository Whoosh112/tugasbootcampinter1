import AllOfUsAreDeadLanjut from "../assets/assetgambar/assetgambarberanda/allofusaredeadlanjut.png";
import AMancalledOttoLanjut from "../assets/assetgambar/assetgambarberanda/amancalledottolanjut.png";
import BlueLockLanjut from "../assets/assetgambar/assetgambarberanda/bluelocklanjut.png";
import DontLookUpLanjut from "../assets/assetgambar/assetgambarberanda/dontlookuplanjut.png";
import Star from "../assets/assetgambar/assetgambarberanda/star.png";


import "./cssComponents/melanjutkanTontonFilm.css"


const films = [DontLookUpLanjut, AllOfUsAreDeadLanjut, BlueLockLanjut, AMancalledOttoLanjut]

function MelanjutkanTontonFilm () {
    return(
      <>
        <p>Melanjutkan Tonton Film</p>
        <div className="lanjutfilm">
        {films.map((film, index) => (
          <div key={index} className={`lanjutfilm${index}`} style={{ backgroundImage:`linear-gradient(180deg, rgba(18,18,18,0), rgba(18,18,18,1)), url(${film})`}}>

            {index === 0 && (
            <div className="namafilm">Don't Look Up <div className="rating"><img src={Star} width="30"/>4.5/5</div></div>
          )}

            {index === 1 && (
            <div className="namafilm">The Batman <div className="rating"><img src={Star} width="30"/>4.2/5</div></div>
          )}

            {index === 2 && (
              <div className="bluelock">
                <div className="episodebaru"> Episode Baru</div>
                <div className="namafilmbluelock">Blue Lock <div className="rating"><img src={Star} width="30"/>4.6/5</div></div>
              </div>
          )}

            {index === 3 && (
            <div className="namafilm">A Man Called Otto <div className="rating"><img src={Star} width="30"/>4.4/5</div></div>
          )}
          </div>

          
          
          
        ))}

        
      </div>
      </>

    )
}

export default MelanjutkanTontonFilm