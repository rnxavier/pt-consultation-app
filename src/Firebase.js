import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} from "../secret";

var firebaseApp = firebase.initializeApp({
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
});

var db = firebaseApp.firestore();

export { db };
