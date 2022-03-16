let memes = [];
let words = ['Is this your meme?', 'No?', 'How about now?', 'Ya feeling this meme?', 'Like this meme?', 'Hilarious', '*Laughing on the inside*', 'This one is pretty good.'];
let sounds = [];


let img;
function preload() {
  let trollFace = loadImage('troll-face-meme-595.jpg');
  let dogMeme = loadImage('internetdog.jpeg');
  let cryingNo = loadImage('I_are_crying_cuz_I_no_understand_ze_zoke.jpg');
  let databaseJoke = loadImage('4834015.jpg');
  let blowDry = loadImage('funny-memes-person-wtf-is-he-blow-drying-his-thoughts.jpeg');
  let goat = loadImage('goat-meme-with-a-grass-craving-goat.jpeg');
  let notAmused = loadImage('images.jpeg');
  let motherGod = loadImage('mother-of-god-meme-589.jpg');

  memes = [trollFace, dogMeme, cryingNo, databaseJoke, blowDry, goat, notAmused, motherGod];

  //won't work for some reason (When removed, the rest of the code works. When this is placed back everything else but this doesn't work)
  // sounds.push(loadSound("Duck Squeak.mp3"));
  sounds.push(loadSound("Duck.mp3"));
  sounds.push(loadSound("Flop.mp3"));
  sounds.push(loadSound("Slap.mp3"));
  // sounds.push(loadSound("Throw.mp3"));
  // sounds.push(loadSound("Squeak.mp3"));
}


function setup() {
  createCanvas(600, 600);
  background(220);

}

function draw() {
   titleText();
}

function mousePressed() {
  background(color(random(150, 255), random(150, 255), random(150, 255)));

  //sets random pic generator
  imageMode(CENTER);
  let randomImg = random(memes);
  randomImg.resize(300, 300);
  image(randomImg, width / 2, height / 2);
  wordRandom();
  mouseClicked();

}

  //another mouse click function to have random selected sound play when clicked
function mouseClicked() {
  let randomSound = random(sounds);
  randomSound.play();
}

function wordRandom() {
  //random phrase generator
  let word = random(words);
  text(word, random(width), random(height));
}

function titleText() {
  textSize(32);
  fill(0);
  textAlign(CENTER);
  text('What do you meme?', 300, 40);
}
