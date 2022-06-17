export default function Items(title, description, dueDate, priority, notes) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
};

export default function addItemToList() {
  var title = document.getElementById('titleInput').value;
  var description = document.getElementById('descInput').value;
  var dueDate = document.getElementById('dueInput').value;
  var priority = document.getElementById('priorityInput').value;
  var notes = document.getElementById('notesInput').value;

  var item = new Items(title, description, dueDate, priority, notes);
  myItems.push(item);
}