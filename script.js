//         // Set the target date and time
//         const targetDate = new Date("2025-11-20T23:59:59").getTime();

//         // Update the countdown every second
//         const countdownInterval = setInterval(() => {
//             const now = new Date().getTime();
//             const timeRemaining = targetDate - now;

//             // Calculate days, hours, minutes, and seconds
//             const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            

//             // Display the countdown
//             document.getElementById("countdown").innerHTML = 
//                 `${days}d ${hours}h ${minutes}m ${seconds}s`;

//             // If the countdown is over, stop the interval
//            if (timeRemaining < 0) {
//     clearInterval(countdownInterval);

//     // Show the first element with class "gift"
//     const giftElements = document.getElementsByClassName("gift");
//     if (giftElements.length > 0) {
//         giftElements[0].style.display = "flex";
//     }

//     // Hide the first <header> element
//     const headerElements = document.getElementsByTagName("header");
//     if (headerElements.length > 0) {
//         headerElements[0].style.display = "none";
//     }
// }
// }, 1000);



       