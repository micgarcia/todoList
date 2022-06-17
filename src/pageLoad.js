export default function pageLoad() {
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

  var itemContainer = document.createElement('div');
  itemContainer.setAttribute('id', 'itemContainer');

  var itemHeader = document.createElement('div');
  itemHeader.setAttribute('id', 'itemHeader');
  itemHeader.innerHTML = 'Items';
  itemContainer.appendChild(itemHeader);

  var detContainer = document.createElement('div');
  detContainer.setAttribute('id', 'detContainer');

  var detHeader = document.createElement('div');
  detHeader.setAttribute('id', 'detHeader');
  detHeader.innerHTML = 'Details';
  detContainer.appendChild(detHeader);

  app.append(projContainer, itemContainer, detContainer);



  content.appendChild(app);
}