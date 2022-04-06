// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDXMVJxOmwnOwhvV-CabhAkQkS8PtdYpe4',
  authDomain: 'house-marketplace-app-e66ef.firebaseapp.com',
  projectId: 'house-marketplace-app-e66ef',
  storageBucket: 'house-marketplace-app-e66ef.appspot.com',
  messagingSenderId: '804691766591',
  appId: '1:804691766591:web:1efba6c1b1b6cb51f3778a',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
