import {myItems} from './newItems.js';
import {Items} from './newItems.js';
import {createItem} from './newItems.js';

// Function loads html structure and containers for project, items, and details
export function pageLoad() {
  const content = document.getElementById('content');

  var header = document.createElement('div');
  header.setAttribute('id', 'header');
  header.innerHTML = 'To-Do List';
  content.appendChild(header);

  var app = document.createElement('div');
  app.setAttribute('id', 'app');


  var projContainer = document.createElement('div');
  projContainer.setAttribute('id', 'projContainer');

  var projHeader = document.createElement('div');
  projHeader.setAttribute('id', 'projHeader');
  projHeader.innerHTML = 'Projects';
  projContainer.appendChild(projHeader);

  var projDefault = document.createElement('div');
  projDefault.innerHTML = 'Default';
  projDefault.setAttribute('id', 'projDefault');
  projContainer.appendChild(projDefault);

  var projButton = document.createElement('button');
  projButton.setAttribute('id','projButton');
  projButton.innerHTML = 'Add Project';
  projContainer.appendChild(projButton);
  projButton.onclick = addProject;



  var itemContainer = document.createElement('div');
  itemContainer.setAttribute('id', 'itemContainer');

  var itemHeader = document.createElement('div');
  itemHeader.setAttribute('id', 'itemHeader');
  itemHeader.innerHTML = 'Items';
  itemContainer.appendChild(itemHeader);

  var itemButton = document.createElement('button');
  itemButton.setAttribute('id','itemButton');
  itemButton.innerHTML = 'Add To-Do Item';
  itemContainer.appendChild(itemButton);
  itemButton.onclick = addItem;



  var detContainer = document.createElement('div');
  detContainer.setAttribute('id', 'detContainer');

  var detHeader = document.createElement('div');
  detHeader.setAttribute('id', 'detHeader');
  detHeader.innerHTML = 'Details';
  detContainer.appendChild(detHeader);

  app.append(projContainer, itemContainer, detContainer);



  content.appendChild(app);
};






//Function creates Add Project button
function addProject() {
  var projInput = document.createElement('input');
  projInput.setAttribute('type','text');
  projInput.setAttribute('id','projInput');
  projInput.setAttribute('placeholder','Enter Project Name');

  var projContainer = document.getElementById('projContainer');
  var projButton = document.getElementById('projButton');
  projContainer.insertBefore(projInput, projButton);

};



// Function creates Add Item button, then creates form to enter item
// then calls createItem when submit button clicked
function addItem() {
  var itemContainer = document.getElementById('itemContainer');
  var itemButton = document.getElementById('itemButton');

  var itemForm = document.createElement('form');
  itemForm.setAttribute('id','itemForm');
  itemContainer.insertBefore(itemForm, itemButton);


  var projectLabel = document.createElement('label');
  projectLabel.setAttribute('for','project');
  projectLabel.innerHTML = 'Project:';
  itemForm.appendChild(projectLabel);

  var projectInput = document.createElement('input');
  projectInput.setAttribute('type','text');
  projectInput.setAttribute('name', 'project');
  projectInput.setAttribute('id', 'projectInput');
  itemForm.appendChild(projectInput);

  var titleLabel = document.createElement('label');
  titleLabel.setAttribute('for','title');
  titleLabel.innerHTML = 'Title:';
  itemForm.appendChild(titleLabel);

  var titleInput = document.createElement('input');
  titleInput.setAttribute('type','text');
  titleInput.setAttribute('name', 'title');
  titleInput.setAttribute('id', 'titleInput');
  itemForm.appendChild(titleInput);


  var descLabel = document.createElement('label');
  descLabel.setAttribute('for','desc');
  descLabel.innerHTML = 'Description:';
  itemForm.appendChild(descLabel);

  var descInput = document.createElement('input');
  descInput.setAttribute('type','text');
  descInput.setAttribute('name', 'desc');
  descInput.setAttribute('id', 'descInput');
  itemForm.appendChild(descInput);

  var dueLabel = document.createElement('label');
  dueLabel.setAttribute('for','due');
  dueLabel.innerHTML = 'Due Date:';
  itemForm.appendChild(dueLabel);

  var dueInput = document.createElement('input');
  dueInput.setAttribute('type','text');
  dueInput.setAttribute('name', 'due');
  dueInput.setAttribute('id', 'dueInput');
  itemForm.appendChild(dueInput);

  var priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('for','priority');
  priorityLabel.innerHTML = 'Priority:';
  itemForm.appendChild(priorityLabel);

  var priorityInput = document.createElement('input');
  priorityInput.setAttribute('type','text');
  priorityInput.setAttribute('name', 'priority');
  priorityInput.setAttribute('id', 'priorityInput');
  itemForm.appendChild(priorityInput);

  var noteLabel = document.createElement('label');
  noteLabel.setAttribute('for','note');
  noteLabel.innerHTML = 'Notes:';
  itemForm.appendChild(noteLabel);

  var noteInput = document.createElement('input');
  noteInput.setAttribute('type','text');
  noteInput.setAttribute('name', 'note');
  noteInput.setAttribute('id', 'noteInput');
  itemForm.appendChild(noteInput);

  var submitForm = document.createElement('button');
  submitForm.setAttribute('id', 'submitItemForm');
  submitForm.setAttribute('type', 'button');
  submitForm.innerHTML = 'Submit Item';
  itemForm.appendChild(submitForm);

  submitForm.onclick = createItem;


}



// Function removes itemForm after submit button clicked
export function hideItemForm() {
  document.getElementById('itemForm').remove();
}


// Function that clears current items and posts all items
export function postItems() {
  var postedItems = document.querySelectorAll('.itemBox');
  postedItems.forEach(item => {
    item.remove();
  });

  for (var i = 0; i < myItems.length; i++) {
    var itemBox = document.createElement('div');
    itemBox.setAttribute('class', 'itemBox');
    detContainer.appendChild(itemBox);

    var detProject = document.createElement('div');
    detProject.setAttribute('class', 'detProject');
    detProject.innerHTML = 'Project: ' + myItems[i].project;
    itemBox.appendChild(detProject);

    var detTitle = document.createElement('div');
    detTitle.setAttribute('class', 'detTitle');
    detTitle.innerHTML = 'Title: ' + myItems[i].title;
    itemBox.appendChild(detTitle);

    var detDesc = document.createElement('div');
    detDesc.setAttribute('class', 'detDesc');
    detDesc.innerHTML = 'Description: ' + myItems[i].description;
    itemBox.appendChild(detDesc);

    var detDue = document.createElement('div');
    detDue.setAttribute('class', 'detDue');
    detDue.innerHTML = 'Due Date: ' + myItems[i].dueDate;
    itemBox.appendChild(detDue);

    var detPriority = document.createElement('div');
    detPriority.setAttribute('class', 'detPriority');
    detPriority.innerHTML = 'Priority: ' + myItems[i].priority;
    itemBox.appendChild(detPriority);

    var detNotes = document.createElement('div');
    detNotes.setAttribute('class', 'detNotes');
    detNotes.innerHTML = 'Notes: ' + myItems[i].priority;
    itemBox.appendChild(detNotes);
  }
}

