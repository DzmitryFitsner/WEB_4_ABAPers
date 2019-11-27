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
  // this.setLength = function (value) {
  //   length = value;
  // }
  // this.getLength = function () {
  //   return length;
  // }
} 

Audiobook.prototype = Object.create(Book.prototype);
Audiobook.prototype.constructor = Audiobook;

function Textbook(title,  fieldOfStudy, publisher, author, numberOfPages) {
  Book.call(this, title,  fieldOfStudy, publisher, author);

  this.numberOfPages = numberOfPages;

}

Textbook.prototype.constructor = Object.create(Book.prototype);
Textbook.prototype.constructor = Textbook;

  var elem = document.createElement("div"); 

document.getElementById("textBook").onclick = function(){

  // console.log(document.getElementById("textBook").value);

    var elemT = document.createElement("div"),
    before = document.getElementById("before"); 
    elemT.setAttribute('class', 'form-group');
    elemT.id="show_input"; 
     
    elem.id = "element";
    before.parentNode.insertBefore(elem, before);
  
    document.getElementById("element").innerHTML = "";

      var labT = document.createElement("label");
      labT.setAttribute('for', 'cnamberOfPages');
      labT.innerText = "Number of pages";
  
      var inpT = document.createElement("input");
      inpT.setAttribute('type', 'text');
      inpT.setAttribute('class', 'form-control');
      inpT.setAttribute('id', 'cnumberOfPages');
      inpT.setAttribute('placeholder', 'Enter number');
   
    elemT.appendChild(labT);
    elemT.appendChild(inpT);

    
    elem.appendChild(elemT);  
}


document.getElementById("audioBook").onclick = function() {
  console.log(document.getElementById("audioBook").value);

    var elemA = document.createElement("div"),
    before = document.getElementById("before"); 
  elemA.setAttribute('class', 'form-group');
  elemA.id="show_input"; 

  elem.id = "element";
    before.parentNode.insertBefore(elem, before);
  
    document.getElementById("element").innerHTML = "";

    var labA = document.createElement("label");
     labA.setAttribute('for', 'clength');
     labA.innerText = "Lenght"
    

    var inpA = document.createElement("input");
    inpA.setAttribute('type', 'text');
    inpA.setAttribute('class', 'form-control');
    inpA.setAttribute('id', 'clength');
    inpA.setAttribute('placeholder', 'Enter length');
  

  elemA.appendChild(labA);
  elemA.appendChild(inpA);

  elem.appendChild(elemA);

}




function onCreate(ev) {
  ev.preventDefault();

if (document.getElementById("textBook").checked)
{
  console.log("yes text book");
  var data = JSON.stringify({
    "title" : String(document.getElementById("ctitle").value),
    "fieldOfStady": String(document.getElementById("cfieldOfStudy").value),
    "publisher": String(document.getElementById("cpublisher").value),
    "author": String(document.getElementById("cauthor").value),
    "numberOfPage": String(document.getElementById("cnumberOfPages").value)
});
console.log(data);

xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        alert(this.responseText);
        document.getElementById("createForm").dispatchEvent(new Event('submit'));
    } 
});

xhr.open("POST", "http://localhost:2403/textbook");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(data);
}

 else if(document.getElementById("audioBook").checked) {
  var data = JSON.stringify({
    "title" : String(document.getElementById("ctitle").value),
    "fieldOfStady": String(document.getElementById("cfieldOfStudy").value),
    "publisher": String(document.getElementById("cpublisher").value),
    "author": String(document.getElementById("cauthor").value),
    "length": String(document.getElementById("clength").value)
});
console.log(data);

xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        alert(this.responseText);
        document.getElementById("createForm").dispatchEvent(new Event('submit'));
    } 
});

xhr.open("POST", "http://localhost:2403/audiobook");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(data);

 }
  };

