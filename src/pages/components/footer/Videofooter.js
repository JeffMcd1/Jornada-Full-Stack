import React from "react";
import "./videofooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function Videofooter() {
  return (
    <div className="videofooter">
      <div className="videofooter__text">
        <h3> @Jeferson Macedo</h3>
        <p>Descrição do Vídeo</p>
        <div className="videofooter__music">
          <MusicNoteIcon className="videofooter__icon"/>
          <div className="videofootermusic__text">
          <p>titulo da musica</p>
          </div>
        </div>
      </div> 
      <img
        className="videofooter__record"
        alt="imagem de um vinil girando"
        src="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/vinil.png?alt=media&token=95dd7b93-7976-446f-944b-5ea6a4fb85c9"
      />
    </div>
  );
}

export default Videofooter;
