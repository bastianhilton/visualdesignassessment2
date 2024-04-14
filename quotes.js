// Function to fetch quotes and display them
function fetchAndDisplayQuotes() {
    // Function to display a random quote
    function displayQuote(quotes) {
        // Generate a random index to select a random quote from the array
        const randomIndex = Math.floor(Math.random() * quotes.length);
        // Get the random quote using the random index
        const randomQuote = quotes[randomIndex];
        // Update the text content of the quote and author elements with the random quote
        quoteText.textContent = randomQuote.quote;
        quoteAuthor.textContent = "-" + randomQuote.author;
    }

    // Get references to HTML elements where the quote will be displayed
    const quoteContainer = document.getElementById('quote-container');
    const quoteText = document.getElementById('quote');
    const quoteAuthor = document.getElementById('quote-author');

    // Fetching the JSON file containing the quotes initially
    let quotes = [];

    // Fetch quotes initially
    for (let i = 0; i < 5; i++) {
        fetch('quotes.json')
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                // Append the fetched quotes to the array
                quotes.push(...data);
                // Display a random quote when the quotes are fetched
                if (i === 4) {
                    displayQuote(quotes);
                }
            })
            .catch(error => {
                // Log an error message if there's an issue fetching the quotes initially
                console.error('Error fetching quotes:', error);
            });
    }

    // Set interval to refresh quotes every minute
    setInterval(() => {
        // Display a random quote from the already fetched quotes
        displayQuote(quotes);
    }, 60000); // Refresh quotes every minute
}

// Call the function to fetch and display quotes
fetchAndDisplayQuotes();
