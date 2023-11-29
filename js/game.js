const storyElement = document.getElementById('story');
const optionsElement = document.getElementById('options');
window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.1;
    audio.play();

  });


// Initial game state
let currentScene = 1;

// Declare an empty variable for the player name
let playerName = "";

const inputDiv = document.getElementById("input-div")
const nameInput = document.getElementById("player-name")
const nameButton = document.getElementById("player-button")


let scenes = null
document.body.style.backgroundImage = "url(images/ImpulseZone.png)"

nameButton.addEventListener('click', () => {
    console.log("Name Input ===>", nameInput.value)
    playerName = `${nameInput.value}`
    if (!playerName) {
        playerName = "Stranger"; // Default name if the player doesn't enter anything
    }
    setTimeout(() => {
        inputDiv.remove()
        startGame()
    }, 100)

})

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
function startGame() {
    scenes = {
        1: {
            background: "./images/ImpulseZone.png",
            // story: "You are in a deep sleep. You hear a distant 'Meow!' You decide to...",
            options: [
                { text: "Start Game", nextScene: 2 },
                // { text: "Stay asleep", nextScene: 3 }
            ]
        },
        2: {
            background: "./images/scene1.jpg",
            story: "The year is 2228. You are in a deep sleep. You hear a distant 'Meow!' You decide to...",
            options: [
                { text: "Wake Up!", nextScene: 3 },
                { text: "Keep sleeping", nextScene: 5 } //game over
            ]
        },
        3: {
            background: "./images/reference22.png",
            story: "You scan your apartment, the 'Meow' grows louder and seems to come from the door...",
            options: [
                { text: "Answer the door", nextScene: 4 },
                { text: "Walk to your balcony", nextScene: 6 }
            ],
            countdownDuration: 10, // Set the countdown duration for this scene in seconds (10 seconds in this example)
        stopCountdownOnTransition: true,
        },
        4: {
            background: "./images/reference16.jpg",
            story: "You must think you're crazy, but you see a cat looking at you with interest, the feline is wearing some peculiar goggles...",
            options: [
                { text: "Shut the door and go back to sleep!", nextScene: 5 }, // game over
                { text: "Ehh... Hi?", nextScene: 7 },
                
            ]
        },
        5: {
            background: "./images/gameover.png",
            story: `What were you thinking ${playerName}?`,
            options: [
                { text: "Start over", nextScene: 1 }
            ]
        },
        6: {
            background: "./images/reference4.jpg",
            story: "You hear distant sirens, your floor is high enough to have a clear view of the city.",
            options: [
                { text: "Go back inside", nextScene: 3 }
            ]
        },
        7: {
            background: "./images/reference16.jpg",
            story: `Greetings ${playerName}, can come in for a glass of milk? You are definitely dreaming but yet... `,
            options: [
                { text: "You close the door and stop imagining things!", nextScene: 3},
                { text: "You invite him inside", nextScene: 8 },
                
            ]
        },
        8: {
            background: "./images/reference21.png",
            story: "The cat complains about the milk not being whole milk. It scans you with its big goggles. Have you heard of BioZynth Corporation?",
            options: [
                { text: "You stare at the cat...", nextScene: 9 }
            ]
        },
        9: {
            background: "./images/reference21.png",
            story: "You have no idea of what's going on but you blurt out:",
            options: [
                { text: "Sure", nextScene: 11 },
                { text: "No", nextScene: 10 }
            ]
        },
        10: {
            background: "./images/reference21.png",
            story: "The cat lets out a small 'hmm', you can sense frustration. I says 'You are not the chosen one', as it starts to leave. ",
            options: [
                { text: "You let it leave", nextScene: 5 }, //game over
                { text: "Wait! I have heard of BioZynth", nextScene: 11 }
            ]
        },
        11: {
            background: "./images/reference21.png",
            story: "The cat nods and pushes a blue button on a small electronic device attached to its neck",
            options: [
                { text: "You stare,amused", nextScene: 12 },
                // { text: "1771", nextScene: 6 }
            ]
        },
        12: {
            background: "./images/reference21.png",
            story: "You hear loud banging on the door, the cat runs towards the balcony and says 'Hurry, we have no time!'",
            options: [
                { text: "Answer the door", nextScene: 13 },
                { text: "Follow the talking cat", nextScene: 14 }
            ]
        },
        13: {
            background: "./images/reference68.jpg",
            story: `${playerName} you are under arrest. Comply or force will be used.`,
            options: [
                { text: "Put your hands up", nextScene: 15 },
                { text: "You start running towards the balcony!", nextScene: 14 },
                { text: "Fight the detective", nextScene: 5 }, // game over
            ]
        },
        14: {
            background: "./images/catwaiting.png",
            story: "We need to jump, now! Put these goggles on. You put the goggles on and...",
            options: [
                { text: "Hesitate", nextScene: 15 },
                { text: "Jump off the balcony", nextScene: 16 }
            ]
        },
        15: { //This scene will take you to the police station
            background: "./images/scene1.jpg",
            story: "You feel a thud in your head, everything goes black.",
            options: [
                { text: "Open your eyes", nextScene: 17 },
                { text: "Keep your eyes closed. It was a dream anyways.", nextScene: 5 }  //game over
            ]
        },
        16: {
            background: "./images/reference25.png",
            story: "The cat hangs on to you, you start to panic as you see the ground getting closer...",
            options: [
                { text: "Scream as loud as you can", nextScene: 101 },
                { text: "Close your eyes and accept your fate", nextScene: 103 }
            ]
        },
        101: {
            background: "./images/landing.png",
            story: "You land swiftly. As if you were floating.",
            options: [
                { text: "Wh...What?", nextScene: 102 },
                // { text: "Walk away", nextScene: 5 }
            ]
        },
        102: {
            background: "./images/reference59.jpg",
            story: "The cat is laughing at you. Your heart is pounding. You are so confused.",
            options: [
                { text: "What is happening right now?", nextScene: 34 },
                { text: "Run away", nextScene: 5 } //game over
            ]
        },
        103: {
            background: "./images/landing.png",
            story: "You land safely, somehow you knew it was going to be ok.",
            options: [
                { text: "...", nextScene: 104 },
                // { text: "Walk away", nextScene: 5 }
            ]
        },
        104: {
            background: "./images/reference59.jpg",
            story: "The cat stares at you with a proud expression.",
            options: [
                { text: "...", nextScene: 34 },
                { text: "Walk away", nextScene: 5 }
            ]
        },
        17: {
            background: "./images/reference37.jpg",
            story: "You wake up disoriented in a police car.",
            options: [
                { text: "Try to run", nextScene: 15 },
                { text: "Stay silent", nextScene: 18 }
            ]
        },
        18: {
            background: "./images/reference40.jpg",
            story: "They take you to a police station. You notice the cat from your apartment staring at you from an alley.",
            options: [
                { text: "You stay silent and let the detective take you inside", nextScene: 19 },
                { text: "Make a run for the cat", nextScene: 34 }
            ]
        },
        19: {
            background: "./images/reference30.png",
            story: "The room is cold. The detective seems to ignore you while going through some documents...",
            options: [
                { text: "Please, you got the wrong person!", nextScene: 20 },
                { text: "There was a talking cat", nextScene: 27 } //vent scene
            ]
        },
        20: {
            background: "./images/reference30.png",
            story: "The detective is quiet for some minutes. Then all of a sudden asks if you're an employee at BioZynth",
            options: [
                { text: "I, I don't know", nextScene: 21 },
                { text: "BioZynth? The cat...", nextScene: 27 },//vent scene
                { text: "You don't answer", nextScene: 21 },
            ]
        },
        21: {
            background: "./images/reference30.png",
            story: "I need you to answer the question, it's for your own good.",
            options: [
                { text: "I do", nextScene: 22 },
                { text: "There was a talking cat", nextScene: 27 } //vent scene
            ]
        },
        22: {
            background: "./images/reference30.png",
            story: "The detective goes silent, it seems to be confirming something.",
            options: [
                { text: "Stay silent", nextScene: 23 },
                { text: "There was a talking cat", nextScene: 27 } //vent scene
            ]
        },
        23: {
            background: "./images/reference30.png",
            story: "So you admit to stealing security codes from BioZynth Corporation?",
            options: [
                { text: "What? No! I just work there.", nextScene: 24 },
                { text: "I, I didn't know. I just downloaded some files...", nextScene: 25 }
            ]
        },
        24: {
            background: "./images/reference30.png",
            story: "Don't play dumb. We have security footage.",
            options: [
                { text: "I... ok", nextScene: 25 },
                // { text: "There was a talking cat", nextScene: 16 }
            ]
        },
        25: {
            background: "./images/reference30.png",
            story: "The detective stares at you...",
            options: [
                { text: "I downloaded some files, but I didn't think they were that serious. I just work it in the server room", nextScene: 26 },
                // { text: "There was a talking cat", nextScene: 16 }
            ]
        },
        26: {
            background: "./images/reference30.png",
            story: "Nevertheless, I need to take you keep you in here for further questioning.",
            options: [
                { text: "Ok...", nextScene: 5 }, // game over
                { text: "There was a talking cat", nextScene: 27 } //vent scene
            ]
        },
        27: {
            background: "./images/reference30.png",
            story: "A talking cat huh? Was this cat wearing goggles by any chance?",
            options: [
                { text: "Yes! ", nextScene: 28 },
                { text: "I'm not sure", nextScene: 26 }
            ]
        },
        28: {
            background: "./images/reference30.png",
            story: "The detective seems to be communicating with someone. He leaves the room and tells you to stand by.",
            options: [
                { text: "...", nextScene: 29 },
                // { text: "There was a talking cat", nextScene: 16 }
            ]
        },
        29: {
            background: "./images/reference56.png",
            story: "You hear a faint meow. It's coming from the air vent",
            options: [
                { text: "You again?!", nextScene: 30 },
                { text: "Am I dreaming?", nextScene: 2 }
            ]
        },
        30: {
            background: "./images/reference51.png",
            story: "Why did you answer the door? I told you we had to go.",
            options: [
                { text: "I, well I still can't believe I'm having a conversation with a cat", nextScene: 31 },
                { text: "...", nextScene: 31 }
            ]
        },
        31: {
            background: "./images/reference51.png",
            story: "We really need to go. The cop should be back at any minute. ",
            options: [
                { text: "Trust the cat and climb the vent.", nextScene: 32 },
                { text: "Stay in the interrogation room", nextScene: 5 }//gameover
            ]
        },
        32: {
            background: "./images/reference58.png",
            story: "The two of you make your way through the air vents. The cat seems to know the way.",
            options: [
                { text: "I need answers, I need a lot of answers.", nextScene: 33 },
                // { text: "There was a talking cat", nextScene: 16 }
            ]
        },
        33: {
            background: "./images/reference58.png",
            story: "You will get all the answers but right now we need to get out of here.",
            options: [
                { text: "...", nextScene: 34 },
                // { text: "There was a talking cat", nextScene: 16 }
            ]
        },
        34: {
            background: "./images/reference59.jpg",
            story: "You find yourself in an alley. The cat is silent and motions you to follow him.",
            options: [
                { text: "Follow the cat", nextScene: 35 },
                { text: "You're free! Run away.", nextScene: 5 }//gameover
            ]
        },
        35: {
            background: "./images/reference59.jpg",
            story: "You follow the cat through several blocks. Until you reach a door at the end of an alley.",
            options: [
                { text: "...", nextScene: 36 },
                // { text: "There was a talking cat", nextScene: 16 }
            ]
        },
        36: {
            background: "./images/reference64.jpg",
            story: "The door seems to unlock as soon as the cat gets close to it.",
            options: [
                { text: "Go inside", nextScene: 37 },
                { text: "Walk away", nextScene: 5 }
            ]
        },
        37: {
            background: "./images/scene1.jpg",
            story: "It's pitch black. You start having second thoughts but after a couple of steps, you start seeing some light.",
            options: [
                { text: "Go further", nextScene: 38 },
                { text: "Go back", nextScene: 5 }
            ]
        },
        38: {
            background: "./images/reference36.jpg",
            story: "You have reached a room that your mind can't quite comprehend. There's a meeting going on, a cat meeting.",
            options: [
                { text: "Say nothing", nextScene: 39 },
                { text: "This is not real", nextScene: 2 }
            ]
        },
        39: {
            background: "./images/reference36.jpg",
            story: "They all stop talking and turn to you with interest.",
            options: [
                { text: "Huh, hello?", nextScene: 40 },
                // { text: "Walk away", nextScene: 5 }
            ]
        },
        40: {
            background: "./images/reference36.jpg",
            story: `An orange cat that seems to be the leader says welcome ${playerName}. We have been expecting you.`,
            options: [
                { text: "Expecting me?", nextScene: 41 },
                // { text: "Walk away", nextScene: 5 }
            ]
        },
        41: {
            background: "./images/reference68.png",
            story: "Yes. we know this is hard for you to understand at the moment. We will try to answer all your questions but we don't have much time.",
            options: [
                { text: "I have so many questions!", nextScene: 43 },
                { text: "Who are you?", nextScene: 42 }
            ]
        },
        42: {
            background: "./images/reference68.png",
            story: "My name is Alpha. The one that escorted you here is Psi. Pleasure to make your acquaintance. You will know everyone else in due time.",
            options: [
                { text: "I have so many questions!", nextScene: 43 },
            ]
        },
        43: {
            background: "./images/reference68.png",
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
            background: "./images/reference68.png",
            story: "Alpha chuckles, his eyes gleaming with a mischievous glint. Well, my friend, let's just say I've got a few high-tech upgrades courtesy of some experimental tinkering. BioZynth Corporation didn't just stop at creating lab-made cats, you know. They gave me the gift of gab and a knack for decoding the city's secrets. Now, enough about me. We've got a corporation to take down, and time's ticking. Ready for the next move?",
            options: [
                { text: "I have so many questions", nextScene: 43 },
                { text: "I'm ready", nextScene: 48 },//next scene
            ]
        },
        45: {
            background: "./images/reference68.png",
            story: "Your skills,your unique talents, and the data you posess from their server are the missing pieces to this puzzle. We're up against a behemoth, and the more allies we gather, the better our chances. Together, we can bring down BioZynth Corporation and expose their dark machinations. So, what do you say?",
            options: [
                { text: "I have so many questions", nextScene: 43 },
                { text: "I'm ready", nextScene: 48 },//next scene
            ]
        },
        46: {
            background: "./images/reference68.png",
            story: "BioZynth Corporation, the puppet master behind the scenes, has been conducting experiments that would make your hair stand on end. Lab-made cats, like our friends here, enhanced and manipulated for purposes we're only beginning to unravel.",
            options: [
                { text: "I have so many questions", nextScene: 43 },
                { text: "I'm ready", nextScene: 48 },//next scene
            ]
        },
        47: {
            background: "./images/reference68.png",
            story: "My lab name is Alpha, I'm a genetically engineered cat made in a lab by BioZynth Corporation. They have been experimenting on animals for decades but finally got a breakthrough with cats sometime last year. I cannot begin to tell you the horros that are happening in there. I was the first one, there were more, way more. The ones you see here are part of the lucky few I was able to rescue. They will continue to make atrocities until someone stops them. This is where you come in. ",
            options: [
                { text: "I have so many questions", nextScene: 43 },
                { text: "I'm ready", nextScene: 48 } //next scene
            ]
        },
        48: {
            background: "./images/reference68.png",
            story: `I knew we could count on you ${playerName}. Psi will go over the details. Don't fail us. We only have one shot at this`,
            options: [
                { text: "Let's get started", nextScene: 49 },
                // { text: "Walk away", nextScene: 5 }
            ]
        },
        49: {
            background: "./images/scene1.jpg",
            story: "You are being briefed by cats on a mission to take down an evil corporation, just a few hours ago you were sleeping at your apartment. You just realized that life comes at you hard. ",
            options: [
                { text: "...", nextScene: 51 },
                // { text: "Walk away", nextScene: 5 }
            ]
        },
        51: {
            background: "./images/reference35.jpg",
            story: "Our mission is to break in, delete the servers and rescue as many animals as possible.",
            options: [
                { text: "Sounds easy", nextScene: 52 },
                { text: "Sounds difficult", nextScene: 53 }
            ]
        },
        52: {
            background: "./images/reference35.jpg",
            story: "Sure, but there might be some unexpected obstacles. We won't know for sure until we break in.  ",
            options: [
                { text: "Obstacles?", nextScene: 53 },
                // { text: "Walk away", nextScene: 5 }
            ]
        },
        53: {
            background: "./images/reference35.jpg",
            story: "Yes, BioZynth is always updating their security. You have to be quick on your feet.",
            options: [
                { text: "I got this", nextScene: 54 },
                { text: "I'm having second thoughts", nextScene: 5 } //game over
            ]
        },
        54: {
            background: "./images/reference35.jpg",
            story: "Right, let us know when you're ready. Psi is waiting for you outside.",
            options: [
                { text: "I'm ready", nextScene: 55 },
                { text: "Obstacles?", nextScene: 53 }
            ]
        },
        55: {
            background: "./images/reference70.png",
            story: "You meet Psi outside. He motions for you to follow. You walk through back alleys and hidden paths for what seems like an hour. You reach a part of the city that you've never seen before. He stops and turns left at the end of an alley. ",
            options: [
                { text: "Are we here?", nextScene: 56 },
                // { text: "Walk away", nextScene: 5 }
            ]
        },
        56: {
            background: "./images/reference65.jpg",
            story: "Yes! This is the correct address. 2816 Lincoln Rd. This is the door for maintenance. I've been scouting the place for two weeks now. No one comes through here. The keypad should be easy to bypass.",
            options: [
                { text: "Try to bypass the keypad", nextScene: 57 }, 
                { text: "Try to kick the door in", nextScene: 5 }
            ]
        },
        57: {
            background: "./images/reference65.jpg",
            story: "It looks like you have to guess the secret number...",
            options: [
                { text: "Guess the number", nextScene: 58 },  //possible minigame
                { text: "Give up", nextScene: 5 }
            ]
        },
        58: {
            background: "./images/reference65.jpg",
            story: "It worked!",
            options: [
                { text: "Go inside", nextScene: 59 },
                { text: "Walk away", nextScene: 5 } //game over
            ]
        },
        59: {
            background: "./images/scene1.jpg",
            story: "The alarm goes off ass soon as you step inside. You can tell you don't have much time.",
            options: [
                { text: "Push forward", nextScene: 60 },
                { text: "Turn back and run", nextScene: 5 }
            ]
        },
        60: {
            background: "./images/reference39.png",
            story: "Your heart drops. You find yourself in front of a maze that stretches as far as the eye can see. But is too late to turn around now. The only way out is forward.",
            options: [
                { text: "Push forward", nextScene: 61 },
                // { text: "Walk away", nextScene: 5 }
            ]
        },
        61: {
            background: "./images/reference59.png",
            story: "You start making your way in. Psi is closely behind you. He says to you: If you ever feel stuck in the maze, let me know and I'll take us to the beginning.",
            options: [
                { text: "Go inside the maze", nextScene: 62 },
                { text: "Turn back and run", nextScene: 5 }
            ]
        },
        62: {
            background: "./images/reference45.png",
            story: "You find yourself in a room with multiple computers. You can go 3 different ways.You also notice 2 posters on the wall. ",
            options: [
                { text: "Go forward", nextScene: 200 },
                { text: "Go left", nextScene: 64 },
                { text: "Go right", nextScene: 217 },
                { text: "Look at the poster on the right", nextScene: 63 },
                { text: "Look at the poster on the left", nextScene: 301 }
            ]
        },
        63: {
            background: "./images/greekabcupdated.png",
            story: "",
            options: [
                { text: "Back to the room", nextScene: 62 },
                // { text: "Go left", nextScene: 65 },
                // { text: "Go right", nextScene: 66 },
            ]
        },
        301: {
            background: "./images/poster2.png",
            story: "It seems the Symbols have a numeric value. BioZynth always had an affinity for greek characters...",
            options: [
                { text: "Back to the room", nextScene: 62 },
                // { text: "Go left", nextScene: 65 },
                // { text: "Go right", nextScene: 66 },
            ]
        },
        64: {
            background: "./images/hallway2.png",
            story: "There is along hallway",
            options: [
                { text: "Go forward", nextScene: 65 },
                { text: "Go Back", nextScene: 62 },
                // { text: "Go right", nextScene: 66 },
                // { text: "Start Over", nextScene: 66 },
            ]
        },
        65: {
            background: "./images/reference38.png",
            story: "You find yourself in a room with 3 doors. Door 1: '2' Door 2: Beta Door 3: Alpha",
            options: [
                { text: "2", nextScene: 208 },
                { text: "Beta", nextScene: 66 },
                { text: "Alpha", nextScene: 213 },
                { text: "Start Over", nextScene: 62 },
            ]
        },
        66: {
            background: "./images/hallway4.png",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 67 },
                { text: "Go back", nextScene: 65 }
            ]
        },
        67: {
            background: "./images/reference40.png",
            story: "You find yourself in a room with 3 doors. Door 1: Kappa Door 2: '13' Door 3: Iota",
            options: [
                { text: "Kappa", nextScene: 223 },
                { text: "13", nextScene: 204 },
                { text: "Iota", nextScene: 68 },
                { text: "Start Over", nextScene: 62 },
            ]
        },
        68: {
            background: "./images/hallway1.png",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 69 },
                { text: "Go back", nextScene: 67 }
            ]
        },
        69: {
            background: "./images/reference43.png",
            story: "You find yourself in a room with 3 doors. Door 1: '9' Door 2: Chi Door 3: Omicron",
            options: [
                { text: "9", nextScene: 210 },
                { text: "Chi", nextScene: 233 },
                { text: "Omicron", nextScene: 70 },
                { text: "Start Over", nextScene: 62 },
            ]
        },
        70: {
            background: "./images/hallway3.png",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 71 },
                { text: "Go back", nextScene: 69 }
            ]
        },
        71: {
            background: "./images/reference41.png",
            story: "You find yourself in a room with 3 doors. Door 1: Zeta Door 2: '20' Door 3: Omega",
            options: [
                { text: "Zeta", nextScene: 72 },
                { text: "20", nextScene: 245 },
                { text: "Omega", nextScene: 66 },
                { text: "Start Over", nextScene: 62 },
            ]
        },
        72: {
            background: "./images/hallway2.png",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 73 },
                { text: "Go back", nextScene: 71 }
            ]
        },
        73: {
            background: "./images/reference49.png",
            story: "You find yourself in a room with 3 doors. Door 1: Rho Door 2: Op-Silon Door 3: '6'",
            options: [
                { text: "Rho", nextScene: 251 },
                { text: "Op-Silon", nextScene: 74 },
                { text: "6", nextScene: 212 },
                { text: "Start Over", nextScene: 62 },
            ]
        },
        74: {
            background: "./images/hallway4.png",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 75 },
                { text: "Go back", nextScene: 73 }
            ]
        },
        75: {
            background: "./images/reference47.png",
            story: "You find yourself in a room with 3 doors. Door 1: '15' Door 2: Pi Door 3: Nu",
            options: [
                { text: "15", nextScene: 70 },
                { text: "Pi", nextScene: 219 },
                { text: "Nu", nextScene: 76 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        76: {
            background: "./images/hallway10.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 77 },
                { text: "Go back", nextScene: 75}
            ]
        },
        77: {
            background: "./images/reference40.png",
            story: "You find yourself in a room with 3 doors. Door 1: Lambda Door 2: Tau 3: '13'",
            options: [
                { text: "Lambda", nextScene: 70 },
                { text: "Tau", nextScene: 78 },
                { text: "13", nextScene: 229 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        78: {
            background: "./images/hallway12.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 79 },
                { text: "Go back", nextScene: 77}
            ]
        },
        79: {
            background: "./images/reference40.png",
            story: "You find yourself in a room with 3 doors. Door 1: Eta Door 2: '8' 3: Omega",
            options: [
                { text: "Eta", nextScene: 80 },
                { text: "8", nextScene: 243 },
                { text: "Omega", nextScene: 66 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        80: {
            background: "./images/hallway11.jpg",
            story: "There is a long hallway with a strange light glowing at the end.",
            options: [
                { text: "Go forward", nextScene: 81 },
                { text: "Go back", nextScene: 79}
            ]
        },
        81: {
            background: "./images/serverroom1.png",
            story: "You find yourself in a giant room. It seems to be the server room. At last!",
            options: [
                { text: "Find the control room", nextScene: 82 },
                { text: "", nextScene: 78 },
                { text: "Omega", nextScene: 76 },
                { text: "Start Over", nextScene: 62 },
            ]
        },
        82: {
            background: "./images/computerroom1.png",
            story: "This is it! We need to erase all the data. ",
            options: [
                { text: "Hack into their systems", nextScene: 83 },
                { text: "", nextScene: 78 },
                { text: "Omega", nextScene: 76 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        83: {
            background: "./images/reference26.png",
            story: "Psi connects a device into one of the computers.",
            options: [
                { text: "...", nextScene: 84 },
                // { text: "", nextScene: 78 },
                // { text: "Omega", nextScene: 76 },
                // { text: "Start Over", nextScene: 62 },
            ]
        },
        84: {
            background: "./images/reference26.png",
            story: "Done! Let's get out of here!",
            options: [
                { text: "We need to rescue the others!", nextScene: 85 },//find the others
                { text: "Agreed. Let's go before we get caught!", nextScene: 5 },//escape
                // { text: "Omega", nextScene: 76 },
                // { text: "Start Over", nextScene: 62 },
            ]
        },
        85: {
            background: "./images/reference26.png",
            story: "Right! Let's hurry!",
            options: [
                { text: "Let's go", nextScene: 86 },//find the others
                // { text: "Agreed. Let's go before we get caught!", nextScene: 78 },//escape
                // { text: "Omega", nextScene: 76 },
                // { text: "Start Over", nextScene: 62 },
            ]
        },  
        86: {
            background: "./images/hallway12.jpg",
            story: "This is it. That door leads to the lab.",
            options: [
                { text: "Go inside", nextScene: 87 },//find the others
                { text: "Forget it. We don't have much time.", nextScene: 5 },//escape
                // { text: "Omega", nextScene: 76 },
                // { text: "Start Over", nextScene: 62 },
            ]
        }, 
        87: {
            background: "./images/labpic.png",
            story: "You finally reach the lab. There are several cages.",
            options: [
                { text: "Rescue the animals and escape", nextScene: 88 },//find the others
                { text: "Turn back. Not much time", nextScene: 5 },//escape
                // { text: "Omega", nextScene: 76 },
                // { text: "Start Over", nextScene: 62 },
            ]
        },
        88: {
            background: "./images/freedcats.png",
            story: "They're finally free. Let's head out!",
            options: [
                { text: "Escape the BioSynth facility", nextScene: 89 },//find the others
                // { text: "Turn back. Not much time", nextScene: 86 },//escape
                // { text: "Omega", nextScene: 76 },
                // { text: "Start Over", nextScene: 62 },
            ]
        },
        89: {
            background: "./images/guardschasing.png",
            story: "You are running as fast as you can, you can feel the guards getting closer. You see the exit door at the end",
            options: [
                { text: "Go through the door", nextScene: 90 },
                { text: "Stay and fight", nextScene: 5 }//find the others
                // { text: "Turn back. Not much time", nextScene: 86 },//escape
                // { text: "Omega", nextScene: 76 },
                // { text: "Start Over", nextScene: 62 },
            ]
        },
        90: {
            background: "./images/scene1.jpg",
            story: "You make it out. You follow Psi for several blocks until you're finally back at the hideout. ",
            options: [
                { text: "...", nextScene: 91 },//find the others
                // { text: "Turn back. Not much time", nextScene: 86 },//escape
                // { text: "Omega", nextScene: 76 },
                // { text: "Start Over", nextScene: 62 },
            ]
        }, 
        91: {
            background: "./images/scene1.jpg",
            story: "BioZynth is done. You spend several days with the cats until everything calms down. You adopt Psi and go back to your apartment to try and live a normal life.",
            options: [
                { text: "...", nextScene: 93 },//find the others
                // { text: "Turn back. Not much time", nextScene: 86 },//escape
                // { text: "Omega", nextScene: 76 },
                // { text: "Start Over", nextScene: 62 },
            ]
        },
        // 92: {
        //     background: "./images/scene1.jpg",
        //     story: "BioZynth is done. You spend several days with the cats until everything calms down. You adopt Psi and go back to your apartment to try and live a normal life.",
        //     options: [
        //         { text: "...", nextScene: 93 },//find the others
        //         // { text: "Turn back. Not much time", nextScene: 86 },//escape
        //         // { text: "Omega", nextScene: 76 },
        //         // { text: "Start Over", nextScene: 62 },
            //]
        //}, 
        93: {
            background: "./images/reference11.jpg",
            story: "Life seems calm. At last, everything is back to normal. Or is it?",
            options: [
                { text: "...", nextScene: 94 },//find the others
                // { text: "Turn back. Not much time", nextScene: 86 },//escape
                // { text: "Omega", nextScene: 76 },
                // { text: "Start Over", nextScene: 62 },
            ]
        }, 
        94: {
            background: "./images/evilcats.png",
            story: "It seems that BioZynth is not done with you...",
            options: [
                { text: "...", nextScene: 1 },//find the others
                // { text: "Turn back. Not much time", nextScene: 86 },//escape
                // { text: "Omega", nextScene: 76 },
                // { text: "Start Over", nextScene: 62 },
            ]
        }, 
        200: {
            background: "./images/hallway4.png",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 201 },
                { text: "Go back", nextScene: 62 }
            ]
        }, 
        201: {
            background: "./images/reference44.png",
            story: "You find yourself in a room with 3 doors. Door 1: Psi Door 2: '2' Door 3: Omega",
            options: [
                { text: "Psi", nextScene: 221 },
                { text: "2", nextScene: 202 },
                { text: "Omega", nextScene: 68 },
                { text: "Start Over", nextScene: 62 },
            ]
        },  
        202: {
            background: "./images/hallway7.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 203 },
                { text: "Go back", nextScene: 201 }
            ]
        },
        203: {
            background: "./images/reference48.png",
            story: "You find yourself in a room with 3 doors. Door 1: '9' Door 2: Delta Door 3: Gamma",
            options: [
                { text: "9", nextScene: 204 },
                { text: "Delta", nextScene: 227 },
                { text: "Gamma", nextScene: 70 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        204: {
            background: "./images/hallway8.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 205 },
                { text: "Go back", nextScene: 203 }
            ]
        }, 
        205: {
            background: "./images/reference50.png",
            story: "You find yourself in a room with 3 doors. Door 1: '15' Door 2: Kappa Door 3: '18'",
            options: [
                { text: "15", nextScene: 206 },
                { text: "Kappa", nextScene: 255 },
                { text: "18", nextScene: 206 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        206: {
            background: "./images/hallway3.png",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 207 },
                { text: "Go back", nextScene: 205 }
            ]
        }, 
        207: {
            background: "./images/reference43.png",
            story: "You find yourself in a room with 3 doors. Door 1: '20' Door 2: '6' Door 3: Iota",
            options: [
                { text: "20", nextScene: 216 },
                { text: "6", nextScene: 208 },
                { text: "Iota", nextScene: 227 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        208: {
            background: "./images/hallway5.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 209 },
                { text: "Go back", nextScene: 207 }
            ]
        }, 
        209: {
            background: "./images/reference43.png",
            story: "You find yourself in a room with 3 doors. Door 1: '20' Door 2: Alpha 3: '13'",
            options: [
                { text: "20", nextScene: 210 },
                { text: "Alpha", nextScene: 202 },
                { text: "13", nextScene: 68 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        210: {
            background: "./images/hallway1.png",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 211 },
                { text: "Go back", nextScene: 209 }
            ]
        }, 
        211: {
            background: "./images/reference44.png",
            story: "You find yourself in a room with 3 doors. Door 1: Omicron Door 2: '7' Door 3: '13'",
            options: [
                { text: "Omicron", nextScene: 249 },
                { text: "7", nextScene: 202 },
                { text: "13", nextScene: 212 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        212: {
            background: "./images/hallway2.png",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 213 },
                { text: "Go back", nextScene: 211 }
            ]
        }, 
        213: {
            background: "./images/reference41.png",
            story: "You find yourself in a room with 3 doors. Door 1: '6' Door 2: '19' Door 3: Xi",
            options: [
                { text: "6", nextScene: 219 },
                { text: "19", nextScene: 214 },
                { text: "Xi", nextScene: 66 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        214: {
            background: "./images/hallway7.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 215 },
                { text: "Go back", nextScene: 213 }
            ]
        },
        215: {
            background: "./images/reference48.png",
            story: "You find yourself in a room with 3 doors. Door 1: '7' Door 2: Beta Door 3: '2'",
            options: [
                { text: "7", nextScene: 216 },
                { text: "Beta", nextScene: 68 },
                { text: "2", nextScene: 223 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        216: {
            background: "./images/hallway11.jpg",
            story: "There is a long hallway with a strange light glowing at the end...",
            options: [
                { text: "Go forward", nextScene: 81 },
                { text: "Go back", nextScene: 215 }
            ]
        }, 

        //This is the path to the right
        217: {
            background: "./images/hallway11.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 218 },
                { text: "Go back", nextScene: 62 }
            ]
        },
        218: {
            background: "./images/reference48.png",
            story: "You find yourself in a room with 3 doors. Door 1: Alpha Door 2: Omega Door 3: '13'",
            options: [
                { text: "Alpha", nextScene: 219 },
                { text: "Omega", nextScene: 227 },
                { text: "13", nextScene: 206 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        219: {
            background: "./images/hallway8.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 220 },
                { text: "Go back", nextScene: 218 }
            ]
        },
        220: {
            background: "./images/reference47.png",
            story: "You find yourself in a room with 3 doors. Door 1: Delta Door 2: Beta Door 3: '9'",
            options: [
                { text: "Delta", nextScene: 208 },
                { text: "Beta", nextScene: 221 },
                { text: "9", nextScene: 237 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        221: {
            background: "./images/hallway9.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 222 },
                { text: "Go back", nextScene: 220 }
            ]
        },
        222: {
            background: "./images/reference40.png",
            story: "You find yourself in a room with 3 doors. Door 1: Op-silon Door 2: Gamma Door 3: '8'",
            options: [
                { text: "Op-silon", nextScene: 70 },
                { text: "Gamma", nextScene: 223 },
                { text: "8", nextScene: 66 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        223: {
            background: "./images/hallway2.png",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 224 },
                { text: "Go back", nextScene: 222 }
            ]
        },
        224: {
            background: "./images/reference40.png",
            story: "You find yourself in a room with 3 doors. Door 1: Delta Door 2: '15' Door 3: '7'",
            options: [
                { text: "Delta", nextScene: 225 },
                { text: "15", nextScene: 78 },
                { text: "7", nextScene: 259 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        225: {
            background: "./images/hallway1.png",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 226 },
                { text: "Go back", nextScene: 224 }
            ]
        },
        226: {
            background: "./images/reference49.png",
            story: "You find yourself in a room with 3 doors. Door 1: '12' Door 2: Psi Door 3: Epsilon",
            options: [
                { text: "12", nextScene: 74 },
                { text: "Psi", nextScene: 223 },
                { text: "Epsilon", nextScene: 227 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        227: {
            background: "./images/hallway4.png",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 228 },
                { text: "Go back", nextScene: 226 }
            ]
        },
        228: {
            background: "./images/reference49.png",
            story: "You find yourself in a room with 3 doors. Door 1: Zeta Door 2: '13' Door 3: Sigma",
            options: [
                { text: "Zeta", nextScene: 229 },
                { text: "13", nextScene: 233 },
                { text: "Sigma", nextScene: 227 },
                { text: "Start Over", nextScene: 206 },
            ]
        }, 
        229: {
            background: "./images/hallway5.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 230 },
                { text: "Go back", nextScene: 228 }
            ]
        },
        230: {
            background: "./images/reference44.png",
            story: "You find yourself in a room with 3 doors. Door 1: '19' Door 2: Eta Door 3: Delta",
            options: [
                { text: "19", nextScene: 253 },
                { text: "Eta", nextScene: 231 },
                { text: "Delta", nextScene: 231 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        231: {
            background: "./images/hallway6.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 232 },
                { text: "Go back", nextScene: 230 }
            ]
        },
        232: {
            background: "./images/reference50.png",
            story: "You find yourself in a room with 3 doors. Door 1: Rho Door 2: Theta Door 3: '2'",
            options: [
                { text: "Rho", nextScene: 223 },
                { text: "Theta", nextScene: 233 },
                { text: "2", nextScene: 227 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        233: {
            background: "./images/hallway7.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 234 },
                { text: "Go back", nextScene: 232 }
            ]
        },
        234: {
            background: "./images/reference46.png",
            story: "You find yourself in a room with 3 doors. Door 1: '20' Door 2: Epsilon Door 3: Iota",
            options: [
                { text: "20", nextScene: 62 },
                { text: "Epsilon", nextScene: 235 },
                { text: "Iota", nextScene: 235 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        235: {
            background: "./images/hallway7.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 236 },
                { text: "Go back", nextScene: 234 }
            ]
        },
        236: {
            background: "./images/reference43.png",
            story: "You find yourself in a room with 3 doors. Door 1: Tau Door 2: '19' Door 3: Kappa",
            options: [
                { text: "Tau", nextScene: 74 },
                { text: "19", nextScene: 225 },
                { text: "Kappa", nextScene: 237 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        237: {
            background: "./images/hallway12.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 238 },
                { text: "Go back", nextScene: 236 }
            ]
        },
        238: {
            background: "./images/reference41.png",
            story: "You find yourself in a room with 3 doors. Door 1: '6' Door 2: Mu Door 3: Lambda",
            options: [
                { text: "6", nextScene: 265 },
                { text: "Mu", nextScene: 62 },
                { text: "Lambda", nextScene: 239 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        239: {
            background: "./images/hallway6.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 240 },
                { text: "Go back", nextScene: 238 }
            ]
        },
        240: {
            background: "./images/reference40.png",
            story: "You find yourself in a room with 3 doors. Door 1: Mu Door 2: Nu Door 3: '7'",
            options: [
                { text: "Mu", nextScene: 241 },
                { text: "Nu", nextScene: 62 },
                { text: "7", nextScene: 241 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        241: {
            background: "./images/hallway7.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 242 },
                { text: "Go back", nextScene: 240 }
            ]
        },
        242: {
            background: "./images/reference47.png",
            story: "You find yourself in a room with 3 doors. Door 1: Mu Door 2: '13' Door 3: Nu",
            options: [
                { text: "Mu", nextScene: 241 },
                { text: "13", nextScene: 70 },
                { text: "Nu", nextScene: 243 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        243: {
            background: "./images/hallway8.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 244 },
                { text: "Go back", nextScene: 242 }
            ]
        },
        244: {
            background: "./images/reference47.png",
            story: "You find yourself in a room with 3 doors. Door 1: Alpha Door 2: Xi Door 3: '33'",
            options: [
                { text: "Alpha", nextScene: 245 },
                { text: "Xi", nextScene: 245 },
                { text: "33", nextScene: 245 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        245: {
            background: "./images/hallway9.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 246 },
                { text: "Go back", nextScene: 242 }
            ]
        },
        246: {
            background: "./images/reference44.png",
            story: "You find yourself in a room with 3 doors. Door 1: Omicron Door 2: Pi Door 3: '21'",
            options: [
                { text: "Omicron", nextScene: 247 },
                { text: "Pi", nextScene: 62 },
                { text: "21", nextScene: 62 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        247: {
            background: "./images/hallway10.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 248 },
                { text: "Go back", nextScene: 246 }
            ]
        },
        248: {
            background: "./images/reference40.png",
            story: "You find yourself in a room with 3 doors. Door 1: '2' Door 2: Pi Door 3: Iota",
            options: [
                { text: "2", nextScene: 204 },
                { text: "Pi", nextScene: 249 },
                { text: "Iota", nextScene: 202 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        249: {
            background: "./images/hallway12.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 250 },
                { text: "Go back", nextScene: 248 }
            ]
        },
        250: {
            background: "./images/reference48.png",
            story: "You find yourself in a room with 3 doors. Door 1: Rho Door 2: Eta Door 3: '8'",
            options: [
                { text: "Rho", nextScene: 251 },
                { text: "Eta", nextScene: 229 },
                { text: "8", nextScene: 62 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        251: {
            background: "./images/hallway6.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 252 },
                { text: "Go back", nextScene: 250 }
            ]
        },
        252: {
            background: "./images/reference40.png",
            story: "You find yourself in a room with 3 doors. Door 1: Chi Door 2: '7' Door 3: Sigma",
            options: [
                { text: "Chi", nextScene: 251 },
                { text: "7", nextScene: 70 },
                { text: "Sigma", nextScene: 253 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        253: {
            background: "./images/hallway7.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 254 },
                { text: "Go back", nextScene: 252 }
            ]
        },
        254: {
            background: "./images/reference41.png",
            story: "You find yourself in a room with 3 doors. Door 1: Tau Door 2: '20' Door 3: Sigma",
            options: [
                { text: "Tau", nextScene: 255 },
                { text: "20", nextScene: 62 },
                { text: "Sigma", nextScene: 204 },
                { text: "Start Over", nextScene: 62 },
            ]
        }, 
        255: {
            background: "./images/hallway8.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 256 },
                { text: "Go back", nextScene: 254 }
            ]
        },
        256: {
            background: "./images/reference47.png",
            story: "You find yourself in a room with 3 doors. Door 1: Op-Silon Door 2: Psi Door 3: '4'",
            options: [
                { text: "Op-Silon", nextScene: 257 },
                { text: "Psi", nextScene: 257 },
                { text: "4", nextScene: 263 },
                { text: "Start Over", nextScene: 62 },
            ]
        },
        257: {
            background: "./images/hallway9.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 258 },
                { text: "Go back", nextScene: 256 }
            ]
        }, 
        258: {
            background: "./images/reference49.png",
            story: "You find yourself in a room with 3 doors. Door 1: '15' Door 2: Fie Door 3: Theta",
            options: [
                { text: "15", nextScene: 256 },
                { text: "Fie", nextScene: 259 },
                { text: "Theta", nextScene: 62 },
                { text: "Start Over", nextScene: 62 },
            ]
        },
        259: {
            background: "./images/hallway9.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 260 },
                { text: "Go back", nextScene: 258 }
            ]
        }, 
        260: {
            background: "./images/reference46.png",
            story: "You find yourself in a room with 3 doors. Door 1: '18' Door 2: Chi Door 3: Alpha",
            options: [
                { text: "18", nextScene: 62 },
                { text: "Chi", nextScene: 261 },
                { text: "Alpha", nextScene: 202 },
                { text: "Start Over", nextScene: 62 },
            ]
        },
        261: {
            background: "./images/hallway10.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 262 },
                { text: "Go back", nextScene: 260 }
            ]
        }, 
        262: {
            background: "./images/reference43.png",
            story: "You find yourself in a room with 3 doors. Door 1: Omega Door 2: '5' Door 3: Psi",
            options: [
                { text: "Omega", nextScene: 62 },
                { text: "5", nextScene: 206 },
                { text: "Psi", nextScene: 263 },
                { text: "Start Over", nextScene: 62 },
            ]
        },
        263: {
            background: "./images/hallway12.jpg",
            story: "There is a long hallway",
            options: [
                { text: "Go forward", nextScene: 264 },
                { text: "Go back", nextScene: 262 }
            ]
        }, 
        264: {
            background: "./images/reference40.png",
            story: "You find yourself in a room with 3 doors. Door 1: Omega Door 2: '26' Door 3: Alpha",
            options: [
                { text: "Omega", nextScene: 265 },
                { text: "26", nextScene: 208 },
                { text: "Alpha", nextScene: 217 },
                { text: "Start Over", nextScene: 62 },
            ]
        },
        265: {
            background: "./images/hallway11.jpg",
            story: "There is a long hallway with a strange light glowing at the end.",
            options: [
                { text: "Go forward", nextScene: 62 },
                { text: "Go back", nextScene: 264}
            ]
        },
        
         
                                                                                                                                                                                                           
        
    };

    updateGame()
    
}

// Start the game
// updateGame();









