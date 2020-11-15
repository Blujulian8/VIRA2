import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
//import Readalong from "react-readalong-component";
import VOICE from "../icons/keyboard_voice.svg";
import STOP from "../icons/stop_rounded.svg";


const Coincide = (coincide) => {
  return (
    coincide
  )
}


const SpeechRecogniser = (props) => {
  const [coincide, setCoincide] = useState();

  var oracion = props.palabra.toLowerCase()

  console.log("a", oracion)

  const { transcript, resetTranscript } = useSpeechRecognition();

  const empezar = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const parar = () => {
    SpeechRecognition.abortListening();
    console.log("b", transcript.toLowerCase())
    if (transcript.toLowerCase().indexOf(oracion) !== -1) {
      console.log("GIGANTE!");
      setCoincide(1)
      Coincide(coincide)
    }
    else {
      console.log("F man");
      setCoincide(2);
      Coincide(coincide)
    }
    resetTranscript();
  };

  return (
    <>
      <p>{transcript}</p>

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

    </>
  );
};

export default SpeechRecogniser;

export { Coincide };
