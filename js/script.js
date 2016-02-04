function gclear()
 {

var glist = document.getElementById("grocery-list"); 
var GroceryArray = document.getElementsByTagName("li"); 

     
     //main loop set up
     
while(GroceryArray.length > 0) 
{ 
    console.log(GroceryArray[0].textContent);
    glist.removeChild(GroceryArray[0]);
    
    
    
}
 
     /*
 //POST ISSUE it's not working  
     Should be posting
     var newlist = document.createElement("li");
     
     var newlistitem document.createTextNode("Groceries Aquired");
     
     newlist.appendChild(newlistitem);
     
     */
     

 }
gclear();
