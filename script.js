// Target date: Nov 20, 2025, 11:59:59 PM in local time
const targetDate = new Date(2025, 10, 20, 23, 59, 59).getTime();

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeRemaining < 0) {
        clearInterval(countdownInterval);

        const giftElements = document.getElementsByClassName("gift");
        if (giftElements.length > 0) {
            giftElements[0].style.display = "flex";
        }

        const headerElements = document.getElementsByTagName("header");
        if (headerElements.length > 0) {
            headerElements[0].style.display = "none";
        }
    }
}, 1000);
function showCard() {
    const gift = document.getElementById("gift");
    gift.addEventListener("click", () => {
        gift.style.display = "none";
    const card = document.getElementById("card");
    card.classList.add("show");
    });
}

showCard();
       