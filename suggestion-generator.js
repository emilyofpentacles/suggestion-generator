
// Define an array of suggestions
const suggestions = [
  "Coral Island",
  "Disney Dreamlight Valley",
  "Stardew Valley",
  "Potion Permit",
  "Bear and Breakfast",
  "Cats/Dogs Organized Neatly",
  "A Little To The Left",
  "House Flipper",
  "Mini Metro",
  "Mini Motorways",
  "Potion Craft",
  "Sticky Business",
  "Strange Horticulture",
  "Travelers Rest",
  "Unpacking",
  "Wylde Flowers"
];

// Generate a random index
const randomIndex = Math.floor(Math.random() * suggestions.length);

// Get a random suggestion from the array
const randomSuggestions = suggestions[randomIndex];

// Print the random suggestion
console.log(randomSuggestions);
