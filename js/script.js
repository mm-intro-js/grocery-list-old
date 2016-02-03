



var list = document.getElementsByTagName('li')
if (list.length > 0) {
    for (i = 0; i < list.length; i++) {
        console.log(list[i]);
        /*var remove = document.getElementsByTagName('li')[i];
        var container = remove.parentNode;
        container.removeChild(remove);*/
        //not working for me
    }
}
//removing items the writen out way because I tried to do it the other way but couldn't figur it out in the time I had.
var remove = document.getElementsByTagName('li') [0];
var remove1= document.getElementsByTagName('li') [1];
var remove2 = document.getElementsByTagName('li') [2];
var remove3 = document.getElementsByTagName('li') [3];
var container = remove.parentNode;
var container = remove1.parentNode;
var container = remove2.parentNode;
var container = remove3.parentNode;
container.removeChild(remove);
container.removeChild(remove1);
container.removeChild(remove2);
container.removeChild(remove3);


//adding item to list
var replace = document.createElement('li')
var replacement = document.createTextNode('Bought all the groceries');
replace.appendChild(replacement);
document.getElementById('grocery-list').appendChild(replace);