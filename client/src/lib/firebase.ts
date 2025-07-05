// client/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDgtPvodZLv_tojCpi6f1As0LNS_FH50Tw',
  authDomain: 'worshify-52a66.firebaseapp.com',
  projectId: 'worshify-52a66',
  storageBucket: 'worshify-52a66.appspot.com',
  messagingSenderId: "562597244093",
  appId: "1:562597244093:web:8b9f49089ed9e99048dbd4"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
