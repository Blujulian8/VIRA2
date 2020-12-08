import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
// import Dropdown from 'react-dropdown';

import VOLUME from "../icons/volume_up.svg";


function TextToSpeech(props) {
  const { speak, voices } = useSpeechSynthesis();

  const [voice, setVoice] = useState(null);
  const [value] = useState(props.text); //aca habria un setValue 

  function read() {

    let actual = voice;

    if (actual == null) {
      voices.forEach((element) => {
        if (element.lang.indexOf("es") !== -1) {
          actual = element;
          setVoice(element);
        }
      })
    }

    var esLaQueVa = actual ? actual : voices[0]
    console.log(value)
    speak({ text: value, voice: esLaQueVa });

    // var msg = new SpeechSynthesisUtterance();
    // var voices = window.speechSynthesis.getVoices();
    // console.log(voices)
    // msg.voice = voices[0];
    // msg.volume = 1; // From 0 to 1
    // msg.rate = 1; // From 0.1 to 10
    // msg.pitch = 2; // From 0 to 2
    // msg.text = value;
    // msg.lang = 'es';
    // speechSynthesis.speak(msg);

  }

  if (props.type === "icono") {
    return (

      <div>

        <button className="btn Boton Boton3sin p-2 m-3 ml-md-auto mr-md-4" onClick={() => read()}>
          <img src={VOLUME} className="IconoSM my-auto" alt="Escuchar" />
        </button>
      </div>
    );
  }

  else {
    return (
      <div>
        <button className="Tarjeta2" onClick={() => read()}>
          <h4 className="my-auto text2">Reproducir sonido</h4>
        </button>
      </div>
    )
  }


}

export default TextToSpeech;

//https://github.com/MikeyParton/react-speech-kit#usage