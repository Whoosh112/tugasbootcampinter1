import AllOfUsAreDeadLanjut from "../assets/assetgambar/assetgambarberanda/allofusaredeadlanjut.png";
import AMancalledOttoLanjut from "../assets/assetgambar/assetgambarberanda/amancalledottolanjut.png";
import BlueLockLanjut from "../assets/assetgambar/assetgambarberanda/bluelocklanjut.png";
import DontLookUpLanjut from "../assets/assetgambar/assetgambarberanda/dontlookuplanjut.png";

import "./cssComponents/melanjutkanTontonFilm.css"


const films = [DontLookUpLanjut, AllOfUsAreDeadLanjut, BlueLockLanjut, AMancalledOttoLanjut]

function MelanjutkanTontonFilm () {
    return(
        <div className="lanjutfilm">
        {films.map((film, index) => (
          <div key={index} className={`lanjutfilm${index}`} style={{ backgroundImage:`linear-gradient(180deg, rgba(18,18,18,0), rgba(18,18,18,1)), url(${film})`}}>

            {index === 2 && (
            <div>
              <p>This is an additional div for the 3rd image!</p>
            </div>
          )}

            {index === 0 && (
            <div>
              <p>This is an additional div for the 3rd image!</p>
            </div>
          )}
          </div>
          
          
        ))}

        
      </div>
    )
}

export default MelanjutkanTontonFilm