const storyElement = document.getElementById('story');
const optionsElement = document.getElementById('options');

// Initial game state
let currentScene = 1;

//Declare an empty variable for the player name
// let playerName = "";


// function getPlayerName() {
//     playerName = prompt("Enter your name:");
//     if (!playerName) {
//         playerName = "Player"; // Default name if the player doesn't enter anything
//     }
// }

// getPlayerName()


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
        story: "The year is 2228. You are in a deep sleep. You hear a distant 'Meow!' You decide to...",
        options: [
            { text: "Wake Up!", nextScene: 3 },
            { text: "Keep sleeping", nextScene: 5 } //game over
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
            { text: "Shut the door and go back to sleep!", nextScene: 5 }, // game over
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
            { text: "You let it leave", nextScene: 5 }, //game over
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
        story: "Citizen #AC1089 you are under arrest. Comply or force will be used.",
        options: [
            { text: "Put your hands up", nextScene: 15 },
            { text: "You start running towards the balcony!", nextScene: 14 },
            { text: "Fight the detective", nextScene: 5 }, // game over
        ]
    },
    14: {
        background: "images/catwaiting.png",
        story: "We need to jump, now! Put these goggles on. You put the goggles on and...",
        options: [
            { text: "Hesitate", nextScene: 15 },
            { text: "Jump off the balcony", nextScene: 16 }
        ]
    },
    15: {
        background: "images/scene1.jpg",
        story: "You feel a thud in your head, everything goes black.",
        options: [
            { text: "Open your eyes", nextScene: 17 },
            { text: "Keep your eyes closed. It was a dream anyways.", nextScene: 5 }  //game over
        ]
    },
    16: {
        background: "images/reference25.png",
        story: "The cat hangs on to you, you start to panic as you see the ground getting closer...",
        options: [
            { text: "Scream as loud as you can", nextScene: 16 },
            { text: "Close your eyes and accept your fate", nextScene: 16 }
        ]
    },
    17: {
        background: "images/reference37.jpg",
        story: "You wake up disoriented in a police car.",
        options: [
            { text: "Try to run", nextScene: 15 },
            { text: "Stay silent", nextScene: 18 }
        ]
    },
    18: {
        background: "images/reference40.jpg",
        story: "They take you to a police station. You notice the cat from your apartment staring at you from an alley.",
        options: [
            { text: "You stay silent and let the detective take you inside", nextScene: 19 },
            { text: "Make a run for the cat", nextScene: 16 }
        ]
    },
    19: {
        background: "images/reference30.png",
        story: "The room is cold. The detective seems to ignore you while going through some documents...",
        options: [
            { text: "Please, you got the wrong person!", nextScene: 20 },
            { text: "There was a talking cat", nextScene: 27 } //vent scene
        ]
    },
    20: {
        background: "images/reference30.png",
        story: "The detective is quiet for some minutes. Then all of a sudden asks for the reference code.",
        options: [
            { text: "I, I don't know", nextScene: 21 },
            { text: "Code? The cat...", nextScene: 27 },//vent scene
            { text: "You don't answer", nextScene: 21 },
        ]
    },
    21: {
        background: "images/reference30.png",
        story: "I need you to answer the question, it's for your own good.",
        options: [
            { text: "It's 1828", nextScene: 22 },
            { text: "There was a talking cat", nextScene: 27 } //vent scene
        ]
    },
    22: {
        background: "images/reference30.png",
        story: "The detective goes silent, it seems to be confirming something.",
        options: [
            { text: "Stay silent", nextScene: 23 },
            { text: "There was a talking cat", nextScene: 27 } //vent scene
        ]
    },
    23: {
        background: "images/reference30.png",
        story: "So you admit to stealing security codes from BioSynth Corporation?",
        options: [
            { text: "What? No! I just work there.", nextScene: 24 },
            { text: "I, I didn't know. I just downloaded some files...", nextScene: 25 }
        ]
    },
    24: {
        background: "images/reference30.png",
        story: "Don't play dumb. We have security footage.",
        options: [
            { text: "I... ok", nextScene: 25 },
            // { text: "There was a talking cat", nextScene: 16 }
        ]
    },
    25: {
        background: "images/reference30.png",
        story: "The detective stares at you...",
        options: [
            { text: "I took some files home, but I didn't think it was that serious.", nextScene: 26 },
            // { text: "There was a talking cat", nextScene: 16 }
        ]
    },
    26: {
        background: "images/reference30.png",
        story: "Nevertheless, I need to take you keep you in here for further questioning.",
        options: [
            { text: "Ok...", nextScene: 5 }, // game over
            { text: "There was a talking cat", nextScene: 27 } //vent scene
        ]
    },
    27: {
        background: "images/reference30.png",
        story: "A talking cat huh? Was this cat wearing goggles by any chance?",
        options: [
            { text: "Yes! ", nextScene: 28 },
            { text: "I'm not sure", nextScene: 26 }
        ]
    },
    28: {
        background: "images/reference30.png",
        story: "The detective seems to be communicating with someone. He leaves the room and tells you to stand by.",
        options: [
            { text: "...", nextScene: 29 },
            // { text: "There was a talking cat", nextScene: 16 }
        ]
    },
    29: {
        background: "images/reference56.png",
        story: "You hear a faint meow. It's coming from the air vent",
        options: [
            { text: "You again?!", nextScene: 30 },
            { text: "Am I dreaming?", nextScene: 2 }
        ]
    },
    30: {
        background: "images/reference51.png",
        story: "Why did you answer the door? I told you we had to go.",
        options: [
            { text: "I, well I still can't believe I'm having a conversation with a cat", nextScene: 31 },
            { text: "...", nextScene: 31 }
        ]
    },
    31: {
        background: "images/reference51.png",
        story: "We really need to go. The cop should be back at any minute. ",
        options: [
            { text: "Trust the cat and climb the vent.", nextScene: 32 },
            { text: "Stay in the interrogation room", nextScene: 5 }
        ]
    },
    32: {
        background: "images/reference58.png",
        story: "The two of you make your way through the air vents. The cat seems to know the way.",
        options: [
            { text: "I need answers, I need a lot of answers.", nextScene: 33 },
            // { text: "There was a talking cat", nextScene: 16 }
        ]
    },
    33: {
        background: "images/reference58.png",
        story: "You will get all the answers but right now we need to get out of here.",
        options: [
            { text: "...", nextScene: 34 },
            // { text: "There was a talking cat", nextScene: 16 }
        ]
    },
    34: {
        background: "images/reference59.jpg",
        story: "The two of you make it out of the vents. You find yourself in an alley.",
        options: [
            { text: "Follow the cat", nextScene: 35 },
            { text: "You're free! Run away.", nextScene: 5 }
        ]
    },
    35: {
        background: "images/reference59.jpg",
        story: "You follow the cat through several blocks. Until you reach a door at the end of an alley.",
        options: [
            { text: "...", nextScene: 36 },
            // { text: "There was a talking cat", nextScene: 16 }
        ]
    },
    36: {
        background: "images/reference64.jpg",
        story: "The door seems to unlock as soon as the cat gets close to it.",
        options: [
            { text: "Go inside", nextScene: 37 },
            { text: "Walk away", nextScene: 5 }
        ]
    },
    37: {
        background: "images/scene1.jpg",
        story: "It's pitch black. You start having second thoughts but after a couple of steps, you start seeing some light.",
        options: [
            { text: "Go further", nextScene: 38 },
            { text: "Go back", nextScene: 5 }
        ]
    },
    38: {
        background: "images/reference36.jpg",
        story: "You have reached a room that your mind can't quite comprehend. There's a meeting going on, a cat meeting.",
        options: [
            { text: "Say nothing", nextScene: 39 },
            { text: "This is not real", nextScene: 2 }
        ]
    },
    39: {
        background: "images/reference36.jpg",
        story: "They all stop talking and turn to you with interest.",
        options: [
            { text: "Huh, hello?", nextScene: 40 },
            // { text: "Walk away", nextScene: 5 }
        ]
    },
    40: {
        background: "images/reference36.jpg",
        story: `An orange cat that seems to be the leader says welcome ${playerName}. We have been expecting you.`,
        options: [
            { text: "Expecting me?", nextScene: 41 },
            // { text: "Walk away", nextScene: 5 }
        ]
    },
    41: {
        background: "images/reference68.png",
        story: "Yes. we know this is hard for you to understand at the moment. We will try to answer all your questions but we don't have much time.",
        options: [
            { text: "I have so many questions!", nextScene: 43 },
            { text: "Who are you?", nextScene: 42 }
        ]
    },
    42: {
        background: "images/reference68.png",
        story: "My name is Alpha. The one that escorted you here is Psi. Pleasure to make your acquaintance. You will know everyone else in due time.",
        options: [
            { text: "I have so many questions!", nextScene: 43 },
        ]
    },
    43: {
        background: "images/reference68.png",
        story: "I'll try to answer as much as I can but we don't have much time.",
        options: [
            { text: "You can talk?", nextScene: 44 },
            { text: "Why me?", nextScene: 45 },
            { text: "What is going on?", nextScene: 46 },
            { text: "Who are you?", nextScene: 47 },
            { text: "I'm ready", nextScene: 48 } //next scene
        ]
    },
    44: {
        background: "images/reference68.png",
        story: "Alpha chuckles, his eyes gleaming with a mischievous glint. Well, my friend, let's just say I've got a few high-tech upgrades courtesy of some experimental tinkering. BioSynth Corporation didn't just stop at creating lab-made cats, you know. They gave me the gift of gab and a knack for decoding the city's secrets. Now, enough about me. We've got a corporation to take down, and time's ticking. Ready for the next move?",
        options: [
            { text: "I have so many questions", nextScene: 43 },
            { text: "I'm ready", nextScene: 48 },//next scene
        ]
    },
    45: {
        background: "images/reference68.png",
        story: "Your skills,your unique talents, and the data you posess from their server are the missing pieces to this puzzle. We're up against a behemoth, and the more allies we gather, the better our chances. Together, we can bring down BioSynth Corporation and expose their dark machinations. So, what do you say?",
        options: [
            { text: "I have so many questions", nextScene: 43 },
            { text: "I'm ready", nextScene: 48 },//next scene
        ]
    },
    46: {
        background: "images/reference68.png",
        story: "BioSynth Corporation, the puppet master behind the scenes, has been conducting experiments that would make your hair stand on end. Lab-made cats, like our friends here, enhanced and manipulated for purposes we're only beginning to unravel.",
        options: [
            { text: "I have so many questions", nextScene: 43 },
            { text: "I'm ready", nextScene: 48 },//next scene
        ]
    },
    47: {
        background: "images/reference68.png",
        story: "My lab name is Alpha, I'm a genetically engineered cat made in a lab by BioSynth Corporation. They have been experimenting on animals for decades but finally got a breakthrough with cats sometime last year. I cannot begin to tell you the horros that are happening in there. I was the first one, there were more, way more. The ones you see here are part of the lucky few I was able to rescue. They will continue to make atrocities until someone stops them. This is where you come in. ",
        options: [
            { text: "I have so many questions", nextScene: 43 },
            { text: "I'm ready", nextScene: 48 } //next scene
        ]
    },
    48: {
        background: "images/reference68.png",
        story: "I knew we could count on you. Psi will go over the details. Don't fail us. We only have one shot at this",
        options: [
            { text: "Let's get started", nextScene: 49 },
            // { text: "Walk away", nextScene: 5 }
        ]
    },
    49: {
        background: "images/scene1.jpg",
        story: "You are being briefed by cats on a mission to take down an evil corporation, just a few hours ago you were sleeping at your apartment. You just realized that life comes at you hard. ",
        options: [
            { text: "...", nextScene: 50 },
            // { text: "Walk away", nextScene: 5 }
        ]
    },
    51: {
        background: "images/reference64.png",
        story: "The door seems to unlock as soon as the cat gets close to it.",
        options: [
            { text: "Go inside", nextScene: 37 },
            { text: "Walk away", nextScene: 5 }
        ]
    },
    52: {
        background: "images/reference64.png",
        story: "The door seems to unlock as soon as the cat gets close to it.",
        options: [
            { text: "Go inside", nextScene: 37 },
            { text: "Walk away", nextScene: 5 }
        ]
    },
    53: {
        background: "images/reference64.png",
        story: "The door seems to unlock as soon as the cat gets close to it.",
        options: [
            { text: "Go inside", nextScene: 37 },
            { text: "Walk away", nextScene: 5 }
        ]
    },
    54: {
        background: "images/reference64.png",
        story: "The door seems to unlock as soon as the cat gets close to it.",
        options: [
            { text: "Go inside", nextScene: 37 },
            { text: "Walk away", nextScene: 5 }
        ]
    },
    55: {
        background: "images/reference64.png",
        story: "The door seems to unlock as soon as the cat gets close to it.",
        options: [
            { text: "Go inside", nextScene: 37 },
            { text: "Walk away", nextScene: 5 }
        ]
    },
    56: {
        background: "images/reference64.png",
        story: "The door seems to unlock as soon as the cat gets close to it.",
        options: [
            { text: "Go inside", nextScene: 37 },
            { text: "Walk away", nextScene: 5 }
        ]
    },
    57: {
        background: "images/reference64.png",
        story: "The door seems to unlock as soon as the cat gets close to it.",
        options: [
            { text: "Go inside", nextScene: 37 },
            { text: "Walk away", nextScene: 5 }
        ]
    },
    58: {
        background: "images/reference64.png",
        story: "The door seems to unlock as soon as the cat gets close to it.",
        options: [
            { text: "Go inside", nextScene: 37 },
            { text: "Walk away", nextScene: 5 }
        ]
    },
    59: {
        background: "images/reference64.png",
        story: "The door seems to unlock as soon as the cat gets close to it.",
        options: [
            { text: "Go inside", nextScene: 37 },
            { text: "Walk away", nextScene: 5 }
        ]
    },
    60: {
        background: "images/reference64.png",
        story: "The door seems to unlock as soon as the cat gets close to it.",
        options: [
            { text: "Go inside", nextScene: 37 },
            { text: "Walk away", nextScene: 5 }
        ]
    },
    61: {
        background: "images/reference64.png",
        story: "The door seems to unlock as soon as the cat gets close to it.",
        options: [
            { text: "Go inside", nextScene: 37 },
            { text: "Walk away", nextScene: 5 }
        ]
    },
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









