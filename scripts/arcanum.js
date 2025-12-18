document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar a");
  const sections = document.querySelectorAll(".arcanum-section");

  // Mostrar la primera sección por defecto
  if (sections.length) {
    sections[0].classList.add("active");
  }

  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);

      sections.forEach(section => {
        section.classList.remove("active");
        if (section.id === targetId) {
          section.classList.add("active");
        }
      });

      // Scroll suave hacia arriba (opcional)
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});
