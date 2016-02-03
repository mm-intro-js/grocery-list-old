//  Get array of <li> items.
var items = document.getElementsByTagName("li");

//  Loop through them pushing text to the console, and hiding them after they are read.
for (i = 0; i < items.length; i++)
    {
        console.log(items[i].textContent);       
        items[i].className = "hide";
    }

//  <ul> is now empty. Creating a single list item to populate it.
var itemsDoneLitag = document.createElement("li");
var itemsDoneStr = document.createTextNode("Bought all the groceries.");
itemsDoneLitag.appendChild(itemsDoneStr);
                
var itemsDone = document.getElementById("grocery-list");
itemsDone.appendChild(itemsDoneLitag);