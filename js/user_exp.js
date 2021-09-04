"use-strict";

//////////////////////////////////////////////////
// Preventing Reload on every link

/////////////////////////////////////////////////
// Animated blobs
const blob1 = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { repeat: 999, duration: 3000, yoyo: true }
);
blob1.start();
const blob2 = KUTE.fromTo(
  "#blob3",
  { path: "#blob3" },
  { path: "#blob4" },
  { repeat: 999, duration: 3000, yoyo: true }
);
blob2.start();

//////////////////////////////////////////
// Item Slider
document.getElementById("slider-text").remove();

$(document).ready(function () {
  $("#itemslider").carousel({ interval: 3000 });

  $(".carousel-showmanymoveone .item").each(function () {
    var itemToClone = $(this);

    for (var i = 1; i < 6; i++) {
      itemToClone = itemToClone.next();

      if (!itemToClone.length) {
        itemToClone = $(this).siblings(":first");
      }

      itemToClone
        .children(":first-child")
        .clone()
        .addClass("cloneditem-" + i)
        .appendTo($(this));
    }
  });
});
