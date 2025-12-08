function greetUser() {
  let name = document.getElementById("nameInput").value;
  let mood = document.getElementById("moodInput").value;

  let message = "Hello, " + name + "! You are feeling " + mood + " today.";
  document.getElementById("greeting").innerHTML = message;
}

function clearFields() {
  document.getElementById("nameInput").value = "";
  document.getElementById("moodInput").value = "";
  document.getElementById("greeting").innerHTML = "";
}
