// Import classes here to console.log and debug
const Media = require("./classes/Media.js");
const Book = require("./classes/Book.js");
const Movie = require("./classes/Movie.js");
const Music = require("./classes/Music.js");

const book = new Media("The Catcher in the Rye", 1951, "Fiction");
Media.totalMediaCount; // 1
const music = new Media("Abbey Road", 1969, "Rock");
Media.totalMediaCount; // 2

console.log(Media.totalMediaCount);
