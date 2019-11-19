const $imgSrc = document.querySelector('[data-js-img-src]');
const $imgTrigger = document.querySelectorAll('[data-js-image-trigger]');
let $imgValue = "";

for(let i=0; i < $imgTrigger.length; i++){
  $imgTrigger[i].addEventListener('mouseover', function(event){
    $imgValue = $imgTrigger[i].getAttribute('data-js-image-value');
    $imgSrc.src="assets/brands/"+$imgValue+".jpg";
    console.log($imgValue);
  });
}
