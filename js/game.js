const storyElement = document.getElementById('story');
const optionsElement = document.getElementById('options');

// Initial game state
let currentScene = 1;

// Define the game scenes
const scenes = {
    1: {
        background: "images/ImpulseZone.png",
        // story: "You are in a deep sleep. You hear a distant 'Meow!' You decide to...",
        options: [
            { text: "Start Game", nextScene: 2 },
            // { text: "Stay asleep", nextScene: 3 }
        ]
    },
    2: {
        background: "images/scene1.jpg",
        story: "You are in a deep sleep. You hear a distant 'Meow!' You decide to...",
        options: [
            { text: "Wake Up!", nextScene: 3 },
            { text: "Keep sleeping", nextScene: 5 }
        ]
    },
    3: {
        background: "images/reference22.png",
        story: "You scan your apartment, the 'Meow' grows louder and seems to come from the door...",
        options: [
            { text: "Answer the door", nextScene: 4 },
            { text: "Walk to your balcony", nextScene: 6 }
        ]
    },
    4: {
        background: "images/reference16.jpg",
        story: "You must think you're crazy, but you see a cat looking at you with interest, the feline is wearing some peculiar goggles...",
        options: [
            { text: "Shut the door and go back to sleep!", nextScene: 5 },
            { text: "Ehh... Hi?", nextScene: 7 },
            
        ]
    },
    5: {
        background: "images/gameover.png",
        story: "I guess you don't know anything about adventures...",
        options: [
            { text: "Start over", nextScene: 1 }
        ]
    },
    6: {
        background: "images/reference4.jpg",
        story: "You hear distant sirens, your floor is high enough to have a clear view of the city.",
        options: [
            { text: "Go back inside", nextScene: 3 }
        ]
    },
    7: {
        background: "images/reference16.jpg",
        story: "Thet cat asks if he can come in for a glass of milk, you are definitely dreaming but yet... ",
        options: [
            { text: "You close the door and stop imagining things!", nextScene: 3},
            { text: "You invite him inside", nextScene: 8 },
            
        ]
    },
    8: {
        background: "images/reference21.png",
        story: "The cat complains about the milk not being whole milk. It scans you with its big goggles and asks for the reference code",
        options: [
            { text: "You stare at the cat...", nextScene: 9 }
        ]
    },
    9: {
        background: "images/reference21.png",
        story: "You have no idea of what's going on but you blurt out:",
        options: [
            { text: "1828", nextScene: 11 },
            { text: "1771", nextScene: 10 }
        ]
    },
    10: {
        background: "images/reference21.png",
        story: "The cat lets out a small 'hmm', you can sense frustration. I says 'You are not the chosen one', as it starts to leave. ",
        options: [
            { text: "You let it leave", nextScene: 5 },
            { text: "Wait! It's 1828", nextScene: 11 }
        ]
    },
    11: {
        background: "images/reference21.png",
        story: "The cat nods and pushes a blue button on a small electronic device attached to its neck",
        options: [
            { text: "You stare,amused", nextScene: 12 },
            // { text: "1771", nextScene: 6 }
        ]
    },
    12: {
        background: "images/reference21.png",
        story: "You hear loud banging on the door, the cat runs towards the balcony and says 'Hurry, we have no time!'",
        options: [
            { text: "Answer the door", nextScene: 13 },
            { text: "Follow the talking cat", nextScene: 14 }
        ]
    },
    13: {
        background: "images/detective.png",
        story: "Stand down! Must execute!",
        options: [
            { text: "You freeze without moving an inch", nextScene: 5 },
            { text: "You start running towards the balcony!", nextScene: 14 }
        ]
    },
    14: {
        background: "images/catwaiting.png",
        story: "We need to jump, now! (the cat yells). You hear something getting closer...",
        options: [
            { text: "Hesitate", nextScene: 5 },
            { text: "Jump off the balcony", nextScene: 6 }
        ]
    },
    15: {
        background: "images/reference21.png",
        story: "You have no idea of what's going on but you blurt out:",
        options: [
            { text: "1828", nextScene: 6 },
            { text: "1771", nextScene: 6 }
        ]
    }
};

// Function to update the game state
function updateGame() {
    const scene = scenes[currentScene];

    // Set the art for the scene
    document.body.style.backgroundImage = `url('${scene.background}')`



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




