
const startButton = document.querySelector(".start-journey");
const introScreen = document.getElementById("intro");
const journeyScreen = document.getElementById("journey");

// Start the journey
startButton.addEventListener("click", () => {
    introScreen.classList.add("hidden");
    journeyScreen.classList.remove("hidden");
    window.scrollTo(0, 0);
});

// Story information for each location
const stories = {
    "Explore Troy": {
        title: "The Beginning: Troy",
        story: "After ten years of fighting in the Trojan War, Odysseus begins his dangerous journey home to Ithaca. His journey will test his leadership, perseverance, and identity.",
        question: "What will Odysseus need most on his journey?",
        choices: [
            "Strength and courage",
            "Intelligence and self-control",
            "Both, depending on the challenge"
        ],
        correctAnswer: "Both, depending on the challenge"
    },

    "Explore the Lotus Eaters": {
        title: "The Lotus Eaters",
        story: "Some of Odysseus's men eat the lotus and lose their desire to return home. Odysseus must bring them back to the ship.",
        question: "What does this challenge reveal?",
        choices: [
            "Temptation can distract people from their goals",
            "The journey home is unimportant"
        ],
        correctAnswer: "Temptation can distract people from their goals"
    },

    "Explore the Cyclops": {
        title: "The Cyclops",
        story: "Odysseus escapes Polyphemus, but he reveals his identity out of pride. Polyphemus then calls on Poseidon to punish him.",
        question: "What should Odysseus have done after escaping?",
        choices: [
            "Reveal his name to claim glory",
            "Stay anonymous to protect his crew"
        ],
        correctAnswer: "Stay anonymous to protect his crew"
    },

    "Explore Aeolus's island": {
        title: "Aeolus's Island",
        story: "Aeolus gives Odysseus a bag containing the winds. While Odysseus sleeps, his crew opens it, believing it contains treasure, and the winds blow them away from home.",
        question: "What does this event reveal?",
        choices: [
            "Suspicion and poor decisions can undo progress",
            "Warnings are never important"
        ],
        correctAnswer: "Suspicion and poor decisions can undo progress"
    },

    "Explore Circe's island(Aeaea)": {
        title: "Circe's Island",
        story: "Circe transforms Odysseus's men into pigs. With help from Hermes, Odysseus confronts her and saves his crew. They stay for a time before continuing their journey.",
        question: "Why does Odysseus eventually continue?",
        choices: [
            "He still wants to return home",
            "He has forgotten about Ithaca"
        ],
        correctAnswer: "He still wants to return home"
    },

    "Explore the Underworld": {
        title: "The Underworld",
        story: "Odysseus visits the Underworld to seek advice from the prophet Tiresias, who warns him about dangers ahead, including the cattle of Helios.",
        question: "Does knowing about danger guarantee that we can avoid it?",
        choices: [
            "Yes, knowledge prevents every mistake",
            "No, people must still make difficult decisions"
        ],
        correctAnswer: "No, people must still make difficult decisions"
    },

    "See Scylla and Charybdis": {
        title: "Scylla and Charybdis",
        story: "Odysseus must steer between Scylla, a monster who seizes sailors, and Charybdis, a deadly whirlpool. He cannot avoid every danger.",
        question: "What does this reveal about leadership?",
        choices: [
            "Leaders sometimes face choices with no perfect solution",
            "Good leaders can always save everyone"
        ],
        correctAnswer: "Leaders sometimes face choices with no perfect solution"
    },

    "Explore the Cattle of the Sun": {
        title: "Cattle of the Sun",
        story: "Despite warnings not to harm Helios's sacred cattle, Odysseus's hungry crew kills and eats them. Their disobedience brings disaster.",
        question: "What does the crew's decision reveal?",
        choices: [
            "Choices can have serious consequences",
            "Warnings never matter"
        ],
        correctAnswer: "Choices can have serious consequences"
    },

    "Explore Calypso's island": {
        title: "Calypso's Island",
        story: "Calypso offers Odysseus immortality if he stays with her. He longs to return to Ithaca and reunite with his family.",
        question: "Why does Odysseus want to return home?",
        choices: [
            "His family and identity matter to him",
            "He believes home will have no challenges"
        ],
        correctAnswer: "His family and identity matter to him"
    },

    "Explore the Phaeacians": {
        title: "The Phaeacians",
        story: "The Phaeacians welcome Odysseus and help him return to Ithaca, showing kindness to a stranger in need.",
        question: "What do their actions reveal about humanity?",
        choices: [
            "Hospitality can help people in need",
            "Strangers never deserve kindness"
        ],
        correctAnswer: "Hospitality can help people in need"
    },

    "Explore Ithaca": {
        title: "Ithaca: The Return",
        story: "Odysseus finally returns home, where suitors have taken over his household. His return tests his identity, loyalty, and ideas of justice.",
        question: "What difficult issue does his return raise?",
        choices: [
            "Whether revenge and justice are always the same",
            "Whether family and home are unimportant"
        ],
        correctAnswer: "Whether revenge and justice are always the same"
    }
};

