import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-oRmGqn47Sr_nXZvZXI564PhmFQ8P8GA",
  authDomain: "netflix-clone-react-js-df103.firebaseapp.com",
  projectId: "netflix-clone-react-js-df103",
  storageBucket: "netflix-clone-react-js-df103.appspot.com",
  messagingSenderId: "735916540656",
  appId: "1:735916540656:web:c7dfdb874ff053dabdf835"
};

export default firebaseConfig;


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export  const db =  getFirestore(app);