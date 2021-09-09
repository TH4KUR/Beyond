"use-stict";

let btnArr = [
  document.querySelector(".navigation__link-1"),
  document.querySelector(".navigation__link-2"),
];
btnArr.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let zx = e.target.dataset.to;
    console.log(zx, document.querySelector(zx));
    document.querySelector(zx).scrollIntoView({ behavior: "smooth" });
  })
);
