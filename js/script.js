

var allListItems = document.getElementsByTagName('li');
var myItem, myItemParent;

// Log each item in the list to the console.
if (allListItems.length > 0)
{
    var itemCount = allListItems.length;
    
    console.log('\nOriginal list contains: ');
    for (var i=0; i < itemCount; i++)
    {
        myItem = allListItems[i];
        console.log(myItem.innerHTML);
    }
    
    // Remove each item from the list.
    console.log('\nRemobing items:');
    for (var i=itemCount -1; i >= 0; i--)
    {
        myItem = allListItems[i];
        myItemParent = myItem.parentElement;
        
        console.log(myItem.innerHTML);
        myItemParent.removeChild(myItem);
    }
}

// create a new list item and text, add it to the list
var newListItem = document.createElement('li');
var newText = document.createTextNode('Bought all the groceries.');

newListItem.appendChild(newText);

var myList = document.getElementById('grocery-list');

if (myList != null) 
{
    myList.appendChild(newListItem);
}
