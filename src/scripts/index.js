import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import data from "../DATA.json";
import reviews from "../REVIEW.json";

data.restaurants.forEach((e) => {
  const card = document.createElement("a");
  card.classList.add("card");
  card.setAttribute("aria-label", `see ${e.name},${e.city} more detail`);
  card.setAttribute("href", `/${e.name}`);
  card.setAttribute("tabindex", "0");
  card.innerHTML = `
    <img class="card-img" src="${e.pictureId}" alt="${e.name},${e.city}" >
    `;

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.innerHTML = `
    <div class="card-title">
    <h2>${e.name}</h2>
    <div class='card-detail'>
        <h3>${e.city}</h3>
            <div>${
              "★".repeat(Math.round(e.rating)) +
              "☆".repeat(5 - Math.round(e.rating)) +
              " " +
              e.rating
            }</div>
    </div>
    </div>`;

  const cardDesc = document.createElement("div");
  cardDesc.classList.add("card-description");
  cardDesc.innerHTML = `<p>${e.description.substring(0, 120) + "..."}</p>`;

  card.appendChild(cardHeader);
  card.appendChild(cardDesc);

  document.querySelector("section").appendChild(card);
});

document.getElementById("hamburger").addEventListener("click", (e) => {
  document.querySelector("ul").classList.add("open");
  e.stopPropagation();
});

document.querySelector("main").addEventListener("click", (e) => {
  document.querySelector("ul").classList.remove("open");
  e.stopPropagation();
});

reviews.data.forEach((e) => {
  const card = document.createElement("div");
  card.classList.add("review-card");

  const header = document.createElement("div");
  header.classList.add("review-header");
  header.innerHTML = `
    <img src="https://i.pravatar.cc/45?u=${e.id}" alt="${e.name}" >
    <p><a href="/user/${e.id}">${e.name}</a> 
    <br>
    memberi <a href="/resto/${e.restaurant.replaceAll(" ", "_")}">${e.restaurant}</a> ${e.rate} bintang!
    </p>
    `;

  const content = document.createElement("div");
  content.classList.add("review-content");
  content.innerHTML = `<i>"${e.comment}"</i>`;

  card.appendChild(header);
  card.appendChild(content);

  document.getElementById("latest-reviews").appendChild(card);

  console.log(e.name, e.comment);
});
