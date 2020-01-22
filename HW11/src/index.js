const express = require('express');
const app = express();
const port = 3000;

// const User = require('./User.js');
// const Worker = require('./Worker');

class User{
  constructor(name, lastName, dataOfBirth){
    this.name = name;
    this.lastName = lastName;
    this.dataOfBirth = dataOfBirth;
};

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
    
getInfoAboutUserToHtml() {
  return (
      "<br>Name: " + this.name + "</br>" +
      "<br>Last Name: " + this.lastName + "</br>" +
      "<br>Data of Birth: " + this.dataOfBirth + "</br>" 
  );
};

}

class Worker extends User{
  constructor(name, lastName, dataOfBirth, place){
    super(name, lastName, dataOfBirth)

      this.place = place;
  };

  get place() {
    return this._place;
  };
  set place(place) {
    this._place = place;
  };

  getInfoAboutWorkerToHtml() {
    return (
        "<br>Name: " + this.name + "</br>" +
        "<br>Last Name: " + this.lastName + "</br>" +
        "<br>Data of Birth: " + this.dataOfBirth + "</br>" +
        "<br>Place: " + this.place + "</br>"
    );
  };
}

const users = [];
let workers = [];

let nikol = new User("Nikol", "Barabash", "27.06.99");
let dzmitry = new Worker("Dzmitry", "Fitsner", "27.06.99", "Minsk");

users.push(nikol);
workers.push(dzmitry);

app.get('/', (req, res) => {
  res.send(`
  <body>
      <h2>Users:</h2>
      <h4>
      <div><br>${nikol.getInfoAboutUserToHtml()}</br></div>

      </h4>
      <h2>Workers:</h2>
      <h4>
      <div><br>${dzmitry.getInfoAboutWorkerToHtml()}</br></div>

      </h4>
  </body>
  `);
});

app.post("/Users", function(req, res) {
  console.log(req.body.kek);
  res.send(JSON.stringify(users));
});

app.post('/', function (req, res) {
  res.send(`    
  <body>
      <h2>Users:</h2>
      <h4>
      <div><br>${nikol.getInfoAboutUserToHtml()}</br></div>
      </h4>
</body>`)
});

app.put('/', function (req, res) {
  res.send(`    
  <body>
      <h2>Users:</h2>
      <h4>
      <div><br>${nikol.getInfoAboutUserToHtml()}</br></div>
      </h4>
</body>`)
});

app.delete('/', function (req, res) {
  res.send(nikol.getInfoAboutUserToHtml());
})


app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}/`);
});



