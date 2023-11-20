import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "./config.js";

const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit' , (event)=>{
    event.preventDefault();  //ksi bh element ka default behaviour khtm krta ha

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => { 
      const user = userCredential.user;
      console.log(user);
      email.value = ''
      password.value = ''
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
})