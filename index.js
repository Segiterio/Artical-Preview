const share_icon_button = document.getElementById("share-icon-container");

const share_button_inside_tooltip = document.getElementById(
  "share-button-inside-tooltip"
);

const down_arrow = document.getElementById("down-arrow");
const share_tooltip = document.getElementById("share-tooltip");

console.log(share_icon_button, down_arrow, share_tooltip);

share_icon_button.addEventListener("click", function () {
  down_arrow.classList.toggle("down-arrow-show");
  share_tooltip.classList.toggle("share-tooltip-show");
});

share_button_inside_tooltip.addEventListener("click", function () {
  share_tooltip.classList.remove("share-tooltip-show");
});

