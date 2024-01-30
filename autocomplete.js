// Array of available keywords for search suggestions
let availableKeywords = [
    'HTML',
    'CSS',
    'Easy Tutorials',
    'javaScript',
    'Where to learn coding online',
    'Where to learn web design',
    'How to create a website',
];

// Reference to the result box and input box in the HTML document
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

// Event handler for keyup event on the input box
inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;

    // Check if input has any characters
    if (input.length) {
        // Filter keywords based on case-insensitive match with the input
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }

    // Display the filtered results
    display(result);

    // If no results, clear the result box
    if (!result.length) {
        resultsBox.innerHTML = '';
    }
}

// Function to display search results
function display(result) {
    // Create a list of clickable items from the result array
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    // Update the result box with the list of items
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

// Function to handle the selection of an item from the result list
function selectInput(list) {
    // Set the input box value to the selected item and clear the result box
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
