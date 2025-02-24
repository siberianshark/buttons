// GSAP анимации для кнопок
gsap.from(".btn", {
  opacity: 0,
  duration: 2,
  stagger: 0.2, // задержка для каждой кнопки
  y: 30, // начальное положение по оси Y
  ease: "bounce.out"
});

document.querySelectorAll(".btn").forEach((button, index) => {
  button.addEventListener("mouseenter", () => {
      gsap.to(button, { scale: 1.1, duration: 0.3, ease: "power2.out" });
  });

  button.addEventListener("mouseleave", () => {
      gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
});
