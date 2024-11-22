document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-button");
  const ratingCard = document.getElementById("rating-card");
  const thankyouCard = document.getElementById("thankyou-card");
  const ratingToDisplay = document.getElementById("display-rating");

  let buttons = {
    "btn-1": 1,
    "btn-2": 2,
    "btn-3": 3,
    "btn-4": 4,
    "btn-5": 5,
  };
  let rating = 0;

  for (const btn in buttons) {
    const btnElement = document.getElementById(btn);
    btnElement.addEventListener("click", (e) => {
      e.preventDefault();
      rating = buttons[btn];
      // Reset colors for all buttons
      for (const b in buttons) {
        const bElement = document.getElementById(b);
        if (buttons[b] <= rating) {
          bElement.classList.add("bg-white", "text-black");
        } else {
          bElement.classList.remove("bg-white ", "text-black");
        }
      }
    });
  }

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    ratingCard.classList.remove("flex");
    ratingCard.classList.add("hidden");

    thankyouCard.classList.remove("hidden");
    thankyouCard.classList.add("flex");

    ratingToDisplay.append(`You selected ${rating} out of 5`);
  });
});
