//quicksand dash font
let qsd;
let qsb;

let memes = [];
let words = [
  "Is this your meme?",
  "No?",
  "How about now?",
  "Ya feeling this meme?",
  "Like this meme?",
  "Hilarious.",
  "*Laughing on the inside*",
  "This one's pretty good.",
  "Do not like it?",
  "Click for another!",
  "So how's your day?",
  "HAHAHAHAHAHAHA!"
];
let sounds = [];

let button;

let img;
function preload() {
  //set up fonts
  qsd = loadFont("Quicksand_Dash.otf");
  qsb = loadFont("Quicksand-Bold.otf");

  //set up images
  let trollFace = loadImage("troll-face-meme-595.jpg");
  let dogMeme = loadImage("internetdog.jpeg");
  let cryingNo = loadImage("I_are_crying_cuz_I_no_understand_ze_zoke.jpg");
  let databaseJoke = loadImage("4834015.jpg");
  let blowDry = loadImage(
    "funny-memes-person-wtf-is-he-blow-drying-his-thoughts.jpeg"
  );
  let goat = loadImage("goat-meme-with-a-grass-craving-goat.jpeg");
  let notAmused = loadImage("images.jpeg");
  let motherGod = loadImage("mother-of-god-meme-589.jpg");
  let angryFace = loadImage("1317604469.png"); 
  let choices = loadImage("16210376438_087808e535.jpg");
  let socialDistance = loadImage("physical-distancing-champion-covid-19-meme-07789f-640.jpg");
  let taxes = loadImage('Popular_"Taxation_is_Theft"_meme..png');
  let hmmm = loadImage('Unknown.png');
  let catMeme = loadImage('Cat_Meme.jpg');

  memes = [
    trollFace,
    dogMeme,
    cryingNo,
    databaseJoke,
    blowDry,
    goat,
    notAmused,
    motherGod,
    angryFace,
    choices,
    socialDistance,
    taxes,
    hmmm,
    catMeme
  ];

  //program doesn't run if I kept it at 6 different sounds (might be an overloading issue?)
  //set up sounds
  sounds.push(loadSound("Duck.mp3"));
  sounds.push(loadSound("Flop.mp3"));
  sounds.push(loadSound("Slap.mp3"));
  // sounds.push(loadSound("Duck Squeak.mp3"));
  // sounds.push(loadSound("Throw.mp3"));
  // sounds.push(loadSound("Squeak.mp3"));
}

function setup() {
  createCanvas(600, 600);
  background(220);
  button = createButton("Click for meme!");
  button.position(260, 500);
  button.mousePressed();
}

function draw() {
  titleText();
}

function mousePressed() {
  background(color(random(150, 255), random(150, 255), random(150, 255)));
  //sets random pic generator
  fill("#ffffff");
  square(125, 125, 350, 20);
  imageMode(CENTER);
  let randomImg = random(memes);
  randomImg.resize(300, 300);
  image(randomImg, width / 2, height / 2);

  let randomSound = random(sounds);
  randomSound.play();

  wordRandom();
}

function wordRandom() {
  //random phrase generator
  let word = random(words);
  fill(0);
  textFont(qsb);
  textAlign(CENTER);
  text(word, random(200, 400), random(50, 600));
}

function titleText() {
  textSize(32);
  fill(0);
  textAlign(CENTER);
  textFont(qsd);
  text("What do you meme?", 300, 40);
}