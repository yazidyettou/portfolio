const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

sections.forEach((section) => observer.observe(section));

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

if (lightbox) {
  document.querySelectorAll(".gallery-item img, .inline-still img, .poster-frame img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("open");
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}
