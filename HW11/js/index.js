"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(name, lastName, dataOfBirth) {
  _classCallCheck(this, User);

  var _name = name;
  var _lastName = lastName;
  var _dataOfBirth = dataOfBirth;

  this.getName = function () {
    return _name;
  };

  this.getLastName = function () {
    return _lastName;
  };

  this.getDataOfBirth = function () {
    return _dataOfBirth;
  };
};

var Worker = function (_User) {
  _inherits(Worker, _User);

  function Worker(name, lastName, dataOfBirth, place) {
    _classCallCheck(this, Worker);

    var _this = _possibleConstructorReturn(this, (Worker.__proto__ || Object.getPrototypeOf(Worker)).call(this, name, lastName, dataOfBirth));

    var _place = place;

    _this.getPlace = function () {
      return _place;
    };
    return _this;
  }

  return Worker;
}(User);

var nikol = new User("Nikol", "Barabash", "27.06.99");
var dzmitry = new Worker("Dzmitry", "Fitsner", "27.06.99", "Minsk");

console.log(nikol.getName());
console.log(dzmitry.getPlace());
console.log(dzmitry.getName());