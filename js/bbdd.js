const firebase = require("firebase");
const { builtinModules } = require("module");
// Required for side-effects
require("firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyC7E2hbPK885jBeu2GBZFeFkFt7Mjy1T_w",
    authDomain: "viraphasia.firebaseapp.com",
    databaseURL: "https://viraphasia.firebaseio.com",
    projectId: "viraphasia",
    storageBucket: "viraphasia.appspot.com",
    messagingSenderId: "157034405462",
    appId: "1:157034405462:web:7322aa8c5d7f025e8ae5f7",
    measurementId: "G-JGH825CHLG"
  };
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


module.exports = app;