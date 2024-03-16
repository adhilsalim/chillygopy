const imageContainer = document.getElementById("infinite_image");

function buildPage() {
  setTimeout(() => {
    const randomNumber = getRandomNumber();
    const div = document.createElement("div");
    div.className = "col-12";
    const innerDiv = document.createElement("div");
    innerDiv.className = "bg-img d-flex justify-content-center";
    const img = document.createElement("img");
    img.src = `assets/images/bg-${randomNumber}.jpg`;
    img.alt = "hero";
    img.className = "img-fluid";
    innerDiv.appendChild(img);
    div.appendChild(innerDiv);
    imageContainer.appendChild(div);
  }, 10);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

window.addEventListener("scroll", () => {
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  const scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  const midScrollHeight = scrollHeight / 2;

  if (scrollTop >= midScrollHeight) {
    buildPage();
  }
});
buildPage();
