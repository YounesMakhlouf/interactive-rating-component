const selectionStars = document.querySelectorAll('.rating');
const submitButton = document.querySelector("#submit");
const selectionText = document.querySelector("#selection");
let userRating = localStorage.getItem('rating');

if (submitButton) {
    addRatingEventListener();
    addSubmitEventListener();
}
if (selectionText) {
    selectionText.innerText = "You selected " + userRating + " out of 5";
}

function addRatingEventListener() {
    selectionStars.forEach((star) => {
        star.addEventListener("click", () => {
            userRating = star.innerText;
            localStorage.setItem('rating', userRating);
        });
    })
}

function addSubmitEventListener() {
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        location.href = "thanks.html";
    })
}