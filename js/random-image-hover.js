import $ from "https://esm.sh/jquery@4.0.0";

// Random image on hover
const images = [
  "./assets/branding-images/meganh-name-hero-image.jpg",
  "./assets/branding-images/meganh-name-hero-image2.jpg",
];

let previousImage = "";

function getRandomImage() {
  let image;

  do {
    const index = Math.floor(Math.random() * images.length);
    image = images[index];
  } while (image === previousImage);

  previousImage = image;
  return image;
}

$("#image-wrapper").mouseenter(function () {
  $("#image").attr("src", getRandomImage());
});
