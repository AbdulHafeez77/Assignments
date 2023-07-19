import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHyvoMaeOJsganflEhJ0CTo99whB8qDOY",
  authDomain: "test-1bbfa.firebaseapp.com",
  projectId: "test-1bbfa",
  storageBucket: "test-1bbfa.appspot.com",
  messagingSenderId: "21582621301",
  appId: "1:21582621301:web:32a196b50095bff457a63c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

let signupbtn = document.getElementById('signup-btn');

signupbtn && signupbtn.addEventListener('click', function(event) {
  event.preventDefault();
  let signupEmail = document.getElementById('signup-email');
  let signupPassword = document.getElementById('signup-pass')
  createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your account has been signed up!',
      showConfirmButton: false,
      timer: 1500
    })
    signupEmail.value = "";
    signupPassword.value = "";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorMessage == "Firebase: Error (auth/email-already-in-use)." ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Account Already Exist!',
        footer: '<a href="index.html">log in</a>'
      })
    }
    signupEmail.value = "";
    signupPassword.value = "";
  });
})


let loginbtn = document.getElementById('login-btn');

loginbtn && loginbtn.addEventListener('click', function(event) {
  event.preventDefault();
  let loginEmail = document.getElementById('login-email');
  let loginPassword = document.getElementById('login-pass');

  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
      const user = userCredential.user;
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your have successful log in!',
        showConfirmButton: false,
        timer: 1500
      })
      loginEmail.value = "";
      loginPassword.value = "";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorMessage == "Firebase: Error (auth/wrong-password)." ){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You enter Wrong Password!',
          footer: '<a href="">Forget Password?</a>'
        })
      }else if(errorMessage == 'Firebase: Error (auth/user-not-found).'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'User Not Found!',
          footer: '<a href="">Forget Password?</a>'
        })
      }
      loginEmail.value = "";
      loginPassword.value = "";
    })
}) 








