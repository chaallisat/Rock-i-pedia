const information = require("./bandAPI.js")

console.log(information.bands);

const name = information.bands.rock.paramore.name;
const img = information.bands.rock.paramore.image;
const song = information.bands.rock.paramore.bestsong;

console.log(name);
console.log(img);
console.log(song);

