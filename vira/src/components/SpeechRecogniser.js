import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
//import Readalong from "react-readalong-component";

const SpeechRecogniser = (props) => {
  const [palabra, setPalabra] = useState(props.palabra);

  const { transcript, resetTranscript } = useSpeechRecognition();

  const empezar = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const parar = () => {
    SpeechRecognition.abortListening();
    if (transcript.toLowerCase().indexOf(palabra) !== -1) {
      alert("ENRME");
    }
  };

  return (
    <div>
      <button onClick={empezar}>Start</button>
      <button onClick={parar, resetTranscript}>Stop</button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechRecogniser;
