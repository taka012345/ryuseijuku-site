const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const modal = document.querySelector("#imageModal");

if (modal) {
  const modalImage = modal.querySelector("img");
  const closeButton = modal.querySelector(".modal-close");

  document.querySelectorAll(".gallery-button img").forEach((image) => {
    image.parentElement.addEventListener("click", () => {
      modalImage.src = image.src;
      modalImage.alt = image.alt;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modalImage.src = "";
    modalImage.alt = "";
  };

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
}
