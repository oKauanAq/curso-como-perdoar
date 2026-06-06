// FAQ acessível: abre e fecha respostas sem depender de bibliotecas externas.
document.querySelectorAll(".faq-item").forEach((item) => {
  const button = item.querySelector(".faq-question");
  const icon = button.querySelector("span");

  button.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");

    button.setAttribute("aria-expanded", String(isOpen));
    icon.textContent = isOpen ? "−" : "+";
  });
});
