"use-strict";

//////////////////////////////
// Simulates a click event

document.querySelector("h1").click();

class Autoplay {
  constructor(container) {
    this.container = container;
    this.video = Array.from(this.container.children)[0];
  }
  attachListener() {
    this.container.addEventListener("mouseenter", () => {
      this.video.play();
    });
    this.container.addEventListener("click", () => {
      this.video.play();
    });
    this.container.addEventListener("mouseleave", () => {
      this.video.pause();
    });
  }
}

let valerian = new Autoplay(document.querySelector(".features__img-2"));
valerian.attachListener();

let ego = new Autoplay(document.querySelector(".features__img"));
ego.attachListener();

let defence = new Autoplay(document.querySelector(".defence__img"));
defence.attachListener();
