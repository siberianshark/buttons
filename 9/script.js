document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".btn-1", { opacity: 0, scale: 0.5, duration: 1, delay: 0.1, ease: "elastic.out(1, 0.75)" });
    gsap.from(".btn-2", { x: -100, opacity: 0, duration: 1, delay: 0.2, ease: "power4.out" });
    gsap.from(".btn-3", { y: 100, opacity: 0, duration: 1, delay: 0.3, ease: "back.out(1.7)" });
    gsap.from(".btn-4", { rotation: 180, opacity: 0, duration: 1, delay: 0.4, ease: "bounce.out" });
    gsap.from(".btn-5", { scaleX: 0, opacity: 0, duration: 1, delay: 0.5, ease: "power3.inOut" });
    gsap.from(".btn-6", { rotationY: 180, opacity: 0, duration: 1, delay: 0.6, ease: "back.out(2)" });
    gsap.from(".btn-7", { scale: 0.5, opacity: 0, duration: 1, delay: 0.7, ease: "elastic.out(1, 0.75)" });
    gsap.from(".btn-8", { rotation: 360, opacity: 0, duration: 1, delay: 0.8, ease: "back.out(1.7)" });
    gsap.from(".btn-9", { x: 100, opacity: 0, duration: 1, delay: 0.9, ease: "bounce.out" });
    gsap.from(".btn-10", { scale: 0, opacity: 0, duration: 1, delay: 1, ease: "back.out(3)" });
    gsap.from(".btn-11", { rotation: 90, opacity: 0, duration: 1, delay: 1.1, ease: "power4.out" });
    gsap.from(".btn-12", { y: -100, opacity: 0, duration: 1, delay: 1.2, ease: "back.out(2)" });
    gsap.from(".btn-13", { scaleX: 0, opacity: 0, duration: 1, delay: 1.3, ease: "elastic.out(1, 0.75)" });
    gsap.from(".btn-14", { scale: 0.5, opacity: 0, duration: 1, delay: 1.4, ease: "back.out(2)" });
    gsap.from(".btn-15", { rotation: 360, opacity: 0, duration: 1, delay: 1.5, ease: "power3.out" });
});
