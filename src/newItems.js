export var myItems = [];

import {myProjects} from './pageLoad.js';
import {currentProject} from './pageLoad.js';
import {hideItemForm} from './pageLoad.js';
import {postItems} from './pageLoad.js';
import {addItemToStorage} from './pageLoad.js';

export function Items(project, title, description, dueDate, priority, notes, id) {
  this.project = project;
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.id = id;
};

var idCounter = 0;

export function createItem() {
  var project = document.getElementById('projectInput').value;
  var title = document.getElementById('titleInput').value;
  var description = document.getElementById('descInput').value;
  var dueDate = document.getElementById('dueInput').value;
  var priority = document.getElementById('priorityInput').value;
  var notes = document.getElementById('noteInput').value;
  var id = idCounter;
  idCounter++;


  var item = new Items(project, title, description, dueDate, priority, notes, id);
  myItems.push(item);
  addItemToStorage();
  hideItemForm();
  postItems();

}

