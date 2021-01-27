import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCg-b9icfg30s7KgPyaUUX32tLiFs8k0G4",
  authDomain: "logfireapp-c48a5.firebaseapp.com",
  projectId: "logfireapp-c48a5",
  storageBucket: "logfireapp-c48a5.appspot.com",
  messagingSenderId: "227119272399",
  appId: "1:227119272399:web:b93b6465bb912dcd7642ba",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
