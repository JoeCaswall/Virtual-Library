// import the Media class:
const Media = require("./Media.js");
// create your Book class:
class Book extends Media {
  constructor(title, year, genre, author, numPages, rating) {
    super(title, year, genre);
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
  }
  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
  static highestRating(bookArr) {
    let topRating = 0;
    let highestRatedBook;
    for (let x of bookArr) {
      if (x.rating > topRating) {
        topRating = x.rating;
        highestRatedBook = x;
        console.log(x);
      }
    }
    return highestRatedBook;
  }
}

module.exports = Book;
