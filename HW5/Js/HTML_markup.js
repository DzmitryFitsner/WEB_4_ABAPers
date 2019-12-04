var divContainer = document.createElement('div');
divContainer.className = "container";

document.body.append(divContainer);

var divPositionBoot = document.createElement('div');
divPositionBoot.className = "row justify-content-md-center";
divContainer.appendChild(divPositionBoot);

// def
var defDivCard_body = document.createElement('div');
defDivCard_body.className = "card-body";

var formCreate = document.createElement('form');
formCreate.id = "createForm";
defDivCard_body.appendChild(formCreate);

var divFormGroup = document.createElement('div');
divFormGroup.className = "form-group";
formCreate.appendChild(divFormGroup);

//DEF
var labelDef = document.createElement('label');
labelDef.className = 'row';
labelDef.for = "cvariety";
labelDef.innerHTML = "DEF";
divFormGroup.appendChild(labelDef);

var divInputText = document.createElement('div');
divInputText.className = "text_radio";

var inputTextbook = document.createElement('input');
inputTextbook.className = "radio-inline";
inputTextbook.type = "radio";
inputTextbook.id = "textBook";
inputTextbook.name = "drone";
inputTextbook.value = "textBook";

var lableTextbook = document.createElement('label');
lableTextbook.className ='textBook';
lableTextbook.for = "textBook";
lableTextbook.innerHTML = "Textbook";

divFormGroup.appendChild(inputTextbook);
divFormGroup.appendChild(lableTextbook);

var inputAudiobook = document.createElement('input');
inputAudiobook.className = "radio-inline";
inputAudiobook.type = "radio";
inputAudiobook.id = "audioBook";
inputAudiobook.name = "drone";
inputAudiobook.value = "audioBook";

var lableAudiobook = document.createElement('label');
lableAudiobook.className = 'audioBook';
lableAudiobook.for = "audioBook";
lableAudiobook.innerHTML = "Audiobook";

divFormGroup.appendChild(inputAudiobook);
divFormGroup.appendChild(lableAudiobook);

var divAccordion = document.createElement('div');
divAccordion.className = "accordion";
divAccordion.id = "accordionExample";
formCreate.appendChild(divAccordion);

var divCard = document.createElement('div');
divCard.className = "card";
divAccordion.appendChild(divCard);

//Create
var divCard_header = document.createElement('div');
divCard_header.className = "card-header";
divCard_header.id = "headingOne";
divCard.appendChild(divCard_header);

var h_5 = document.createElement('h5');
h_5.className = "mb-0";
divCard_header.appendChild(h_5);

var btnCreate = document.createElement('button');
btnCreate.className = "btn btn-link";
btnCreate.type = "button";
btnCreate.id = "pcbutton";
btnCreate.setAttribute('data-toggle', "collapse");
btnCreate.setAttribute('data-target', "#collapseOne");
btnCreate.setAttribute('aria-expanded', "true");
btnCreate.setAttribute('aria-controls', "collapseOne");
btnCreate.innerHTML="Create";
h_5.appendChild(btnCreate);

var divCollapseOne = document.createElement('div');
divCollapseOne.className = "collapse";
divCollapseOne.id = "collapseOne";
divCollapseOne.setAttribute('aria-labelledby', "headingOne");
divCollapseOne.setAttribute('data-parent', "#accordionExample");
divCard.appendChild(divCollapseOne);

var divCreateCard_body = document.createElement('div');
divCreateCard_body.className ="card-body";
divCollapseOne.appendChild(divCreateCard_body);

var divForm_groupT = document.createElement('div');
divForm_groupT.className = "form-group";
divCreateCard_body.appendChild(divForm_groupT);

var lableCTitle = document.createElement('lable');
lableCTitle.setAttribute('for', 'ctitle');
lableCTitle.innerHTML = "Title";
divForm_groupT.appendChild(lableCTitle);

var inputCTitle = document.createElement('input');
inputCTitle.className = 'form-control';
inputCTitle.type = 'text';
inputCTitle.id = 'ctitle';
inputCTitle.placeholder = 'Enter title';
divForm_groupT.appendChild(inputCTitle);

