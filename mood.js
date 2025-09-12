const red = document.getElementById("red")
const green = document.getElementById("green")
const blue = document.getElementById("blue")
const purple = document.getElementById("purple")



const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// function to show popup
function showPopup(color) {
  popup.style.display = "flex";  // show the popup
  document.getElementById("popupInput").value = ""; // clear input
}

// attach event listeners
red.addEventListener("click", () => showPopup("red"));
green.addEventListener("click", () => showPopup("green"));
blue.addEventListener("click", () => showPopup("blue"));
purple.addEventListener("click", () => showPopup("purple"));

// close popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});