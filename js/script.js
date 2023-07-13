const timeline = document.getElementById("timeline");
const closeButton = document.getElementById("close-menu");
const showMenuButton = document.getElementById("show-menu");
const header = document.getElementById("header");
const screenX = screen.width;

timeline.classList.add("timeline");
closeButton.style.display = "none";

window.addEventListener("resize", function () {
  "use strict";
  window.location.reload();
});

if (screenX > 800) {
  window.addEventListener(
    "scroll",
    () => {
      if (this.scrollY > 1000) {
        timeline.classList.add("timeline");
      } else {
        timeline.classList.remove("timeline");
      }
    },
    false
  );
} else {
  closeButton.addEventListener("click", () => {
    header.style.display = "none";
    closeButton.style.display = "none";
    showMenuButton.style.display = "block";
  });

  showMenuButton.addEventListener("click", () => {
    header.style.display = "flex";
    closeButton.style.display = "block";
    showMenuButton.style.display = "none";
  });

  header.addEventListener("click", () => {
    header.style.display = "none";
    closeButton.style.display = "none";
    showMenuButton.style.display = "block";
  });
}
