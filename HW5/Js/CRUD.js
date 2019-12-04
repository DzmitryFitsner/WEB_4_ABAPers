var divFormGroupDef = document.createElement('div');
divFormGroupDef.className = "form-group";

before = document.getElementById("cbutton"); 
beforePU = document.getElementById("ubutton"); 

var lableCDef = document.createElement('lable');
lableCDef.setAttribute('for', 'ctitle');

var inputCDef = document.createElement('input');
inputCDef.className = 'form-control';
inputCDef.type = 'text';
inputCDef.id = 'cdef';

var def;

document.getElementById("textBook").onclick = function(){
    def = document.getElementById('textBook').value;

    before.parentNode.insertBefore(divFormGroupDef, before);
    divFormGroupDef.appendChild(lableCDef);
    divFormGroupDef.appendChild(inputCDef);

    lableCDef.innerHTML = "Number of Pages";
    inputCDef.placeholder = 'Enter Pages';

}

document.getElementById("audioBook").onclick = function() {
  def = document.getElementById("audioBook").value;

  before.parentNode.insertBefore(divFormGroupDef, before);
    divFormGroupDef.appendChild(lableCDef);
    divFormGroupDef.appendChild(inputCDef);

  lableCDef.innerHTML = "Length";
  inputCDef.placeholder = 'Enter length';

}

function onCreate(ev) {
  ev.preventDefault();

   switch (def) {
      case "textBook":
    var link = "http://localhost:2403/textbook/";

    var data = JSON.stringify({
      "title" : String(document.getElementById("ctitle").value),
      "fieldOfStady": String(document.getElementById("cfieldOfStudy").value),
      "publisher": String(document.getElementById("cpublisher").value),
      "author": String(document.getElementById("cauthor").value),
      "numberOfPage": String(document.getElementById("cdef").value)
  });
  console.log(data);
          break;
      case "audioBook":
          console.log(def);
          var link = "http://localhost:2403/audiobook/";
          var data = JSON.stringify({
            "title" : String(document.getElementById("ctitle").value),
            "fieldOfStady": String(document.getElementById("cfieldOfStudy").value),
            "publisher": String(document.getElementById("cpublisher").value),
            "author": String(document.getElementById("cauthor").value),
            "length": String(document.getElementById("cdef").value)

          });
          break;
  }
  fetch(link, {
    method: 'post',
    headers: {
        "Content-type": "application/json"
    },
    body: data
  });
}

function onRead() {
  console.log('allah');
  xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

  switch (def) {

    case "textBook":
  var link = "http://localhost:2403/textbook/";
  thRTableDef.innerHTML = "Number of Pages";
      break;

    case "audioBook":
  var link = "http://localhost:2403/audiobook/";
  thRTableDef.innerHTML = "Length";

      break;
}

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

  xhr.open("GET", link);
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

  if (document.getElementById("textBook").checked) {

    number=document.createElement('td');
    number.innerText=CPUs['numberOfPage'];
    row.appendChild(number);
    }
    else if(document.getElementById("audioBook").checked) {
      length=document.createElement('td');
      length.innerText=CPUs['length'];
      row.appendChild(length);
    }
  return row;
}

function onPrepareUpdate() {

  switch (def) {
    case "textBook":
        beforePU.parentNode.insertBefore(divFormGroupDef, beforePU);

  var link = "http://localhost:2403/textbook/";
      break;

    case "audioBook":
        beforePU.parentNode.insertBefore(divFormGroupDef, beforePU);

  var link = "http://localhost:2403/audiobook/";
      break;
}
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
  xhrids.open("GET", link);
  xhrids.setRequestHeader("Content-Type", "application/json");
  xhrids.send();
}

function onUpdate(ev) {
  ev.preventDefault();

  switch (def) {
    case "textBook":
  var link = "http://localhost:2403/textbook/";
  var data = JSON.stringify({
    "title" : String(document.getElementById("utitle").value),
    "fieldOfStady": String(document.getElementById("ufield").value),
    "publisher": String(document.getElementById("upublisher").value),
    "author": String(document.getElementById("uauthor").value),
    "numberOfPage": String(document.getElementById("cdef").value)
});
      break;
    case "audioBook":
        var link = "http://localhost:2403/audiobook/";
        var data = JSON.stringify({
          "title" : String(document.getElementById("utitle").value),
          "fieldOfStady": String(document.getElementById("ufield").value),
          "publisher": String(document.getElementById("upublisher").value),
          "author": String(document.getElementById("uauthor").value),
          "length": String(document.getElementById("cdef").value)

        });
      break;
  }
  
  console.log(data);
  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          console.log(this.responseText);
      }
  });

  xhr.open("PUT", link+document.getElementById("uid").value);
  xhr.setRequestHeader("Content-Type", "application/json");
  console.log(document.getElementById("uid").value);
  xhr.send(data);
}

function onPrepareDelete() {
  switch (def) {
    case "textBook":
  var link = "http://localhost:2403/textbook/";
      break;

    case "audioBook":
  var link = "http://localhost:2403/audiobook/";
      break;
}
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
  xhrids.open("GET", link);
  xhrids.setRequestHeader("Content-Type", "application/json");
  xhrids.send();
}

function onDelete(ev) {
  ev.preventDefault();
  xhr = new XMLHttpRequest();
 xhr.withCredentials = true;

 if (document.getElementById("textBook").checked) {
   var link = "http://localhost:2403/textbook/";
   }

   else if((document.getElementById("audioBook").checked)) {
     var link = "http://localhost:2403/audiobook/";
   }

 xhr.addEventListener("readystatechange", function () {
     if (this.readyState === 4) {
         console.log(this.responseText);
     }
 });

 xhr.open("DELETE", link + document.getElementById("did").value);
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
  document.getElementById('pubutton').addEventListener(
    'click', onPrepareUpdate
  );
  document.getElementById('ubutton').addEventListener(
      'click', onUpdate
  );
  document.getElementById('dbutton').addEventListener(
      'click', onDelete
  );
  document.getElementById('pdbutton').addEventListener(
    'click', onPrepareDelete
  );
  console.log('Handlers is set');
})()




