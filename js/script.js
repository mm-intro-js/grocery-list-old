
var GroceryList = document.getElementsByTagName("li");
for (i= 0; i < GroceryList.length; i++) {
    CurrentItem = GroceryList[i];
    console.log(CurrentItem);
    var NextItem = CurrentItem.firstChild.nodeValue;
}
    

    while (GroceryList.length > 0) {
        var remItem = document.getElementsByTagName('li')[0];
        var contItem = remItem.parentNode;
        contItem.removeChild(remItem);
    
    }
var completeLI = document.createElement("li");
var completeLItext = document.createTextNode("Bought all the groceries.");

completeLI.appendChild(completeLItext);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(completeLI);
    
    
    
    
    