var divForm_groupT = document.createElement('div');
divForm_groupT.className = "form-group";
divCreateCard_body.appendChild(divForm_groupT);

var lableCField = document.createElement('lable');
lableCField.setAttribute('for', 'cfieldOfStudy');
lableCField.innerHTML = "Field of study";
divForm_groupT.appendChild(lableCField);

var lableCField = document.createElement('input');
lableCField.className = 'form-control';
lableCField.type = 'text';
lableCField.id = 'cfieldOfStudy';
lableCField.placeholder = 'Enter field of study';
divForm_groupT.appendChild(lableCField);

var divForm_groupT = document.createElement('div');
divForm_groupT.className = "form-group";
divCreateCard_body.appendChild(divForm_groupT);

var lableCPublisher = document.createElement('lable');
lableCPublisher.setAttribute('for', 'cpublisher');
lableCPublisher.innerHTML = "Publisher";
divForm_groupT.appendChild(lableCPublisher);

var lableCPublisher = document.createElement('input');
lableCPublisher.className = 'form-control';
lableCPublisher.type = 'text';
lableCPublisher.id = 'cpublisher';
lableCPublisher.placeholder = 'Enter publisher';
divForm_groupT.appendChild(lableCPublisher);


var divForm_groupT = document.createElement('div');
divForm_groupT.className = "form-group";
divCreateCard_body.appendChild(divForm_groupT);

var lableCAuthor = document.createElement('lable');
lableCAuthor.setAttribute('for', 'cauthor');
lableCAuthor.innerHTML = "Author";
divForm_groupT.appendChild(lableCAuthor);

var lableCAuthor = document.createElement('input');
lableCAuthor.className = 'form-control';
lableCAuthor.type = 'text';
lableCAuthor.id = 'cauthor';
lableCAuthor.placeholder = 'Enter author';
divForm_groupT.appendChild(lableCAuthor);

var buttonCSubmit = document.createElement('button');
buttonCSubmit.type = 'submit';
buttonCSubmit.id = 'cbutton';
buttonCSubmit.className = 'btn btn-primary';
buttonCSubmit.innerHTML = "Submit";
divCreateCard_body.appendChild(buttonCSubmit);

//Read
var divRCard = document.createElement('div');
divRCard.className = "card";
divAccordion.appendChild(divRCard);

var divRCard_header = document.createElement('div');
divRCard_header.className = "card-header";
divRCard_header.id = "headingTwo";
divRCard.appendChild(divRCard_header);

var h_5 = document.createElement('h5');
h_5.className = "mb-0";
divRCard_header.appendChild(h_5);

var btnRead = document.createElement('button');
btnRead.className = "btn btn-link";
btnRead.type = "button";
btnRead.id = "rbutton";
btnRead.setAttribute('data-toggle', "collapse");
btnRead.setAttribute('data-target', "#collapseTwo");
btnRead.setAttribute('aria-expanded', "true");
btnRead.setAttribute('aria-controls', "collapseTwo");
btnRead.innerHTML="Read";
h_5.appendChild(btnRead);

var divCollapseTwo = document.createElement('div');
divCollapseTwo.className = "collapse";
divCollapseTwo.id = "collapseTwo";
divCollapseTwo.setAttribute('aria-labelledby', "headingTwo");
divCollapseTwo.setAttribute('data-parent', "#accordionExample");
divRCard.appendChild(divCollapseTwo);

var divReadCard_body = document.createElement('div');
divReadCard_body.className ="card-body";
divCollapseTwo.appendChild(divReadCard_body);

var tableR = document.createElement('table');
tableR.className = 'table';
divReadCard_body.appendChild(tableR);

var theadR = document.createElement('thead');
tableR.appendChild(theadR);

var trR = document.createElement('tr');
trR.id = 'table_id';
theadR.appendChild(trR);

var thRTableId = document.createElement('th');
thRTableId.scope = 'col';
thRTableId.innerHTML = "#";
trR.appendChild(thRTableId);

