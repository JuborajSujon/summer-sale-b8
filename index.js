// select card container
const cards = document.querySelectorAll(".card");

// list number for title container
let titleCount = 1;

for (let i = 0; i < cards.length; i++) {
  // excess all card elements
  const card = cards[i];

  card.addEventListener("click", function () {
    // get the element
    const title = card.querySelector("h3").innerText;
    const price = card.querySelector("span").innerText;
    const titleContainer = document.querySelector("#title-container");

    // create a new element for title container
    const p = document.createElement("p");
    p.innerText = `${titleCount}. ${title}`;

    // add to title container
    titleContainer.appendChild(p);

    // increment title count
    titleCount++;
  });
}
