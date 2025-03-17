// signup.js

function signup() {
    // Retrieve existing user data from localStorage
    var existingUserData = JSON.parse(localStorage.getItem("users")) || [];
  
    // Retrieve values from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
  
    // Validate the inputs (you may add more validations based on your requirements)
    if (username.trim() === "" || password.trim() === "" || email.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Check if the username is already taken
    if (existingUserData.some(user => user.username === username)) {
      alert("Username is already taken. Please choose a different one.");
      return;
    }
  
    // Append new user data
    var userData = {
      username: username,
      password: password,
      email: email
    };
  
    existingUserData.push(userData);
  
    // Store the updated array in localStorage
    localStorage.setItem("users", JSON.stringify(existingUserData));
  
    // You can redirect the user to a success page or perform other actions here
    alert("Signup successful!");
    // Example: Redirect to a success page
    window.location.href = "index.html";
  }
  