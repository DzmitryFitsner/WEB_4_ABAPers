class Book {
  constructor(title, fieldOfStudy, publisher, author){
    this.title = title;
    this.fieldOfStudy = fieldOfStudy;
    this.publisher = publisher;
    this.author = author;
  }

  get title() {
    return this.title;
  }
  set title(title) {
    this._title = title;
  }

  get fieldOfStudy() {
    return this.fieldOfStudy;
  }
  set fieldOfStudy(fieldOfStudy){
    this._fieldOfStudy = fieldOfStudy;
  }

  get publisher() {
    return this.publisher;
  }
  set publisher(publisher) {
    this._publisher = publisher;
  }
  
  get author() {
    return this.author;
  }
  set author(author) {
    this._author = author;
  }
}

class Audiobook extends Book {
  constructor(title,  fieldOfStudy, publisher, author, length) {
    super(...arguments);
    this.length = length;
  }

  get length() {
    return this.length;
  }
  set length(length) {
    this._length = length;
  }
}

class Textbook extends Book {
  constructor (title,  fieldOfStudy, publisher, author, numberOfPages) {
    super(...arguments);
    this.numberOfPages = numberOfPages;
  }

  get numberOfPages() {
    return this.numberOfPages;
  }
  set numberOfPages (numberOfPages) {
    this._numberOfPages = numberOfPages;
  }
}
