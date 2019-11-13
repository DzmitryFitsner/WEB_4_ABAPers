function Book(title,  fieldOfStudy, publisher, author) {
this.title = title;
this.fieldOfStudy = fieldOfStudy;
this.publisher = publisher;
this.author = author;

this.setTitle = function (value) {
  title = value;
}
this.getTitle = function () {
  return this.title;
}

this.setFieldOfStudy = function (value) {
  fieldOfStudy = value;
}
this.getFieldOfStudy = function () {
  return this.fieldOfStudy;
}

this.setPublisher = function (value) {
  publisher = value;
} 
this.getPublisher = function () {
  return this.publisher;
}

this.setAuthor = function (value) {
  author = value;
}
this.getAuthor = function () {
  return this.author;
}

}

function Audiobook(title,  fieldOfStudy, publisher, author, length) {
  Book.call(this, title,  fieldOfStudy, publisher, author);
  this.length = length;
  this.setLength = function (value) {
    length = value;
  }
  this.getLength = function () {
    return length;
  }
} 

function Textbook(title,  fieldOfStudy, numberOfPages, publisher, author) {
  Book.call(this, title,  fieldOfStudy, publisher, author);
  this.setNumberOfPages = function (value) {
    numberOfPages = value;
  }
  this.getNumberOfPages = function () {
    return this.numberOfPages;
  }
}