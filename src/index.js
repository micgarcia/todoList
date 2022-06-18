import {myItems} from './newItems.js';

import './styles.css';
import {Items} from './newItems.js';
import {pageLoad} from './pageLoad.js';


var content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);

pageLoad();

/*
  Project Outline:
  -Create new .js file that contains constructor function that
    creates todo items with different properties
  -Setup html structure of todo app
    -Should include sidebars for different projects and their
     todo items, etc
  -Create separate module(s) that append new todo items to DOM
  -Create separate module(s) to edit todos, mark them complete, etc

*/