"use-strict";

class Autoplay {
  constructor(container) {
    this.container = container;
  }
  attachListener() {
    this.container.addEventListener("mouseenter", () => {
      console.log(Array.from(this.container.children));
      let [video] = Array.from(this.container.children);
      video.play();
    });
    this.container.addEventListener("mouseleave", () => {
      let [video] = Array.from(this.container.children);
      video.pause();
    });
  }
}

let valerian = new Autoplay(document.querySelector(".features__img-2"));
valerian.attachListener();

let ego = new Autoplay(document.querySelector(".features__img"));
ego.attachListener();
