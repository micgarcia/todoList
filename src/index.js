import {myItems} from './newItems.js';

import './styles.css';
import {Items} from './newItems.js';
import {pageLoad} from './pageLoad.js';


var content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);

pageLoad();

/*
  Next steps:
  -Finish system for adding new projects
  -Implement system for knowing which project is currently selected,
    and have item form autofill project name based on selected
  -Write function that posts items based on which project is selected
  -Implement ways to delete or edit item properties
  -Only allow one form at a time
*/