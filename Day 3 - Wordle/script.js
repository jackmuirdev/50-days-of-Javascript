// Array of words to guess
const words = ["Abyss", "Ample", "Ankle", "Aroma", "Aural", "Began", "Blunt", "Braid", "Brisk", "Bumpy",
"Chive", "Clasp", "Crave", "Crest", "Cumin", "Drape", "Dregs", "Dumpy", "Dusky", "Dwell",
"Elite", "Ember", "Enact", "Evade", "Evoke", "Fable", "Flair", "Fluke", "Folly", "Gauze",
"Giddy", "Gloom", "Gorge", "Gusty", "Haste", "Hilly", "Hippy", "Hovel", "Hunch", "Icily",
"Inept", "Inert", "Irate", "Ivory", "Jaded", "Jazzy", "Jolly", "Joust", "Jumpy", "Kinky",
"Knack", "Knave", "Knead", "Kudos", "Lanky", "Latch", "Lolly", "Lurid", "Mirth", "Moody",
"Mourn", "Mower", "Muggy", "Nanny", "Nappy", "Nerve", "Nifty", "Nudge", "Olive", "Onset",
"Oomph", "Ounce", "Ovals", "Peppy", "Pious", "Pique", "Plush", "Poise", "Quail", "Quake",
"Quell", "Quill", "Quirk", "Ravel", "Reedy", "Ruddy", "Runic", "Sable", "Spicy", "Stilt",
"Swath", "Swirl", "Toast", "Tonic", "Triad", "Tryst", "Tweak", "Apple", "Beach", "Brain",
"Bread", "Brush", "Chair", "Chest", "Chord", "Click", "Clock", "Black", "Blind",
"Cloud", "Dance", "Diary", "Drink", "Earth", "Flute", "Fruit", "Ghost", "Grape", "Green",
"Happy", "Heart", "House", "Juice", "Light", "Money", "Music", "Party", "Pizza", "Plant",
"Radio", "River", "Salad", "Sheep", "Shoes", "Smile", "Snack", "Snake", "Spice", "Spoon",
"Storm", "Table", "Toast", "Tiger", "Train", "Water", "Whale", "Wheel", "Woman", "World",
"Write", "Youth", "Above", "Acute", "Alive", "Alone", "Angry", "Aware", "Awful", "Basic",
"Brave", "Brief", "Broad", "Brown", "Cheap", "Chief", "Civil", "Clean", "Clear", "Close",
"Crazy", "Daily", "Dirty", "Early", "Empty", "Equal", "Exact", "Extra", "Faint", "False",
"Fifth", "Final", "First", "Fresh", "Front", "Funny", "Giant", "Grand", "Great", "Green",
"Gross", "Happy", "Harsh", "Heavy", "Human", "Ideal", "Inner", "Joint", "Large", "Legal",
"Level", "Light", "Local", "Loose", "Lucky", "Magic", "Major", "Minor", "Moral", "Naked",
"Nasty", "Naval", "Other", "Outer", "Plain", "Prime", "Prior", "Proud", "Quick", "Quiet",
"Rapid", "Ready", "Right", "Roman", "Rough", "Round", "Royal", "Rural", "Sharp", "Sheer",
"Short", "Silly", "Sixth", "Small", "Smart", "Solid", "Sorry", "Spare", "Steep", "Still",
"Super", "Sweet", "Thick", "Third", "Tight", "Total", "Tough", "Upper", "Upset", "Urban",
"Usual", "Vague", "Valid", "Vital", "White", "Whole", "Wrong", "Young", "Abuse", "Adult",
"Agent", "Anger", "Apple", "Award", "Basis", "Beach", "Birth", "Block", "Blood", "Board",
"Brain", "Bread", "Break", "Brown", "Buyer", "Cause", "Chain", "Chair", "Chest", "Chief",
"Child", "China", "Claim", "Class", "Clock", "Coach", "Coast", "Court", "Cover", "Cream",
"Crime", "Cross", "Crowd", "Crown", "Cycle", "Dance", "Death", "Depth", "Doubt", "Draft",
"Drama", "Dream", "Dress", "Drink", "Drive", "Earth", "Enemy", "Entry", "Error", "Event",
"Faith", "Fault", "Field", "Fight", "Final", "Floor", "Focus", "Force", "Frame", "Frank",
"Front", "Fruit", "Glass", "Grant", "Grass", "Green", "Group", "Guide", "Heart", "Henry",
"Horse", "Hotel", "House", "Image", "Index", "Input", "Issue", "Japan", "Jones", "Judge",
"Knife", "Laura", "Layer", "Level", "Lewis", "Light", "Limit", "Lunch", "Major", "March",
"Match", "Metal", "Model", "Money", "Month", "Motor", "Mouth", "Music", "Night", "Noise",
"North", "Novel", "Nurse", "Offer", "Order", "Other", "Owner", "Panel", "Paper", "Party",
"Peace", "Peter", "Phase", "Phone", "Piece", "Pilot", "Pitch", "Place", "Plane", "Plant",
"Plate", "Point", "Pound", "Power", "Press", "Price", "Pride", "Prize", "Proof", "Queen",
"Radio", "Range", "Ratio", "Reply", "Right", "River", "Round", "Route", "Rugby", "Scale",
"Scene", "Scope", "Score", "Sense", "Shape", "Share", "Sheep", "Sheet", "Shift", "Shirt",
"Shock", "Sight", "Simon", "Skill", "Sleep", "Smile", "Smith", "Smoke", "Sound", "South",
"Space", "Speed", "Spite", "Sport", "Squad", "Staff", "Stage", "Start", "State", "Steam",
"Steel", "Stock", "Stone", "Store", "Study", "Stuff", "Style", "Sugar", "Table", "Taste",
"Terry", "Theme", "Thing", "Title", "Total", "Touch",
"Train", "Treat", "Trust", "Visit", "Voice", "Waste", "Watch", "Worry", "Would", "Write"];

