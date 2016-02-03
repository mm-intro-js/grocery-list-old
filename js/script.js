// Get all the list items

var listItems = document.getElementsByTagName('li');
console.log("Grocery List");

// If the list contains the items,
//Write the list to the console

if (listItems.length > 0) {
	
	for (var i = 0; i < listItems.length; i++) {
		console.log(listItems[i]);
	}
}


//Removing the list items
for (var i = (listItems.length) - 1; i >= 0; i--) {
	var container = listItems[i].parentNode;
	container.removeChild(listItems[i]);
	}

//Adding a new list item

//Create a new list element
var newListItem = document.createElement('li');

//Create a text node 
var newText = document.createTextNode('Bought all the groceries');

//Attach the text to the element
newListItem.appendChild(newText);

//Getting the unordered list element
document.getElementById('grocery-list').appendChild(newListItem);