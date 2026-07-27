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
  { threshold: 0.15 }
);

sections.forEach((section) => observer.observe(section));

const glow = document.getElementById("cursorGlow");
let glowVisible = false;
let hideTimer;

window.addEventListener("mousemove", (e) => {
  glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;

  if (!glowVisible) {
    glow.classList.add("visible");
    glowVisible = true;
  }

  const el = document.elementFromPoint(e.clientX, e.clientY);
  const onDark = el && el.closest(".section-dark, .hero");
  glow.classList.toggle("on-dark", !!onDark);

  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    glow.classList.remove("visible");
    glowVisible = false;
  }, 2000);
});