var thRTableTitle = document.createElement('th');
thRTableTitle.scope = 'col';
thRTableTitle.innerHTML = "Title";
trR.appendChild(thRTableTitle);

var thRTableField = document.createElement('th');
thRTableField.scope = 'col';
thRTableField.innerHTML = "Field of Study";
trR.appendChild(thRTableField);

var thRTablePublisher = document.createElement('th');
thRTablePublisher.scope = 'col';
thRTablePublisher.innerHTML = "Publisher";
trR.appendChild(thRTablePublisher);

var thRTableAuthor = document.createElement('th');
thRTableAuthor.scope = 'col';
thRTableAuthor.innerHTML = "Author";
trR.appendChild(thRTableAuthor);

var thRTableDef = document.createElement('th');
thRTableDef.scope = 'col';
// thRTableDef.innerHTML = "Author";
trR.appendChild(thRTableDef);


var tbodyTable = document.createElement('tbody');
tbodyTable.id = 'rTBody';
tableR.appendChild(tbodyTable);

//Update
var divUCard = document.createElement('div');
divUCard.className = "card";
divAccordion.appendChild(divUCard);

var divUCard_header = document.createElement('div');
divUCard_header.className = "card-header";
divUCard_header.id = "headingThree";
divUCard.appendChild(divUCard_header);

var h_5U = document.createElement('h5');
h_5U.className = "mb-0";
divUCard_header.appendChild(h_5U);

var btnUpdate = document.createElement('button');
btnUpdate.className = "btn btn-link";
btnUpdate.type = "button";
btnUpdate.id = "pubutton";
btnUpdate.setAttribute('data-toggle', "collapse");
btnUpdate.setAttribute('data-target', "#collapseThree");
btnUpdate.setAttribute('aria-expanded', "true");
btnUpdate.setAttribute('aria-controls', "collapseThree");
btnUpdate.innerHTML="Update";
h_5U.appendChild(btnUpdate);

var divCollapseThree = document.createElement('div');
divCollapseThree.className = "collapse";
divCollapseThree.id = "collapseThree";
divCollapseThree.setAttribute('aria-labelledby', "headingThree");
divCollapseThree.setAttribute('data-parent', "#accordionExample");
divUCard.appendChild(divCollapseThree);

var divUpdateCard_body = document.createElement('div');
divUpdateCard_body.className ="card-body";
divCollapseThree.appendChild(divUpdateCard_body);

var formUpdate = document.createElement('form');
formUpdate.id = 'updateForm';
divUpdateCard_body.appendChild(formUpdate);

var divFormGroupId = document.createElement('div');
divFormGroupId.className = 'form-group';
formUpdate.appendChild(divFormGroupId);

var lableId = document.createElement('lable');
lableId.setAttribute('for', 'uid');
lableId.innerHTML ='Id';
divFormGroupId.appendChild(lableId);

var selectId = document.createElement('select');
selectId.id = 'uid';
selectId.className = 'form-control'; 
divFormGroupId.appendChild(selectId);

var divFormGroupTitle = document.createElement('div');
divFormGroupTitle.className = 'form-group';
formUpdate.appendChild(divFormGroupTitle);

var lableUTitle = document.createElement('lable');
lableUTitle.setAttribute('for', 'utitle');
lableUTitle.innerHTML ='Title';
divFormGroupTitle.appendChild(lableUTitle);

var inputUTitle = document.createElement('input');
inputUTitle.type = 'text';
inputUTitle.className = 'form-control';
inputUTitle.id = 'utitle';
inputUTitle.placeholder = 'Enter title';
divFormGroupTitle.appendChild(inputUTitle);


var divFormGroupField = document.createElement('div');
divFormGroupField.className = 'form-group';
formUpdate.appendChild(divFormGroupField);

var lableUField = document.createElement('lable');
lableUField.setAttribute('for', 'ufield');
lableUField.innerHTML ='Field of study';
divFormGroupField.appendChild(lableUField);

var inputUField = document.createElement('input');
inputUField.type = 'text';
inputUField.className = 'form-control';
inputUField.id = 'ufield';
inputUField.placeholder = 'Enter field of Study';
divFormGroupField.appendChild(inputUField);

