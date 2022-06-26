import {myItems} from './newItems.js';

import './styles.css';
import {Items} from './newItems.js';
import {pageLoad} from './pageLoad.js';

var font = document.createElement('style');
font.innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap');";
document.body.appendChild(font);

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