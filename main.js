const clickMe = document.querySelector(".btn");
const picContainer = document.getElementById("pic-container");
picContainer.style.display = "none";
clickMe.addEventListener("click", function() {
  picContainer.style.display = "block";
});
