let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  let image_tags = document.getElementsByClassName("image-tag");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" dot-active", "");
  // }
  for (i=0; i<image_tags.length; i++) {
    image_tags[i].className = image_tags[i].className.replace(" image-tag-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " dot-active";
  image_tags[slideIndex-1].className += " image-tag-active";
}