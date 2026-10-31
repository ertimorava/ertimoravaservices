// Mobile navigation
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Mbyll menunë" : "Hap menunë");
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form
const form = document.getElementById("contact-form");
const status = form.querySelector(".form__status");

function setStatus(text, type) {
  status.textContent = text;
  status.className = "form__status" + (type ? " is-" + type : "");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  let valid = true;
  form.querySelectorAll("[required]").forEach((field) => {
    const empty = !field.value.trim();
    field.classList.toggle("invalid", empty);
    if (empty) valid = false;
  });

  if (!valid) {
    setStatus("Ju lutem plotësoni të gjitha fushat.", "error");
    return;
  }

  const data = Object.fromEntries(new FormData(form));

  // TODO: dërgimi i mesazhit në Telegram do të lidhet më vonë.
  console.log("Mesazh i ri:", data);
  setStatus("Formulari nuk është ende aktiv. Ju lutem na telefononi.", "error");
});
