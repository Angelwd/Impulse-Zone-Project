const storyElement = document.getElementById('story');
const optionsElement = document.getElementById('options');

// Initial game state
let currentScene = 1;

// Define your game scenes
const scenes = {
    1: {
        story: "You find yourself standing in front of a mysterious cave. What will you do?",
        options: [
            { text: "Enter the cave", nextScene: 2 },
            { text: "Walk away", nextScene: 3 }
        ]
    },
    2: {
        story: "As you enter the cave, you see two tunnels. Which one will you choose?",
        options: [
            { text: "Go left", nextScene: 4 },
            { text: "Go right", nextScene: 5 }
        ]
    },
    3: {
        story: "You decide not to enter the cave and continue your journey.",
        options: [
            { text: "Start over", nextScene: 1 }
        ]
    },
    4: {
        story: "You encounter a friendly dragon in the left tunnel. What will you do?",
        options: [
            { text: "Pet the dragon", nextScene: 6 },
            { text: "Run away", nextScene: 7 }
        ]
    },
    5: {
        story: "The right tunnel leads to a treasure room. Congratulations, you've found the treasure!",
        options: [
            { text: "Start over", nextScene: 1 }
        ]
    },
    6: {
        story: "The dragon enjoys your company and leads you to a hidden treasure room.",
        options: [
            { text: "Claim the treasure", nextScene: 8 }
        ]
    },
    7: {
        story: "The dragon gets upset and breathes fire. Unfortunately, it's not a friendly dragon.",
        options: [
            { text: "Start over", nextScene: 1 }
        ]
    },
    8: {
        story: "Congratulations! You've successfully completed the adventure and claimed the treasure.",
        options: [
            { text: "Play again", nextScene: 1 }
        ]
    }
};

// Function to update the game state
function updateGame() {
    const scene = scenes[currentScene];

    // Update story text
    storyElement.textContent = scene.story;

    // Clear existing options
    optionsElement.innerHTML = '';

    // Add new options
    scene.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.addEventListener('click', () => goToScene(option.nextScene));
        optionsElement.appendChild(button);
    });
}

// Function to navigate to a new scene
function goToScene(sceneNumber) {
    currentScene = sceneNumber;
    updateGame();
}

// Start the game
updateGame();



// what?
