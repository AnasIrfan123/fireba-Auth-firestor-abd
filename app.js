//mne as it is pora code register.js wala paste krdya or isme kuch changes krdi h 

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "./config.js";

const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit' , (event)=>{
    event.preventDefault();  //ksi bh element ka default behaviour khtm krta ha

    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => { 
    const user = userCredential.user;
    console.log(user);

   window.location = 'dashboard.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
})