// Randomly select a word from the array
const selectedWord = words[Math.floor(Math.random() * words.length)];

// Convert the word into an array of characters
const wordArray = selectedWord.split("");

// Initialize an array to track correct guesses
const correctGuesses = Array(wordArray.length).fill(false);

// Set the maximum number of incorrect guesses
const maxIncorrectGuesses = 6;
let incorrectGuesses = 0;
let currentGuessIndex = 1; // Initialize the current guess index

// Display the initial number of lives
updateLives();

// Rest of your existing code...

// Rest of your existing code...

// Function to check the user's guess
function checkGuess() {
 const guessInput = document.getElementById("guess-input");
 const guess = guessInput.value.toLowerCase();

 if (guess.length === wordArray.length && !correctGuesses.every((value) => value)) {
     // Check each letter of the guess
     let correctGuess = false;
     for (let i = 0; i < wordArray.length; i++) {
         if (guess[i] === wordArray[i] && !correctGuesses[i]) {
             correctGuesses[i] = true;
             correctGuess = true;
         } else if (!correctGuesses[i] && wordArray.includes(guess[i])) {
             // Handle partially correct letters
             const index = wordArray.indexOf(guess[i]);
             if (index !== -1) {
                 correctGuesses[index] = true;
             }
         }
     }

     // Update the displayed word for the current guess
     updateWordDisplay(currentGuessIndex, guess);

     // Update lives and display feedback
     incorrectGuesses++;
     updateLives();

     // Check for game over
     if (incorrectGuesses === maxIncorrectGuesses) {
         endGame(false);
     } else if (correctGuesses.every((value) => value)) {
         endGame(true);
     }

     // Update the hangman representation
     updateHangman();

     // Move to the next guess
     currentGuessIndex++;

     // Reset the current guess index if all guesses are used
     if (currentGuessIndex > 6) {
         currentGuessIndex = 1;
     }

     // Clear the input field
     guessInput.value = "";
 } else {
     alert("Please enter a valid guess.");
 }
}



// Rest of your existing code...
// Function to update the displayed word for a specific guess
function updateWordDisplay(guessIndex, guess) {
 const wordDisplayContainer = document.getElementById(`word-display-container`);
 const newContainer = document.createElement('div');

 // Add an id to the new container
 newContainer.id = `word-display-${guessIndex}`;

 newContainer.innerHTML = wordArray.map((letter, index) => {
     const isCorrect = correctGuesses[index];
     const isPartialCorrect = guessIndex === currentGuessIndex && guess[index] === letter && !isCorrect;
     const cssClass = isCorrect ? "correct" : (isPartialCorrect ? "partial-correct" : "incorrect");

     return `<span class="${cssClass}">${isCorrect || isPartialCorrect ? letter : "_"}</span>`;
 }).join(" ");

 wordDisplayContainer.appendChild(newContainer);
}



// Rest of your existing code...




// Function to update the displayed number of lives
function updateLives() {
    document.getElementById("lives").innerText = `Lives: ${maxIncorrectGuesses - incorrectGuesses}`;
}

// Function to end the game
function endGame(isWinner) {
    const feedback = document.getElementById("feedback");
    if (isWinner) {
        feedback.innerText = "Congratulations! You guessed the word!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Game over. The correct word was: " + selectedWord;
        feedback.style.color = "red";
    }

    // Disable the input field and button
    document.getElementById("guess-input").disabled = true;
    document.querySelector("button").disabled = true;
}

// Add this variable at the beginning
const hangmanArt = ["  -----\n  |   |\n      |\n      |\n      |\n      |", /* Add more steps as needed */];

// Add this function
function updateHangman() {
    const hangmanContainer = document.getElementById("hangman-container");
    hangmanContainer.textContent = hangmanArt.slice(0, incorrectGuesses + 1).join("\n");
}