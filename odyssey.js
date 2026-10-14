
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
        type: "quiz",
        title: "The Beginning: Troy",
        story: "After ten years of fighting in the Trojan War, Odysseus begins his dangerous journey home to Ithaca. His journey will test his leadership, perseverance, and identity.",
        question: "What will Odysseus need most on his journey?",
        choices: [
            "Strength and courage",
            "Intelligence and self-control",
            "Both, depending on the challenge"
        ],
        correctAnswer: "Both, depending on the challenge",
        reflection:"Along the way, Odysseus will face challenges that will require him to use both his physical and mental prowess. (yes I know that word). By using these abilities, he'll be able to overcome obstacles in his way with the gods' help and interference. This reveals that human nature and life are complex, showing that every situation requires something different to overcome."

    },

    "Explore the Lotus Eaters": {
        type: "quiz",
        title: "The Lotus Eaters",
        story: "Some of Odysseus's men eat the lotus and lose their desire to return home. Odysseus drags them back— ignoring their pleas to stay, ties them down, and orders to leave the island.",
        question: "What does this challenge reveal?",
        choices: [
            "Temptation can distract people from their goals",
            "The journey home is unimportant"
        ],
        correctAnswer: "Temptation can distract people from their goals",
        reflection:"This situation shows that as humans, we can be easily distracted and lose track of what's important and the importance of keeping our goals in mind."
    },

    "Explore the Cyclops": {
        type: "quiz",
        title: "The Cyclops",
        story: "Odysseus escapes Polyphemus, but he reveals his identity out of pride. Polyphemus then calls on Poseidon to punish him.",
        question: "What should Odysseus have done after escaping?",
        choices: [
            "Reveal his name to claim glory",
            "Should have kept his mouth shut and stayed anonymous"
        ],
        correctAnswer: "Should have kept his mouth shut and stayed anonymous",
        reflection:"This shows that pride can be a dangerous thing, and that our decision to show off can have consequences for not only ourselves but for the ones around us. As Odysseus and his crew progressed, Poseidon sent relentless storms to blow them off course to delayed their return."

    },

    "Explore Aeolus's island": {
        type: "quiz",
        title: "Aeolus's Island",
        story: "Aeolus gives Odysseus a bag containing the winds. Odysseus warns everyone to not open the bags and he then goes to sleep. While Odysseus sleeps, Eurylochus and the others decided to open it against his wish, believing it contains treasure, and the winds blow them away from home.",
        question: "What does this event reveal?",
        choices: [
            "Trust is important",
            "Warnings are never important"
        ],
        correctAnswer: "Trust is important",
        reflection:"This emphasizes the importance of trust and communication within a team and how curiosity isn't always a good thing like the saying goes: 'Curiosity killed the cat.'Even though we may be curious and have good intentions, we must be careful and think about the consequences."
    },

    "Explore Circe's island(Aeaea)": {
        type: "reflection",
        title: "Circe's Island",
        story: "Circe transforms Odysseus's men into pigs. With help from Hermes, Odysseus confronts her and saves his crew. They stay for a time before continuing their journey.",
        question: "Why does Odysseus eventually continue?",
        choices: [
            "He still wants to return home",
            "He has forgotten about Ithaca"
        ],
        correctAnswer: "He still wants to return home",
        reflection:"Odysseus's decision to leave Circe's island shows that he values his goal more than his comfort. Although he stayed longer to help his men and ended up remaining there for a whole year, he still wanted to reach home. Sometimes, we must make sacrifices and leave our comfort behind to achieve our goals."
    },
    "Explore the Underworld": {
        type:"quiz",
        title: "The Underworld",
        story: "With the advice of Circe,Odysseus visits the Underworld to seek advice from the prophet Tiresias, who warns him about dangers ahead, including the cattle of Helios.",
        question: "Does knowing about danger guarantee that we can avoid it?",
        choices: [
            "Yes, knowledge prevents every mistake",
            "No, it doesn't"
        ],
        correctAnswer: "No, it doesn't",
        reflection:"Knowing about danger doesn't guarantee that things will go right if we do the right things. Life is unpredictable and it isn't expected to go along with our plan, so the best thing is to prepare for the worst and hope for the best."
    },

    "See Scylla and Charybdis": {
        type: "reflection",
        title: "Scylla and Charybdis",
        story: "Odysseus must steer between Scylla, a monster who seizes sailors, and Charybdis, a deadly whirlpool. He cannot avoid every danger and he ends up losing some of his men.",
        question: "What does this reveal about leadership?",
        choices: [
            "Leaders sometimes face choices with no perfect solution",
            "Good leaders can always save everyone"
        ],
        correctAnswer: "Leaders sometimes face choices with no perfect solution",
        reflection:"To be a leader, you have to have be able to make decisions that may not be the best for everyone and that's okay. Are you even a leader if you make everyone happy all the time?"
    },

    "Explore the Cattle of the Sun(Thrinacia)": {
        type: "reflection",
        title: "Cattle of the Sun",
        story: "Despite warnings not to harm Helios's sacred cattle, Odysseus's hungry crew kills and eats them. Their disobedience brings disaster.",
        question: "What does the crew's decision reveal?",
        choices: [
            "Choices can have serious consequences",
            "Warnings never matter"
        ],
        correctAnswer: "Choices can have serious consequences",
        reflection:"Despite being warned by Odysseus, the crew still decided to eat the cattle, which led to their eventual demise at the hands of Zeus. Through Odysseus, we can once again recognize the unpredictability of life and human behavior, while the crew's actions emphasize the importance of respecting boundaries."

    },

    "Explore Calypso's island(Ogygia)": {
        type:"quiz",
        title: "Calypso's Island",
        story: "Calypso offers Odysseus immortality if he stays with her. He longs to return to Ithaca and reunite with his family.",
        question: "Why does Odysseus want to return home?",
        choices: [
            "His family and identity matter to him",
            "He believes home will have no challenges"
        ],
        correctAnswer: "His family and identity matter to him",
        reflection:"Odysseus has a strong sense and identity throughout his journey, he's always longing for his home and his family. All of us have that sense of belonging to a place or having the special someone. This reveals that these two things are important to us and that they can help us stay grounded when in times of uncertainty."
    },

    "Explore the Phaeacians(Schria)": {
        type: "quiz",
        title: "The Phaeacians",
        story: "The Phaeacians welcome Odysseus and help him return to Ithaca, showing kindness to a stranger in need.",
        question: "What do their actions reveal about humanity?",
        choices: [
            "Hospitality can help people in need",
            "Strangers never deserve kindness"
        ],
        correctAnswer: "Hospitality can help people in need",
        reflection:"The Phaeacians show him kindness and hospitality, helping him return home per tradition, but the moral still stands: treating strangers with kindness can be really helpful because you never know what someone's going through. "
    },  

    "Explore Ithaca": {
        type: "quiz",
        title: "Ithaca: The Return",
        story: "Odysseus finally returns home, where suitors have taken over his household. His return tests his identity, loyalty, and ideas of justice.",
        question: "What difficult issue does his return raise?",
        choices: [
            "Whether revenge and justice are always the same",
            "Whether family and home are unimportant"
        ],
        correctAnswer: "Whether revenge and justice are always the same",
        reflection:"Justice and revenge can seem similar, but I believe the difference lies within the intention behind our actions. Justice means holding people accountable for their actions, like the suitors faced. However, justice can become revenge when it shifts from holding someone accountable to deliberately hurting them out of anger. This makes me questions whether Odysseus was seeking justice, revenge, or both."
       
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
    "Explore Circe's island(Aeaea)",
    "Explore the Underworld",
    "See Scylla and Charybdis",
    "Explore the Cattle of the Sun(Thrinacia)",
    "Explore Calypso's island(Ogygia)",
    "Explore the Phaeacians(Schria)",
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


    


function showStory(data) {
    popupQuestion.textContent = "Reflection:";
    popupChoices.replaceChildren();

    const reflection = document.createElement("p");
    reflection.textContent = data.reflection;
    popupChoices.appendChild(reflection);
}


// Display reflection feedback
function showFeedback(data) {
    popupQuestion.textContent = "My Reflection:";
    popupChoices.replaceChildren();

    const feedback = document.createElement("p");
    feedback.textContent =
       data.reflection;
    popupChoices.appendChild(feedback);

    const backButton = document.createElement("button");
    backButton.className = "popup-choice";
    backButton.textContent = "Back to the choices";

    backButton.addEventListener("click", () => {
        showChoices(data);
    });

    popupChoices.appendChild(backButton);

    if (data.title === "Ithaca: The Return") {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Continue to Conclusion →";
    nextButton.className = "next-button";

    nextButton.addEventListener("click", () => {
        window.location.href = "conclusion.html";
    });

    popupChoices.appendChild(nextButton);
}
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

    if (data.type === "reflection") {
        showStory(data);
    } else {
        showChoices(data);
    }

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
