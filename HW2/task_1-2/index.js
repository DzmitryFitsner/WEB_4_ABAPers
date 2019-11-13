  
function goToGoogle() {
  window.location = "http://google.com/";
}

function clearAll() {
  document.getElementById("changedName").innerHTML = "";
}


function chName() {
  var txt;
  var person = prompt("Please enter your name:", "Dzmitry Fitsner");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
    document.getElementById("changedName").innerHTML = txt;
  }
  else {
  
  if (/[0-9]/.test(person)) {
    document.getElementById("changedName").innerHTML = person.split("").reverse().join("");
  }

  else 
    person = person.split("");
    for (i = 0; i < person.length; i++) {
        if (i % 2 == 0) {
            person[i] = person[i].toUpperCase();
        } else {
            person[i] = person[i].toLowerCase();
        }
    }
    person = person.join("");
    document.getElementById("changedName").innerHTML = "Hello " + person + "! How are you today?";;
  }
}

var timeoutID = window.setTimeout(chName, 2000);

  
  

