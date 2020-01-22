// "user strict";

class User{
  constructor(name, lastName, dataOfBirth){
    this.name = name;
    this.lastName = lastName;
    this.dataOfBirth = dataOfBirth;
}

get name() {
  return this._name;
};
set name(name) {
  this._name = name;
};

get lastName() {
  return this._lastName;
};
set lastName(lastName) {
  this._lastName = lastName;
};

get dataOfBirth() {
  return this._dataOfBirth;
};
set dataOfBirth(dataOfBirth) {
  this._dataOfBirth = dataOfBirth;
}

getInfoAboutUser() {
  return (
      "Name: " + this.name + "\n" +
      "Last Name: " + this.lastName + "\n" +
      "Data of Birth" + this.dataOfBirth
  );
};
    
getInfoAboutUserToHtml() {
  return (
      "<br>Name: " + this.name + "</br>" +
      "<br>Last Name: " + this.lastName + "</br>" +
      "<br>Data of Birth: " + this.dataOfBirth + "</br>" 
  );
}

}








