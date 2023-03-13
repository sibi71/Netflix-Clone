import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAoh1uYmDtxR_VdpmFd_lN09qSZU7jc7B8",
    authDomain: "netflix-clone-12c6a.firebaseapp.com",
    projectId: "netflix-clone-12c6a",
    storageBucket: "netflix-clone-12c6a.appspot.com",
    messagingSenderId: "295636664194",
    appId: "1:295636664194:web:e8beb50a3b57a7d721999b"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore();

  export { app,auth,db}