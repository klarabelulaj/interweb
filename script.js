const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
);

document.querySelectorAll(".reveal").forEach((el) => {
  obs.observe(el);
});


// Header KLARA
fetch("./header.html")
  .then((response) => response.text())
  .then((data) => {
    const header = document.getElementById("header");

    if (header) {
      header.innerHTML = data;

      const burgerBtn = document.getElementById("burgerBtn");
      const navMenu = document.getElementById("navMenu");

      if (burgerBtn && navMenu) {
        burgerBtn.addEventListener("click", () => {
          burgerBtn.classList.toggle("active");
          navMenu.classList.toggle("active");
        });
      }

      document.querySelectorAll(".dropdown > a").forEach((link) => {
        link.addEventListener("click", (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            link.parentElement.classList.toggle("active");
          }
        });
      });
    }
  })
  .catch((error) => {
    console.error("Header load error:", error);
  });

  // FUNKSION I DROPDOWN NE FOOTER LINDI
function initFooterDropdowns() {
  document.querySelectorAll(".footer-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        button.closest(".footer-dropdown").classList.toggle("active");
      }
    });
  });
}
// Footer LINDI
fetch("./footer.html")
  .then((response) => response.text())
  .then((data) => {
    const footer = document.getElementById("footer");

    if (footer) {
      footer.innerHTML = data;

      initFooterDropdowns();
    }
  })
  .catch((error) => {
    console.error("Footer load error:", error);
  });