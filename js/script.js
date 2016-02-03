var listElement = document.getElementById("grocery-list"); 
var itemArray = listElement.getElementsByTagName("li");
while(itemArray.length > 0)
{
	console.log(itemArray[0].textContent);
	listElement.removeChild(itemArray[0]);
}
var newChild = document.createElement("li");
var childContent = document.createTextNode("Got the groceries");
newChild.appendChild(childContent);
listElement.appendChild(newChild);