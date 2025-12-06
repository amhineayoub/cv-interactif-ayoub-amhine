
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }


  const toggleMoreBtn = document.getElementById("toggleMoreAbout");
  const moreAboutDiv = document.getElementById("moreAbout");

  if (toggleMoreBtn && moreAboutDiv) {
    toggleMoreBtn.addEventListener("click", () => {
      const isHidden = moreAboutDiv.classList.contains("d-none");
      moreAboutDiv.classList.toggle("d-none");

      toggleMoreBtn.textContent = isHidden ? "Afficher moins" : "En savoir plus";
    });
  }


  const navLinks = document.querySelectorAll(".nav-scroll");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const yOffset = -70; 
        const y =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  });

 
  const filterButtons = document.querySelectorAll(".skill-filter");
  const skillItems = document.querySelectorAll(".skill-item");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      skillItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");

        if (category === "all" || category === itemCategory) {
          item.classList.remove("d-none");
        } else {
          item.classList.add("d-none");
        }
      });
    });
  });

 
  const themeToggleBtn = document.getElementById("themeToggle");
  const body = document.body;


  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.setAttribute("data-bs-theme", savedTheme);
    updateThemeButtonText(themeToggleBtn, savedTheme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = body.getAttribute("data-bs-theme") || "light";
      const newTheme = currentTheme === "light" ? "dark" : "light";
      body.setAttribute("data-bs-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeButtonText(themeToggleBtn, newTheme);
    });
  }

  function updateThemeButtonText(button, theme) {
    if (!button) return;
    if (theme === "dark") {
      button.innerHTML = '<i class="bi bi-sun"></i> Mode clair';
    } else {
      button.innerHTML = '<i class="bi bi-moon-stars"></i> Mode sombre';
    }
  }
});
