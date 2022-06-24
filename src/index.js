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
  -Implement ways to edit item properties
  -Add date api to date input
  -Style layout of page
*/