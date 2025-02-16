function loadHomePage() {
  const content = document.getElementById("content");

  const heading = document.createElement("h2");
  heading.textContent = "Welcome to My Restaurant!";

  const image = document.createElement("img");
  image.src = "restaurant.jpg";
  image.alt = "Restaurant image";

  const description = document.createElement("p");
  description.textContent = "Come and enjoy the best food in town!";

  content.appendChild(heading);
  content.appendChild(image);
  content.appendChild(description);
}

export default loadHomePage;
