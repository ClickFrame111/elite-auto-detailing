(function () {
  var menu = document.getElementById("menu");
  var nav = document.getElementById("nav");
  var button = document.getElementById("sample-control");
  var status = document.getElementById("sample-status");
  var header = document.querySelector(".mast");
  function placeHeader() {
    document.documentElement.style.scrollPaddingTop = (header.offsetHeight + 8) + "px";
  }
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    menu.setAttribute("aria-expanded", open ? "true" : "false");
    menu.textContent = open ? "Close" : "Menu";
  }
  placeHeader();
  window.addEventListener("resize", placeHeader);
  menu.addEventListener("click", function () {
    setMenu(menu.getAttribute("aria-expanded") !== "true");
  });
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menu.focus();
    }
  });
  button.addEventListener("click", function () {
    status.textContent = "Sample only. Nothing was sent, saved, or scheduled.";
  });
})();
