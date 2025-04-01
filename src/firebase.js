import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: 'AIzaSyBmlIM_FLmRhEQHg3W_T5L00ea2Z1FC-y4',
	authDomain: 'todosfirebase-73222.firebaseapp.com',
	databaseURL: 'https://todosfirebase-73222-default-rtdb.firebaseio.com',
	projectId: 'todosfirebase-73222',
	storageBucket: 'todosfirebase-73222.firebasestorage.app',
	messagingSenderId: '1048513619817',
	appId: '1:1048513619817:web:905066ac3fc27fbdb0fff8',

	//measurementId: 'G-FZRHR0H1CK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getDatabase(app);
