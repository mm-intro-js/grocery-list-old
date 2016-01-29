//Write JavaScript to get all the list items (get them by tag name) and loop through all of them. 
//For each list item, 
    //log the text to the console and 
    //then remove the list item.

var groceryListItems = document.getElementsByTagName('li');
var itemsToBuy = groceryListItems.length;

console.log('You have ' + itemsToBuy + ' items to buy!');


if (groceryListItems.length>0){
    while (groceryListItems.length >0) {
        var thisItem = groceryListItems[0];
        console.log('Purchasing: ' + thisItem.textContent);
        var itemParent = thisItem.parentNode;
        itemParent.removeChild(thisItem);
        console.log(groceryListItems.length + ' item\(s\) remaining!');
    }
}

//When the list is empty, 
        //get the unordered list element by ide, 
        //then add a new list item that says "Bought all the groceries."


if (groceryListItems.length === 0) {
    
    var finished = document.createElement('li');
    
    var finishedMsg = document.createTextNode('Bought all the groceries!');
    
    finished.appendChild(finishedMsg);
    
    var groceryListNode = document.getElementById('grocery-list');

    groceryListNode.appendChild(finished);
     
}