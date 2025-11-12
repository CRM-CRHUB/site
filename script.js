const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

document.querySelectorAll("nav a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  })
);
