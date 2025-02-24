// GSAP анимации для кнопок
document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".btn", {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.1,
    });
  
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("mouseover", () => {
        gsap.to(btn, {
          scale: 1.1,
          rotation: 10,
          duration: 0.3,
        });
      });
  
      btn.addEventListener("mouseout", () => {
        gsap.to(btn, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
        });
      });
    });
  });
  