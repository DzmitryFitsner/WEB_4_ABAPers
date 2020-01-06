class User{
  constructor(name, lastName, dataOfBirth){
    let _name = name;
    let _lastName = lastName;
    let _dataOfBirth = dataOfBirth;

    this.getName = function(){
      return _name;
    }

    this.getLastName = function(){
      return _lastName;
    }

    this.getDataOfBirth = function(){
      return _dataOfBirth;
    }
  }  
}

class Worker extends User{
  constructor(name, lastName, dataOfBirth, place){
    super(name, lastName, dataOfBirth)
      let _place = place;

    this.getPlace = function(){
      return _place;
    }
  }
}

var nikol = new User("Nikol", "Barabash", "27.06.99");
var dzmitry = new Worker("Dzmitry", "Fitsner", "27.06.99", "Minsk");

console.log(nikol.getName());
console.log(dzmitry.getPlace());
console.log(dzmitry.getName());

