function changeHeading() {
  document.getElementById("mainHeading").textContent = "You clicked the button!";
}

document.getElementById("changeBtn").addEventListener("click", changeHeading);
