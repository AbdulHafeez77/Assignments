
function storeSignupInformation() {
    var signupEmail = document.getElementById("signup-email").value;
    var signupPass = document.getElementById("signup-pass").value;
  
    localStorage.setItem("sign-email", signupEmail);
    localStorage.setItem("sign-pass", signupPass);
    
    localStorage.setItem("sign-email", signupEmail);
    localStorage.setItem("sign-pass", signupPass);
  }
  
  function checkInformation() {
    var loginEmail = document.getElementById("login-email").value;
    var loginPass = document.getElementById("login-pass").value;

    var storedEmail = localStorage.getItem("sign-email");
    var storedPass = localStorage.getItem("sign-pass");
  
    if (loginEmail === storedEmail && loginPass === storedPass) {
      alert('Congrats, you are in!');
    } 
    else {
      alert('Incorrect information!');
    }
  }
  

  