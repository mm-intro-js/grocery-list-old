var listItem = document.getElementsByTagName("li");
for (i = 0; i < listItem.length; i++) 
{
    
    ListItems = listItem[i];
    console.log(ListItems);
    
}

    var listItem = document.getElementById("grocery-list");
   
    while(listItem.hasChildNodes())
   {
        listItem.removeChild(listItem.firstChild);
   }
  



var newListItem = document.createElement("li");
var listItemValue = document.createTextNode("Bought all the groceries.");
var position = document.getElementsByTagName("ul")[0];
newListItem.appendChild(listItemValue);
position.appendChild(newListItem);


