// Get the quote display element
const quoteDisplay = document.getElementById('quote-display');

// Function to display a random quote
function displayRandomQuote() {
  // Get a random quote from the array
  const randomIndex = Math.floor(Math.random() * techQuotes.length);
  const randomQuote = techQuotes[randomIndex];

  // Display the quote
  quoteDisplay.textContent = randomQuote;
}

// Call the function when the page loads
window.onload = displayRandomQuote;
