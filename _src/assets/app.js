const $imgFloating = document.querySelector("[data-js-img-floating]");
const $imgTrigger = document.querySelectorAll("[data-js-image-trigger]");
const $imgSrc = document.querySelector("[data-js-img-src]");
let $imgValue = "";

for (let i = 0; i < $imgTrigger.length; i++) {
  $imgTrigger[i].addEventListener("mouseover", function(event) {
    $imgFloating.classList.add("-show");
    $imgValue = $imgTrigger[i].getAttribute("data-js-image-value");
    $imgSrc.src = "assets/images/brands/" + $imgValue + ".jpg";
  });
  $imgTrigger[i].addEventListener("mouseleave", function(event) {
    $imgFloating.classList.remove("-show");
    $imgSrc.src = "";
  });
}
