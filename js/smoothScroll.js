"use-stict";

let btnArr = [
  document.querySelector(".navigation__link-1"),
  document.querySelector(".navigation__link-2"),
];

btnArr.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(this, e);
    document
      .querySelector(`.${e.target.href.split(".")[1]}`)
      .scrollIntoView({ behavior: "smooth" });
  })
);
