
setInterval(myTimer, 1000); // set timer for clock to refresh

// clock functionality for assessment 3
function myTimer() {
    // uses the months of the year to iterate through them
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
        "November", "December"
    ];
    const date = new Date(); // set javascript date object

    let name = month[date.getMonth()]; // uses javascript month object
    const day = new Date().toLocaleString(); // uses string to make the date easier to read

    document.getElementById("dateTime").innerHTML = name + " " + day; // manipulates the DOM to show the date on the frontend

    document.getElementById("quote").innerHTML = Quote.getRandomQuote();
}

// shows the current year in the footer

const currentYear = new Date().getFullYear();

document.getElementById("year").innerHTML = currentYear;