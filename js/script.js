const navToggler = document.querySelector(".navbar-toggler");
const navCollapse = document.querySelector(".navbar-collapse");

navToggler.addEventListener("click", () => {
  navCollapse.classList.toggle("showNav");
});

new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Web Designer", { delay: 400 })
  .pause(500)
  .delete(12)
  .type("Web Developer", { delay: 400 })
  .pause(500)
  .delete(14)
  .go();

///button
const buttons = document.querySelectorAll("a");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement("h6");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
});

/*---gsap---*/
gsap.registerPlugin(ScrollTrigger);
gsap.from(".contact-left", {
  duration: 10,
  opacity: 0,
  y: -400,
  stagger: 0.4,
});
gsap.from(".header-left", {
  duration: 2,
  opacity: 0,
  x: -300,
  stagger: 0.4,
});
gsap.from(".header-right", {
  duration: 3,
  opacity: 0,
  x: 300,
  stagger: 0.4,
});
gsap.from(".footer-item", {
  duration: 3,
  opacity: 0,
  y: 300,
  stagger: 0.4,
});

gsap.from(".skill-item", {
  duration: 1,
  opacity: 0,
  y: -100,
  stagger: 0.4,
});
gsap.from(".project-item", {
  duration: 1,
  opacity: 0,
  y: -100,
  stagger: 0.4,
});

gsap.from(".contact-left", {
  duration: 2,
  opacity: 0,
  y: 300,
  stagger: 0.4,
});

gsap.from(".contact-right", {
  duration: 2.5,
  opacity: 0,
  y: 300,
  stagger: 0.4,
});
