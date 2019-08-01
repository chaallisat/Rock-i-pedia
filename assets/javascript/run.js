const music = require("./bandAPI.js")

// console.log(music.bands);

const rocks = music.bands.rock;

const name = rocks.paramore.name;
const img = rocks.paramore.image;
const song = rocks.paramore.bestsong;

console.log(`Name: ${name} \nImage: ${img} \nSong Name: ${song}`);

