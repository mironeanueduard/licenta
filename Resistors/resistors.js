document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.querySelector(".product");
  const images = imageContainer.querySelectorAll(".product-images");
  const rightArrow = document.querySelector("#arrowRight");

  let currentImageIndex = 0;
  const imageCount = images.length;

  rightArrow.addEventListener("click", function () {
    images[currentImageIndex].style.transform = "translateX(-100%)";
    currentImageIndex = (currentImageIndex + 1) % imageCount;
    images[currentImageIndex].style.transform = "translateX(0)";
  });
});
