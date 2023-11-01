const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes - Set duration to video length in seconds x 100
let scene = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

// Text fade anim
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);

//Video Anim
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  // convert duration to seconds (video length / 1000)
  scrollpos = e.scrollPos / 1000;
});

// add scroll stop ease and framerate
setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
}, 33.3);
