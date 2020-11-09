const firebase = require("firebase");

var app = require('./bbdd');

var db = firebase.firestore(app);

var devolver;

var docRef = db.collection("Vira2020").doc("categorias").collection("Alimentos").doc("Colaciones").collection("Colaciones").doc("Cereales");

docRef.get().then(function(doc) {
    if (doc.exists) {
        // devolver = doc.data();
        module.exports = doc.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

// console.log (devolver);