//Publisher

var divFormGroupPublisher = document.createElement('div');
divFormGroupPublisher.className = 'form-group';
formUpdate.appendChild(divFormGroupPublisher);

var lableUPublisher = document.createElement('lable');
lableUPublisher.setAttribute('for', 'upublisher');
lableUPublisher.innerHTML ='Publisher';
divFormGroupPublisher.appendChild(lableUPublisher);

var inputUPublisher = document.createElement('input');
inputUPublisher.type = 'text';
inputUPublisher.className = 'form-control';
inputUPublisher.id = 'upublisher';
inputUPublisher.placeholder = 'Enter Publisher';
divFormGroupPublisher.appendChild(inputUPublisher);

//Author
var divFormGroupAuthor = document.createElement('div');
divFormGroupAuthor.className = 'form-group';
formUpdate.appendChild(divFormGroupAuthor);

var lableUAuthor = document.createElement('lable');
lableUAuthor.setAttribute('for', 'uauthor');
lableUAuthor.innerHTML ='Author';
divFormGroupAuthor.appendChild(lableUAuthor);

var inputUAuthor = document.createElement('input');
inputUAuthor.type = 'text';
inputUAuthor.className = 'form-control';
inputUAuthor.id = 'uauthor';
inputUAuthor.placeholder = 'Enter Author';
divFormGroupAuthor.appendChild(inputUAuthor);

var buttonUSubmit = document.createElement('button');
buttonUSubmit.type = 'submit';
buttonUSubmit.id = 'ubutton';
buttonUSubmit.className = 'btn btn-primary';
buttonUSubmit.innerHTML = "Submit";
formUpdate.appendChild(buttonUSubmit);

//Delete
var divDCard = document.createElement('div');
divDCard.className = "card";
divAccordion.appendChild(divDCard);

var divDCard_header = document.createElement('div');
divDCard_header.className = "card-header";
divDCard_header.id = "headingFour";
divDCard.appendChild(divDCard_header);

var h_5D = document.createElement('h5');
h_5D.className = "mb-0";
divDCard_header.appendChild(h_5D);

var btnDelete = document.createElement('button');
btnDelete.className = "btn btn-link";
btnDelete.type = "button";
btnDelete.id = "pdbutton";
btnDelete.setAttribute('data-toggle', "collapse");
btnDelete.setAttribute('data-target', "#collapseFour");
btnDelete.setAttribute('aria-expanded', "true");
btnDelete.setAttribute('aria-controls', "collapseFour");
btnDelete.innerHTML="Delete";
h_5D.appendChild(btnDelete);

var divCollapseFour = document.createElement('div');
divCollapseFour.className = "collapse";
divCollapseFour.id = "collapseFour";
divCollapseFour.setAttribute('aria-labelledby', "headingFour");
divCollapseFour.setAttribute('data-parent', "#accordionExample");
divDCard.appendChild(divCollapseFour);

var divDeleteCard_body = document.createElement('div');
divDeleteCard_body.className ="card-body";
divCollapseFour.appendChild(divDeleteCard_body);

var formDelete = document.createElement('form');
formDelete.id = 'deleteForm'; 
divDeleteCard_body.appendChild(formDelete);

var divFormGroupDId = document.createElement('div');
divFormGroupDId.className = 'form-group';
formDelete.appendChild(divFormGroupDId);

var lableDelete = document.createElement('lable');
lableDelete.setAttribute('for', 'did');
lableDelete.innerHTML ='Id';
divFormGroupDId.appendChild(lableDelete);

var selectDelete = document.createElement('select');
selectDelete.id ='did';
selectDelete.className = 'form-control';
divFormGroupDId.appendChild(selectDelete);

var buttonDSubmit = document.createElement('button');
buttonDSubmit.type = 'submit';
buttonDSubmit.id ='dbutton';
buttonDSubmit.className ='btn btn-primary';
buttonDSubmit.innerHTML ='Submit';
divDeleteCard_body.appendChild(buttonDSubmit);

divPositionBoot.appendChild(defDivCard_body);
defDivCard_body.appendChild(divAccordion);




