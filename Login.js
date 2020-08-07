var emailArray = ["test@techvalens.com","puneet@rockindia.in", "abc@gmail.com",];
var passwordArray = ["1234", "1234", "1234"];

function login() {
  event.preventDefault();

  var email = document.getElementById("se").value;
  var password = document.getElementById("sp").value;

  var i = emailArray.indexOf(email);

  if (emailArray.indexOf(email) == -1) {
    if (email == "") {
      alert("Email required.");
      return;
    }
    alert("Email does not exist.");
    return;
  } else if (passwordArray[i] != password) {
    if (password == "") {
      alert("Password required.");
      return;
    }
    alert("Password does not match.");
    return;
  } else {
    window.location = "Welcome.html";
    document.getElementById("se").value = "";
    document.getElementById("sp").value = "";
    return;
  }
}
