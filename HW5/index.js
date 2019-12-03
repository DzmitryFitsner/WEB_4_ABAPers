function Book(title,  fieldOfStudy, publisher, author) {
  this.title = title;
  this.fieldOfStudy = fieldOfStudy;
  this.publisher = publisher;
  this.author = author;
  
  Book.prototype.setTitle = function (value) {
    this.title = value;
  }
  
  Book.prototype.getTitle = function () {
    return this.title;
  }
  
  Book.prototype.setFieldOfStudy = function (value) {
    this.fieldOfStudy = value;
  }
  
  Book.prototype.getFieldOfStudy = function () {
    return this.fieldOfStudy;
  }
  
  Book.prototype.setPublisher = function (value) {
    this.publisher = value;
  }
  
  Book.prototype.getPublisher = function () {
    return this.publisher;
  }
  
  Book.prototype.setAuthor = function (value) {
    this.author = value;
  }
  
  Book.prototype.getAuthor = function () {
    return this.author;
    }
  }
  
  function Audiobook(title,  fieldOfStudy, publisher, author, length) {
    Book.call(this, title,  fieldOfStudy, publisher, author);
     this.length = length;
  } 
  
  Audiobook.prototype = Object.create(Book.prototype);
  Audiobook.prototype.constructor = Audiobook;
  
  function Textbook(title,  fieldOfStudy, publisher, author, numberOfPages) {
    Book.call(this, title,  fieldOfStudy, publisher, author);
  
    this.numberOfPages = numberOfPages;
  
  }
  
  Textbook.prototype.constructor = Object.create(Book.prototype);
  Textbook.prototype.constructor = Textbook;