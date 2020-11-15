import React, { useState, useEffect, useDebugValue } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
// import Dropdown from 'react-dropdown';

import VOLUME from "../icons/volume_up.svg";


function TextToSpeech(props) {
  const { speak, voices } = useSpeechSynthesis();

  const [voice, setVoice] = useState(null);
  const [value, setValue] = useState(props.text);

  function read() {

    //   let actual = voice;

    //   if (actual == null) {
    //     voices.forEach((element) => {
    //       if (element.lang.indexOf("es") != -1) {
    //         actual = element;
    //         setVoice(element);
    //       }
    //     })
    //   }
    //   speak({ text: "culoo", voice: actual });
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Hello World";
    window.speechSynthesis.speak(msg)
  }

  if (props.type === "icono") {
    return (

      <div>

        <a className="btn Boton Boton3sin p-2 m-3 ml-md-auto mr-md-4" onClick={() => read()} role="button" >
          <img src={VOLUME} className="IconoSM my-auto" alt="Escuchar" />
        </a>
      </div>
    );
  }

  else {
    return (
      <div>
        <a className="Tarjeta2" role="button" onClick={() => read()}>
          <h4 className="my-auto text2">Reproducir sonido</h4>
        </a>
      </div>
    )
  }


}

export default TextToSpeech;

//https://github.com/MikeyParton/react-speech-kit#usage