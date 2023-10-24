// import the Media class:
const Media = require("./Media.js");
// create your Music class:
class Music extends Media {
  constructor(title, year, genre, artist, length) {
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
  }
  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
  }
  static shortestAlbum(albumArr) {
    let lengthArr = [];
    let result;
    for (let x of albumArr) {
      lengthArr.push(x.length);
    }
    let minLength = Math.min(...lengthArr);
    for (let x of albumArr) {
      if (x.length === minLength) {
        result = x;
      }
    }
    return result;
  }
}

// don't change below
module.exports = Music;
