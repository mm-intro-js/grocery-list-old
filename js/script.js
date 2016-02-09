var ul = document.getElementById("grocery-list");
var liElements = ul.getElementsByTagName('li');
var len = liElements.length;

if (len >= 1) {
    for (i = 0; i < len; i++) {
        console.log(liElements[i].textContent);
    }
    while (len > 0) {
        ul.removeChild(liElements[0]);
    }
    var newEl = document.createElement('li');
    var newTxt = document.createTextNode("Bought all the groceries");
    newEl.appendChild(newTxt);
    ul.appendChild(newEl);
}
