// select card container
const cards = document.querySelectorAll(".card");

// list number for title container
let titleCount = 1;

// calculate total price
let totalPrice = 0;

for (let i = 0; i < cards.length; i++) {
  // excess all card elements
  const card = cards[i];

  card.addEventListener("click", function () {
    // get the element
    const title = card.querySelector("h3").innerText;
    const price = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );
    const titleContainer = document.querySelector("#title-container");

    // create a new element for title container
    const p = document.createElement("p");
    p.innerText = `${titleCount}. ${title}`;

    // add to title container
    titleContainer.appendChild(p);

    // increment title count
    titleCount++;

    // calculate total price
    totalPrice += price;
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
  });
}

// Use Promo Code function

// select apply button
const button = document.getElementById("apply-btn");

// add event listener
button.addEventListener("click", function () {
  // get promo code input value
  const inputValuePromoCode = document
    .getElementById("input-field")
    .value.toUpperCase()
    .split(" ")
    .join("");

  // get promo code value

  if (totalPrice >= 200) {
    if (inputValuePromoCode === "SELL200") {
      // set discount price
      const discountElement = document.getElementById("discountPrice");
      const discountAmount = totalPrice * 0.2;
      discountElement.innerText = discountAmount.toFixed(2);

      // rest total price
      const restTotalPrice = document.getElementById("total");
      restTotalPrice.innerText = (totalPrice - discountAmount).toFixed(2);
      document.getElementById("input-field").value = "";
    } else {
      alert("Invalid promo code");
      document.getElementById("input-field").value = "";
    }
  } else {
    alert("Please purchase at least $ 200");
    document.getElementById("input-field").value = "";
  }
});