function onRead() {
    console.log('allah');
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {

      if (this.readyState === 4) {

          result=JSON.parse(this.response);
          var resultTBody=document.createElement('tbody');

          result.map(function(nthCPU){
              resultTBody.appendChild(parseCPUToTableRow(nthCPU));
          });

          var table=document.getElementById('rTBody').parentElement;
          table.replaceChild(resultTBody,document.getElementById('rTBody'));
          resultTBody.id='rTBody';
      }

  });

    xhr.open("GET", "http://localhost:2403/textbook");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}



function parseCPUToTableRow(CPUs){
  var row=document.createElement('tr');

  id=document.createElement('th');
  id.innerText=CPUs['id'];
  row.appendChild(id);

  title=document.createElement('td');
  title.innerText=CPUs['title'];
  row.appendChild(title);

  fieldOfStudy=document.createElement('td');
  fieldOfStudy.innerText=CPUs['fieldOfStady'];
  row.appendChild(fieldOfStudy);
 
  publisher=document.createElement('td');
  publisher.innerText=CPUs['publisher'];
  row.appendChild(publisher);
  
  author=document.createElement('td');
  author.innerText=CPUs['author'];
  row.appendChild(author);

  number=document.createElement('td');
  number.innerText=CPUs['numberOfPage'];
  row.appendChild(number);

  return row;
}

function onPrepareUpdate(ev){
  ev.preventDefault();
  xhrids = new XMLHttpRequest();
  xhrids.withCredentials = true;

  xhrids.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          //console.log(this.response);
          result=JSON.parse(this.response);
          var ids=document.createElement('select');
          ids.className='form-control';
          result.map(function(nthCPU){
              var id=document.createElement('option');
              id.innerHTML=nthCPU['id'];
              ids.appendChild(id);
          });
          var form=document.getElementById('uid').parentElement;
          form.replaceChild(ids,document.getElementById('uid'));
          ids.id='uid';
      }
  });
  xhrids.open("GET", "http://localhost:2403/hw3");
  xhrids.setRequestHeader("Content-Type", "application/json");
  xhrids.send();
}


function onUpdate(ev) {
  ev.preventDefault();

  var data = JSON.stringify({
    "title" : String(document.getElementById("utitle").value),
    "fieldOfStady": String(document.getElementById("ufieldOfStady").value),
    "publisher": String(document.getElementById("upublisher").value),
    "author": String(document.getElementById("uauthor").value)
  });
  console.log(data);
  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          console.log(this.responseText);
      }
  });

  xhr.open("PUT", "http://localhost:2403/hw3/"+document.getElementById("uid").value);
  xhr.setRequestHeader("Content-Type", "application/json");
  console.log(document.getElementById("uid").value);
  xhr.send(data);
}

function onPrepareDelete(ev){
  ev.preventDefault();
  xhrids = new XMLHttpRequest();
  xhrids.withCredentials = true;

  xhrids.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          result=JSON.parse(this.response);
          var ids=document.createElement('select');
          ids.className='form-control';
          result.map(function(nthCPU){
              var id=document.createElement('option');
              id.innerHTML=nthCPU['id'];
              ids.appendChild(id);
          });
          var form=document.getElementById('did').parentElement;
          form.replaceChild(ids,document.getElementById('did'));
          ids.id='did';
      }
  });
  xhrids.open("GET", "http://localhost:2403/hw3");
  xhrids.setRequestHeader("Content-Type", "application/json");
  xhrids.send();
}


function onDelete(ev) {
  ev.preventDefault();
   xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          console.log(this.responseText);
      }
  });

  xhr.open("DELETE", "http://localhost:2403/hw3/"+document.getElementById("did").value);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
}

(function () {

  document.getElementById('cbutton').addEventListener(
      'click',  onCreate 
  );
  document.getElementById('rbutton').addEventListener(
      'click', onRead
  );
  document.getElementById('ubutton').addEventListener(
      'click', onUpdate
  );
  document.getElementById('pubutton').addEventListener(
      'click', onPrepareUpdate
  );
  document.getElementById('dbutton').addEventListener(
      'click', onDelete
  );
  document.getElementById('pdbutton').addEventListener(
    'click', onPrepareDelete
);
  console.log('Handlers is set');
})()