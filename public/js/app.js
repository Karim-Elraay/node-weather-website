window.addEventListener("load", function () {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (currentPage === link.pathname) {
      link.classList.add("active");
    }
  });
});

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.innerHTML =
          data.forecast.description +
          ". It is currently " +
          data.forecast.temperature +
          "&#8451; degrees out. feels like " +
          data.forecast.feelslike +
          "&#8451;. There is a " +
          data.forecast.cloudcover +
          "% cloud cover.";
      }
    });
  });
});
