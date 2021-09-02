let counts = 0;
// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————
function listener(el, container) {
  const fx = new TextScramble(el, 0);
  console.log(el.dataset.des);
  fx.setText(el.dataset.des, counts, container);
}
class TextScramble {
  constructor(el, c) {
    this.c = c;
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#_";
    this.update = this.update.bind(this);
  }
  setText(newText, counts, container) {
    this.c++;
    if (this.c >= 4) return;
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// ——————————————————————————————————————————————————
// Tour section
// ——————————————————————————————————————————————————
const decoder = (container) => {
  let arr = Array.from(Array.from(container.children)[1].children);
  container = Array.from(container.children)[1];
  arr.forEach((el) => {
    container.addEventListener("mouseenter", () => {
      listener(el, container);
    });
  });
};

Array.from(document.querySelectorAll(".features")).forEach((el) => {
  decoder(el);
});
