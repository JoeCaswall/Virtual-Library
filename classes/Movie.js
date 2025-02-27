// import the Media class:
const Media = require("./Media.js");

// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }
  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration}, Rating: ${this.rating}`;
  }
  static longestMovie(movieArr) {
    let highestDuration = 0;
    let longestFilm;
    for (let x of movieArr) {
      if (x.duration > highestDuration) {
        highestDuration = x.duration;
        longestFilm = x;
      }
    }
    return longestFilm;
  }
}
// don't change below
module.exports = Movie;
