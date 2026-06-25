const testButton = document.getElementById("testButton");
const message = document.getElementById("message");

testButton.addEventListener("click", function () {
  message.textContent = "Frontend funktioniert!";
});