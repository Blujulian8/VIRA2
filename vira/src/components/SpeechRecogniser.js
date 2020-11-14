import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
//import Readalong from "react-readalong-component";
import VOICE from "../icons/keyboard_voice.svg";
import STOP from "../icons/stop_rounded.svg";
import ARROW from "../icons/arrow_right.svg";


const SpeechRecogniser = (props) => {
  const [palabra, setPalabra] = useState(props.palabra);

  const { transcript, resetTranscript } = useSpeechRecognition();

  const empezar = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const parar = () => {
    SpeechRecognition.abortListening();
    if (transcript.toLowerCase().indexOf(palabra) !== -1) {
      alert("GIGANTE!");
    }
    resetTranscript();
  };

  return (
    <div className="row">
      {/* <p>{transcript}</p> */}

      <div className="col-md-4 px-5">
        <a className="btn Boton Boton3sin btn-block Sombra py-2 my-3" role="button" onClick={empezar}>
          <img src={VOICE} className="IconoLG my-auto" alt="Hablar" />
          <h3 className="my-auto">Hablar</h3>
        </a>
      </div>

      <div className="col-md-4 px-5">
        <a className="btn Boton Boton3sin btn-block Sombra py-2 my-3" role="button" onClick={parar}>
          <img src={STOP} className="IconoLG my-auto" alt="Detenerse" />
          <h3 className="my-auto">Detenerse</h3>
        </a>
      </div>

      <div className="col-md-4 px-5">
        <a className="btn Boton Boton3sin btn-block Sombra py-2 my-3" href="" role="button">
          <img src={ARROW} className="IconoLG my-auto" alt="Siguiente oración" />
          <h3 className="my-auto">Siguiente Oración</h3>
        </a>
      </div>

    </div>
  );
};

export default SpeechRecogniser;
