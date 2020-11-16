import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
//import Readalong from "react-readalong-component";
import VOICE from "../icons/keyboard_voice.svg";
import STOP from "../icons/stop_rounded.svg";


const SpeechRecogniser = (props) => {
  // const [coincide, setCoincide] = useState();

  var coincide = 0

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

      // setCoincide(1)
      coincide = 2;
      Coincide(coincide)
      alert("¡Correcto!")
    }
    else {

      // setCoincide(2);
      coincide = 2

      Coincide(coincide, transcript)
      alert('Incorrecto. Dijiste: "' + transcript + '"')
    }
    resetTranscript();
  };

  return (
    <>
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

    </>
  );
};



function Coincide(coincide, transcript) {
  var hola = 1

  // if (coincide === 1) {
  //   console.log("GIGANTE!");
  //   return (
  //     alert("¡Correcto!")
  //   )
  // }

  // else if (coincide === 2) {
  //   console.log("F man");
  //   return (
  //     alert("Incorrecto. Intenta de nuevo.")
  //   )
  // }

  // if (hola == 1) {
  //   return (
  //     <div className="alert Jumbo8 h2 mb-4 mt-3 mt-md-0 text-center Borde Sombra">
  //       ¡Correcto!
  //     </div>
  //   )
  // }

  return (
    <div>
      {/* holaa ACA SI SE MUESTRA QUE DIGO*/}
      {coincide === 1 &&
        <div className="alert Jumbo8 h2 mb-4 mt-3 mt-md-0 text-center Borde Sombra">
          ¡Correcto!
        </div>}

      {coincide === 2 &&
        <div className="alert Jumbo8 h2 mb-4 mt-3 mt-md-0 text-center Borde Sombra">
          Incorrecto. Dijiste: "{transcript}"
        </div>}
    </div>
  )

}



export default SpeechRecogniser;

export { Coincide };
