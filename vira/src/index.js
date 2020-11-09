import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyC7E2hbPK885jBeu2GBZFeFkFt7Mjy1T_w",
	authDomain: "viraphasia.firebaseapp.com",
	databaseURL: "https://viraphasia.firebaseio.com",
	projectId: "viraphasia",
	storageBucket: "viraphasia.appspot.com",
	messagingSenderId: "157034405462",
	appId: "1:157034405462:web:7322aa8c5d7f025e8ae5f7",
	measurementId: "G-JGH825CHLG",
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
export { db };


ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
