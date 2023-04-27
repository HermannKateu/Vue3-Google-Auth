import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAEDQ6j5EfoQgO3dLs0w7StD9XOBkUPHw0",
    authDomain: "vue3--auth.firebaseapp.com",
    projectId: "vue3--auth",
    storageBucket: "vue3--auth.appspot.com",
    messagingSenderId: "635458647073",
    appId: "1:635458647073:web:07a3a93397b8d57c001f60",
    measurementId: "G-VND3BZJGHS"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;