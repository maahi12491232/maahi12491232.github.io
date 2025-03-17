// signin.js

function login() {
    // Retrieve values from the form
    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;
  
    // Retrieve existing user data from localStorage
    var existingUserData = JSON.parse(localStorage.getItem("users")) || [];
  
    // Find the user with the entered username
    var user = existingUserData.find(user => user.username === enteredUsername);
  
    // Check if the user exists and the password matches
    if (user && user.password === enteredPassword) {
      alert("Login successful!");
      window.location.href = "nv.html";
      // Redirect or perform other actions on successful login
    } else {
      alert("Invalid username or password");
    }
  }
  