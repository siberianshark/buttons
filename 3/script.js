// Используем GSAP для анимации всех кнопок при загрузке страницы
gsap.from(".btn", {
    duration: 0.8,
    scale: 0.7,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out"
});

// Анимация для первой кнопки с вращением и сдвигом
gsap.to(".btn1", {
    duration: 2,
    x: 100,
    rotation: 360,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Пример для других кнопок с эффектами
gsap.to(".btn2", {
    duration: 1,
    x: 150,
    rotation: -45,
    repeat: -1,
    yoyo: true,
    ease: "back.out(1.7)"
});

gsap.to(".btn3", {
    duration: 1.5,
    scale: 1.2,
    yoyo: true,
    repeat: -1,
    ease: "elastic.out(1, 0.75)"
});

// Еще одна анимация для кнопки с эффектом скачка
gsap.to(".btn4", {
    duration: 1,
    scale: 1.05,
    yoyo: true,
    repeat: -1,
    ease: "bounce.out"
});
