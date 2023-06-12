const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// Tabs event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// Hamburger event listener
btn.addEventListener("click", navToggle);

function onTabClick(e) {
  tabs.forEach((tab) => {
    tab.classList.remove("border-softRed", "border-b-4", "md:border-b-0");
  });

  // Hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  // New tab and panel based on the target tab
  e.target.classList.add("border-softRed", "border-b-4");

  // get target from data attribute
  const target = e.target.dataset.target;

  const targetPanel = document.querySelector(`.${target}`);

  if (targetPanel) {
    targetPanel.classList.remove("hidden");
  }
}

// Toggle Menu
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
}
