var liGroceryList = document.getElementsByTagName('li');
var liCount = liGroceryList.length;                        
var ulGroceries = document.getElementById('grocery-list'); 

//** Loops for the count of list items
for (var i = 0; i < liCount; i++) {                         
    console.log(liGroceryList[0].firstChild.nodeValue);
    ulGroceries.removeChild(ulGroceries.children[0]);
}

//** Create new li
var liBought = document.createElement("li").appendChild(document.createTextNode("Bought all the groceries."));

//** Append li to Groceries unordered list
ulGroceries.appendChild(liBought);