import React from 'react';
import './App.css';
import Listener from './components/SpeechRecogniser';
import Reader from './components/TextToSpeech';

function App() {
  
  return (
    <>
      <Listener palabra="hoy compre batatas"/>
      <Reader text="Hola mi nombre"/>
    </>
  );
}

export default App;
