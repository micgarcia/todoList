function Items(project, title, description, dueDate, priority, notes) {
  this.project = project;
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
};

function addItemToList() {
  var project = document.getElementById('projectInput').value;
  var title = document.getElementById('titleInput').value;
  var description = document.getElementById('descInput').value;
  var dueDate = document.getElementById('dueInput').value;
  var priority = document.getElementById('priorityInput').value;
  var notes = document.getElementById('notesInput').value;

  var item = new Items(project, title, description, dueDate, priority, notes);
  myItems.push(item);
}

export {Items, addItemToList};