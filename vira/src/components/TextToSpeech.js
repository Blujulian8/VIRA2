import React, { useState, useEffect, useDebugValue } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
// import Dropdown from 'react-dropdown';

import VOLUME from "../icons/volume_up.svg";


function TextToSpeech(props) {
  const { speak, voices } = useSpeechSynthesis();

  const [voice, setVoice] = useState(null);
  const [value, setValue] = useState(props.text);

  function read() {

    let actual = voice;

    if (actual == null) {
      voices.forEach((element) => {
        if (element.lang.indexOf("es") != -1) {
          actual = element;
          setVoice(element);
        }
      })
    }

    speak({ text: value, voice: actual });
  }

  return (

    <div>

      <a className="btn Boton Boton3sin" onClick={() => read()} role="button" >
        <img src={VOLUME} className="IconoSM my-auto" alt="Escuchar" />
      </a>
    </div>
  );
}

export default TextToSpeech;

//https://github.com/MikeyParton/react-speech-kit#usage