// Popup elements
const popup = document.getElementById("story-popup");
const popupTitle = document.getElementById("popup-title");
const popupStory = document.getElementById("popup-story");
const popupQuestion = document.getElementById("popup-question");
const popupChoices = document.getElementById("popup-choices");
const closeButton = document.getElementById("close-popup");

// Map elements
const markers = document.querySelectorAll(".map-marker");
markers.forEach((marker, index) => {
    const number = document.createElement("span");

    number.className = "marker-number";
    number.textContent = index + 1;

    marker.prepend(number);
});


const journeyOrder = [
    "Explore Troy",
    "Explore the Lotus Eaters",
    "Explore the Cyclops",
    "Explore Aeolus's island",
    "Explore Circe's island",
    "Explore the Underworld",
    "See Scylla and Charybdis",
    "Explore the Cattle of the Sun",
    "Explore Calypso's island",
    "Explore the Phaeacians",
    "Explore Ithaca"
];

let completedLocations = [];
let currentLocation = "";

// Lock every location except Troy
markers.forEach(marker => {
    const location = marker.getAttribute("aria-label");

    if (location !== journeyOrder[0]) {
        marker.classList.add("locked");
    }
});


const mapHeading = document.querySelector(".map-heading");
const mapHint = document.querySelector(".map-hint");

// Hide the map elements while a popup is open
function hideMapElements() {
    markers.forEach(marker => marker.classList.add("hidden"));
    mapHeading.classList.add("hidden");
    mapHint.classList.add("hidden");
}

// Restore the map elements
function showMapElements() {
    markers.forEach(marker => marker.classList.remove("hidden"));
    mapHeading.classList.remove("hidden");
    mapHint.classList.remove("hidden");
}

// Display the answer choices
function showChoices(data) {
    popupQuestion.textContent = data.question;
    popupChoices.replaceChildren();

    data.choices.forEach(choice => {
        const button = document.createElement("button");
        button.className = "popup-choice";
        button.textContent = choice;

        
        
      
        
    button.addEventListener("click", () => {
        if (choice === data.correctAnswer) {
            button.textContent = "✓ " + choice + " — Correct!";
            button.style.backgroundColor = "#6b9e68";

            // Show the reflection after a short pause
            setTimeout(() => {
                showFeedback(data);
            }, 800);

        } else {
            button.textContent = "✗ " + choice + " — Try again!";
            button.style.backgroundColor = "#bd6960";
        }
    });

  
        popupChoices.appendChild(button);
    });
}

// Display reflection feedback
function showFeedback(data) {
    popupQuestion.textContent = "Think about the story";
    popupChoices.replaceChildren();

    const feedback = document.createElement("p");
    feedback.textContent =
        "Consider how this choice connects to the themes of The Odyssey. What might the consequences reveal about human nature?";
    popupChoices.appendChild(feedback);

    const backButton = document.createElement("button");
    backButton.className = "popup-choice";
    backButton.textContent = "Back to the choices";

    backButton.addEventListener("click", () => {
        showChoices(data);
    });

    popupChoices.appendChild(backButton);
}

// Open a location's popup
markers.forEach(marker => {
    marker.addEventListener("click", () => {
        const location = marker.getAttribute("aria-label");
        const data = stories[location];

        if (!data) {
            console.warn("No story found for:", location);
            return;
        }
        currentLocation = location;
        
        popupTitle.textContent = data.title;
        popupStory.textContent = data.story;

        showChoices(data);

        popup.classList.remove("hidden");
        hideMapElements();
    });
});

// Close the popup and restore the map

closeButton.addEventListener("click", () => {
    popup.classList.add("hidden");
    showMapElements();

    if (!completedLocations.includes(currentLocation)) {
        completedLocations.push(currentLocation);
    }

    const currentIndex = journeyOrder.indexOf(currentLocation);
    const nextLocation = journeyOrder[currentIndex + 1];

    if (nextLocation) {
        markers.forEach(marker => {
            if (marker.getAttribute("aria-label") === nextLocation) {
                marker.classList.remove("locked");
            }
        });
    }
});

// Reveal the route
document.querySelectorAll(".route-segment").forEach(segment => {
    segment.classList.add("revealed");
});
